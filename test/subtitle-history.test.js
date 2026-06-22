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
const searchRows = rows;

const overlapState = core.createSubtitleHistoryState(10);
core.recordSubtitleHistory(overlapState, {
  movieId: 'movie-b',
  currentMs: 1254155,
  nowMs: 1000,
  mainText: '主人那麼認真 不要說什麼好好享受，右邊的',
  subText: "You shouldn't say that when our master is serious about this, Right."
});
core.recordSubtitleHistory(overlapState, {
  movieId: 'movie-b',
  currentMs: 1254251,
  nowMs: 1100,
  mainText: '主人那麼認真 不要說什麼好好享受，右邊的',
  subText: 'Well, how do you feel about it, Left?'
});
core.recordSubtitleHistory(overlapState, {
  movieId: 'movie-b',
  currentMs: 1255967,
  nowMs: 1200,
  mainText: '那你又是怎麼想的啊，左邊的?',
  subText: 'Well, how do you feel about it, Left?'
});
core.recordSubtitleHistory(overlapState, {
  movieId: 'movie-b',
  currentMs: 1257171,
  nowMs: 1300,
  mainText: '那你又是怎麼想的啊，左邊的?',
  subText: 'Well, how do you feel about it, Left?'
});

rows = core.getSubtitleHistoryRows(overlapState);
assert.equal(rows.length, 1);
assert.equal(rows[0].mainText, '那你又是怎麼想的啊，左邊的?');
assert.equal(rows[0].subText, 'Well, how do you feel about it, Left?');
assert.ok(rows[0].endMs >= 1258971);

const matches = core.searchSubtitleHistoryRows(searchRows, 'third');
assert.deepEqual(matches, [2]);
assert.deepEqual(core.searchSubtitleHistoryRows(searchRows, '第二'), [1]);
assert.deepEqual(core.searchSubtitleHistoryRows(searchRows, ''), []);

assert.equal(core.formatSubtitleHistoryTime(3723400), '01:02:03,400');

console.log('subtitle history tests passed');
