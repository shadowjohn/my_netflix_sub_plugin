(function () {
    'use strict';

    if (window.__myNetflixSubtitlePageHook === true) return;
    window.__myNetflixSubtitlePageHook = true;

    var MESSAGE_TYPE = 'MY_NETFLIX_SUBTITLE_XML';
    var MESSAGE_FROM = '3waNetflix-page-hook';
    var MAX_XML_LENGTH = 8 * 1024 * 1024;

    function getMovieId() {
        var match = String(location.pathname || '').match(/\/watch\/(\d+)/);
        return match ? match[1] : null;
    }

    function getRequestUrl(input) {
        if (typeof input === 'string') return input;
        if (input && typeof input.url === 'string') return input.url;
        return '';
    }

    function isSubtitleXml(text) {
        if (typeof text !== 'string') return false;
        if (text.length <= 0 || text.length > MAX_XML_LENGTH) return false;
        if (!/<(?:[\w-]+:)?p\b/i.test(text)) return false;
        return text.indexOf('<tt') !== -1 ||
            text.indexOf('tts:') !== -1 ||
            text.indexOf('xml:lang') !== -1 ||
            text.indexOf('begin=') !== -1;
    }

    function readUrlMeta(url) {
        var meta = {
            language: null,
            trackId: null
        };

        try {
            var parsed = new URL(url, location.href);
            meta.language = parsed.searchParams.get('lang') ||
                parsed.searchParams.get('language') ||
                parsed.searchParams.get('locale') ||
                parsed.searchParams.get('dlid');
            meta.trackId = parsed.searchParams.get('trackId') ||
                parsed.searchParams.get('downloadable_id') ||
                parsed.searchParams.get('id');
        }
        catch (e) {
            // URL 解析失敗不影響字幕本體攔截。
        }

        return meta;
    }

    function shouldReadFetchResponse(response, url) {
        var contentType = '';
        try {
            contentType = response.headers && response.headers.get ? String(response.headers.get('content-type') || '').toLowerCase() : '';
        }
        catch (e) {
            contentType = '';
        }

        if (/(xml|ttml|dfxp|ttaf|text|json)/i.test(contentType)) return true;
        if (/timedtext|subtitle|\/tt\/|\.xml|\.ttml|downloadable_id|trackId|language|locale/i.test(String(url || ''))) return true;
        if (/^(video|audio|image)\//i.test(contentType)) return false;

        // 未知二進位回應先不讀，避免把影音分段整包 clone 成文字造成效能問題。
        return false;
    }

    function postSubtitle(source, url, text) {
        if (!isSubtitleXml(text)) return;

        var meta = readUrlMeta(url);
        window.postMessage({
            type: MESSAGE_TYPE,
            from: MESSAGE_FROM,
            payload: {
                source: source,
                url: url || '',
                movieId: getMovieId(),
                language: meta.language,
                trackId: meta.trackId,
                xml: text,
                capturedAt: Date.now()
            }
        }, '*');
    }

    function hookFetch() {
        if (typeof window.fetch !== 'function') return;

        var originalFetch = window.fetch;
        window.fetch = function () {
            var requestUrl = getRequestUrl(arguments[0]);
            var result = originalFetch.apply(this, arguments);

            try {
                result.then(function (response) {
                    try {
                        if (!shouldReadFetchResponse(response, requestUrl || response.url)) return;
                        var clone = response.clone();
                        clone.text().then(function (text) {
                            postSubtitle('fetch', requestUrl || response.url, text);
                        }).catch(function () {
                            // 非文字回應略過即可。
                        });
                    }
                    catch (e) {
                        // clone 失敗代表這包不是我們要的文字字幕。
                    }
                }).catch(function () {
                    // 原始 fetch 失敗不處理，避免影響 Netflix。
                });
            }
            catch (e) {
                // 保持原始 fetch 行為。
            }

            return result;
        };
    }

    function hookXhr() {
        if (typeof window.XMLHttpRequest !== 'function') return;

        var originalOpen = window.XMLHttpRequest.prototype.open;
        var originalSend = window.XMLHttpRequest.prototype.send;

        window.XMLHttpRequest.prototype.open = function (method, url) {
            this.__myNetflixSubtitleUrl = getRequestUrl(url);
            return originalOpen.apply(this, arguments);
        };

        window.XMLHttpRequest.prototype.send = function () {
            try {
                this.addEventListener('loadend', function () {
                    try {
                        if (this.responseType && this.responseType !== 'text') return;
                        postSubtitle('xhr', this.__myNetflixSubtitleUrl || this.responseURL || '', this.responseText);
                    }
                    catch (e) {
                        // responseText 在部分 responseType 會丟錯，略過即可。
                    }
                });
            }
            catch (e) {
                // addEventListener 失敗時仍照常送出 XHR。
            }

            return originalSend.apply(this, arguments);
        };
    }

    hookFetch();
    hookXhr();
})();
