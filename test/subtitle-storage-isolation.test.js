const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const settingsCore = require('../3wa_netflix/settings-core.js');

const root = path.resolve(__dirname, '..');
const background = fs.readFileSync(path.join(root, '3wa_netflix', 'background.js'), 'utf8');
const pageHook = fs.readFileSync(path.join(root, '3wa_netflix', 'page-hook.js'), 'utf8');

assert.ok(
  background.includes("'my_netflix_auto_history_sidebar': { 'default': 'false' }"),
  'history sidebar must default off'
);

assert.equal(
  background.includes('localStorage.setItem("my_netflix___SUB["+movieID+"]["+subTitle+"]", this.response);'),
  false,
  'legacy XHR hook must not write formal subtitle cache with current page movieID'
);

assert.ok(pageHook.includes('movieIdSource:'), 'page hook must report whether movieId came from manifest or location');

assert.deepEqual(
  settingsCore.resolveSubtitleXmlStorage({
    movieId: '9001',
    movieIdSource: 'location',
    language: 'en',
    xml: '<tt><p begin="0" end="1">A</p></tt>'
  }, {
    currentMovieId: '9001',
    pendingSubtitleName: 'English'
  }),
  {
    action: 'quarantine',
    reason: 'location_movie_id_untrusted',
    movieId: '9001',
    subtitleName: 'English'
  }
);

console.log('subtitle storage isolation tests passed');
