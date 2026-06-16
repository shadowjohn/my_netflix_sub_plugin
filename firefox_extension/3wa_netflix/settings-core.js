(function (root, factory) {
    var core = factory();
    if (typeof module === 'object' && module.exports) {
        module.exports = core;
    }
    root.myNetflixSettingsCore = core;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
    'use strict';

    var MAIN_PROFILE_KEYS = [
        'my_netflix_sub1',
        'my_netflix_font_family',
        'my_netflix_font_color',
        'my_netflix_font_border_color',
        'my_netflix_font_bolder',
        'my_netflix_y_position',
        'my_netflix_fontsize',
        'my_netflix_fontspace',
        'my_netflix_font_text_shadow'
    ];

    var SECONDARY_PROFILE_KEYS = [
        'my_netflix_sub2',
        'my_netflix_font_family_2',
        'my_netflix_font_color_2',
        'my_netflix_font_border_color_2',
        'my_netflix_font_bolder_2',
        'my_netflix_y_position_2',
        'my_netflix_fontsize_2',
        'my_netflix_fontspace_2',
        'my_netflix_font_text_shadow_2'
    ];

    function trimText(value) {
        if (value == null) return '';
        return String(value).replace(/\s+/g, ' ').trim();
    }

    function sanitizeProfileName(value) {
        var text = trimText(String(value == null ? '' : value).replace(/<[^>]*>/g, '').replace(/[<>]/g, ''));
        if (text === '') text = '我的最愛';
        return Array.from(text).slice(0, 10).join('');
    }

    function getKeysByKind(kind) {
        return kind === 'secondary' ? SECONDARY_PROFILE_KEYS : MAIN_PROFILE_KEYS;
    }

    function normalizeKind(kind) {
        return kind === 'secondary' ? 'secondary' : 'main';
    }

    function createFavoriteProfile(kind, name, values) {
        var normalizedKind = normalizeKind(kind);
        var keys = getKeysByKind(normalizedKind);
        var settings = {};
        values = values || {};

        for (var i = 0, max = keys.length; i < max; i++) {
            var key = keys[i];
            if (Object.prototype.hasOwnProperty.call(values, key)) {
                settings[key] = values[key];
            }
        }

        return {
            kind: normalizedKind,
            name: sanitizeProfileName(name),
            settings: settings
        };
    }

    function normalizeProfile(kind, profile, index) {
        var normalizedKind = normalizeKind(kind);
        profile = profile || {};
        var name = profile.name || ('我的最愛' + (index + 1));
        return createFavoriteProfile(normalizedKind, name, profile.settings || {});
    }

    function normalizeProfileList(kind, list) {
        if (!Array.isArray(list)) {
            throw new Error(kind + ' profiles must be an array');
        }
        if (list.length !== 3) {
            throw new Error(kind + ' profiles must contain exactly 3 items');
        }

        var result = [];
        for (var i = 0; i < 3; i++) {
            result.push(normalizeProfile(kind, list[i], i));
        }
        return result;
    }

    function normalizeFavoritePayload(payload) {
        if (payload == null || typeof payload !== 'object') {
            throw new Error('favorite profiles payload must be an object');
        }
        if (!Array.isArray(payload.main)) {
            throw new Error('main profiles are required');
        }
        if (!Array.isArray(payload.secondary)) {
            throw new Error('secondary profiles are required');
        }

        return {
            version: 1,
            main: normalizeProfileList('main', payload.main),
            secondary: normalizeProfileList('secondary', payload.secondary)
        };
    }

    function exportFavoriteProfiles(payload) {
        return JSON.stringify(normalizeFavoritePayload(payload), null, 2);
    }

    function importFavoriteProfiles(jsonText) {
        var parsed;
        try {
            parsed = JSON.parse(String(jsonText || ''));
        }
        catch (e) {
            throw new Error('favorite profiles json parse failed');
        }
        return normalizeFavoritePayload(parsed);
    }

    function resolveSubtitleXmlStorage(payload, options) {
        payload = payload || {};
        options = options || {};

        var currentMovieId = trimText(options.currentMovieId);
        var payloadMovieId = trimText(payload.movieId);
        var pendingSubtitleName = trimText(options.pendingSubtitleName);
        var fallbackName = trimText(payload.language) || trimText(payload.trackId) || 'unknown';
        var subtitleName = pendingSubtitleName || fallbackName;

        if (currentMovieId === '' || typeof payload.xml !== 'string' || payload.xml === '') {
            return {
                action: 'skip',
                reason: 'missing_required_data',
                movieId: currentMovieId,
                subtitleName: subtitleName
            };
        }

        if (payloadMovieId !== '' && payloadMovieId !== currentMovieId) {
            return {
                action: 'quarantine',
                reason: 'movie_mismatch',
                movieId: payloadMovieId,
                subtitleName: subtitleName
            };
        }

        if (pendingSubtitleName === '') {
            return {
                action: 'quarantine',
                reason: 'no_pending_subtitle',
                movieId: currentMovieId,
                subtitleName: subtitleName
            };
        }

        return {
            action: 'formal',
            reason: 'pending_subtitle_match',
            movieId: currentMovieId,
            subtitleName: pendingSubtitleName
        };
    }

    return {
        MAIN_PROFILE_KEYS: MAIN_PROFILE_KEYS,
        SECONDARY_PROFILE_KEYS: SECONDARY_PROFILE_KEYS,
        createFavoriteProfile: createFavoriteProfile,
        exportFavoriteProfiles: exportFavoriteProfiles,
        importFavoriteProfiles: importFavoriteProfiles,
        resolveSubtitleXmlStorage: resolveSubtitleXmlStorage,
        sanitizeProfileName: sanitizeProfileName
    };
});
