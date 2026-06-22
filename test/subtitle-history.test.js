const assert = require('node:assert/strict');
const core = require('../3wa_netflix/subtitle-core.js');

assert.equal(core.normalizeSubtitleHistoryText(null), '');
assert.equal(core.normalizeSubtitleHistoryText('  Hello\n  world  '), 'Hello world');

const state = core.createSubtitleHistoryState(3);

core.recordSubtitleHistory(state, {
  movieId: 'movie-a',
  currentMs: 1000,
  nowMs: 100,
  mainText: '第一句',
  subText: ''
});

core.recordSubtitleHistory(state, {
  movieId: 'movie-a',
  currentMs: 1600,
  nowMs: 200,
  mainText: '',
  subText: 'First line'
});

let rows = core.getSubtitleHistoryRows(state);
assert.equal(rows.length, 1);
assert.equal(rows[0].mainText, '第一句');
assert.equal(rows[0].subText, 'First line');
assert.equal(rows[0].startMs, 1000);
assert.ok(rows[0].endMs >= 3400);

core.recordSubtitleHistory(state, {
  movieId: 'movie-a',
  currentMs: 2200,
  nowMs: 300,
  mainText: '第一句',
  subText: 'First line'
});

rows = core.getSubtitleHistoryRows(state);
assert.equal(rows.length, 1);
assert.ok(rows[0].endMs >= 4000);

core.recordSubtitleHistory(state, {
  movieId: 'movie-a',
  currentMs: 7000,
  nowMs: 400,
  mainText: '第二句',
  subText: 'Second line'
});
core.recordSubtitleHistory(state, {
  movieId: 'movie-a',
  currentMs: 5000,
  nowMs: 500,
  mainText: '插入較早時間',
  subText: 'Earlier timeline'
});
core.recordSubtitleHistory(state, {
  movieId: 'movie-a',
  currentMs: 9000,
  nowMs: 600,
  mainText: '第三句',
  subText: 'Third line'
});

rows = core.getSubtitleHistoryRows(state);
assert.equal(rows.length, 3);
assert.deepEqual(rows.map(row => row.mainText), ['插入較早時間', '第二句', '第三句']);
assert.equal(rows.some(row => row.mainText === '第一句'), false);

const matches = core.searchSubtitleHistoryRows(rows, 'third');
assert.deepEqual(matches, [2]);
assert.deepEqual(core.searchSubtitleHistoryRows(rows, '第二'), [1]);
assert.deepEqual(core.searchSubtitleHistoryRows(rows, ''), []);

assert.equal(core.formatSubtitleHistoryTime(3723400), '01:02:03,400');

console.log('subtitle history tests passed');
