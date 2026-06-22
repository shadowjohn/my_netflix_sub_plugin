const assert = require('node:assert/strict');
const core = require('../3wa_netflix/settings-core.js');

const sampleValues = {
  my_netflix_sub1: '繁體中文',
  my_netflix_font_family: 'Microsoft JhengHei',
  my_netflix_font_color: '#ffffff',
  my_netflix_font_border_color: '#000000',
  my_netflix_font_bolder: 700,
  my_netflix_y_position: 18,
  my_netflix_fontsize: 1.5,
  my_netflix_fontspace: 12.5,
  my_netflix_font_text_shadow: 10,
  my_netflix_sub2: 'English',
  my_netflix_font_family_2: 'Arial',
  my_netflix_font_color_2: '#eeeeee',
  my_netflix_font_border_color_2: '#111111',
  my_netflix_font_bolder_2: 400,
  my_netflix_y_position_2: 30,
  my_netflix_fontsize_2: 0.7,
  my_netflix_fontspace_2: 2.6,
  my_netflix_font_text_shadow_2: 5.6
};

assert.equal(core.sanitizeProfileName('<b>電視模式超過十個中文字元</b>'), '電視模式超過十個中文');
assert.equal(core.sanitizeProfileName('NB <b>TV</b> <bad'), 'NB TV bad');
assert.equal(core.sanitizeProfileName('   '), '我的最愛');

const mainProfile = core.createFavoriteProfile('main', '<b>NB主字幕</b>', sampleValues);
assert.equal(mainProfile.kind, 'main');
assert.equal(mainProfile.name, 'NB主字幕');
assert.deepEqual(Object.keys(mainProfile.settings).sort(), core.MAIN_PROFILE_KEYS.slice().sort());
assert.equal(mainProfile.settings.my_netflix_sub1, '繁體中文');
assert.equal(mainProfile.settings.my_netflix_sub2, undefined);

const secondaryProfile = core.createFavoriteProfile('secondary', '電視次字幕', sampleValues);
assert.equal(secondaryProfile.kind, 'secondary');
assert.deepEqual(Object.keys(secondaryProfile.settings).sort(), core.SECONDARY_PROFILE_KEYS.slice().sort());
assert.equal(secondaryProfile.settings.my_netflix_sub2, 'English');
assert.equal(secondaryProfile.settings.my_netflix_sub1, undefined);

const exportJson = core.exportFavoriteProfiles({
  main: [mainProfile, core.createFavoriteProfile('main', '主2', sampleValues), core.createFavoriteProfile('main', '主3', sampleValues)],
  secondary: [secondaryProfile, core.createFavoriteProfile('secondary', '次2', sampleValues), core.createFavoriteProfile('secondary', '次3', sampleValues)]
});
const imported = core.importFavoriteProfiles(exportJson);
assert.equal(imported.main.length, 3);
assert.equal(imported.secondary.length, 3);
assert.equal(imported.main[0].settings.my_netflix_sub1, '繁體中文');
assert.equal(imported.secondary[0].settings.my_netflix_sub2, 'English');

assert.deepEqual(
  core.resolveSubtitleXmlStorage({
    movieId: '9001',
    language: 'zh-TW',
    trackId: 'track-a',
    xml: '<tt><p begin="0" end="1">A</p></tt>'
  }, {
    currentMovieId: '9001',
    pendingSubtitleName: null
  }),
  {
    action: 'quarantine',
    reason: 'no_pending_subtitle',
    movieId: '9001',
    subtitleName: 'zh-TW'
  }
);

assert.deepEqual(
  core.resolveSubtitleXmlStorage({
    movieId: '9002',
    language: 'zh-TW',
    xml: '<tt><p begin="0" end="1">A</p></tt>'
  }, {
    currentMovieId: '9001',
    pendingSubtitleName: '繁體中文'
  }),
  {
    action: 'quarantine',
    reason: 'movie_mismatch',
    movieId: '9002',
    subtitleName: '繁體中文'
  }
);

assert.deepEqual(
  core.resolveSubtitleXmlStorage({
    movieId: '9001',
    movieIdSource: 'location',
    language: 'zh-TW',
    xml: '<tt><p begin="0" end="1">A</p></tt>'
  }, {
    currentMovieId: '9001',
    pendingSubtitleName: '繁體中文'
  }),
  {
    action: 'quarantine',
    reason: 'location_movie_id_untrusted',
    movieId: '9001',
    subtitleName: '繁體中文'
  }
);

assert.deepEqual(
  core.resolveSubtitleXmlStorage({
    movieId: '9001',
    movieIdSource: 'manifest',
    language: 'zh-TW',
    xml: '<tt><p begin="0" end="1">A</p></tt>'
  }, {
    currentMovieId: '9001',
    pendingSubtitleName: '繁體中文'
  }),
  {
    action: 'formal',
    reason: 'pending_subtitle_match',
    movieId: '9001',
    subtitleName: '繁體中文'
  }
);

assert.throws(() => core.importFavoriteProfiles('{"main":[]}'), /secondary/);

console.log('settings-core tests passed');
