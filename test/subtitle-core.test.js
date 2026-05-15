const assert = require('node:assert/strict');
const core = require('../3wa_netflix/subtitle-core.js');

const sampleXml = `
<tt xmlns="http://www.w3.org/ns/ttml">
  <body>
    <div>
      <p begin="10000000" end="25000000">第一行<br />第二行</p>
      <p begin="00:00:03.000" end="00:00:04.500"><span>第三句</span></p>
    </div>
  </body>
</tt>`;

assert.equal(core.parseTimeToSeconds('10000000'), 1);
assert.equal(core.parseTimeToSeconds('25000000'), 2.5);
assert.equal(core.parseTimeToSeconds('00:00:03.000'), 3);

const cues = core.parseSubtitleXml(sampleXml);
assert.deepEqual(cues, [
  { start: 1, end: 2.5, text: '第一行\n第二行' },
  { start: 3, end: 4.5, text: '第三句' }
]);

assert.equal(core.findCueText(cues, 1.2), '第一行\n第二行');
assert.equal(core.findCueText(cues, 2.8), null);
assert.equal(core.findCueText(cues, 3.1), '第三句');

const namespacedXml = `
<tt:tt xmlns:tt="http://www.w3.org/ns/ttml">
  <tt:body>
    <tt:div>
      <tt:p begin="00:00:05.000" dur="1s">Namespaced cue</tt:p>
    </tt:div>
  </tt:body>
</tt:tt>`;

assert.equal(core.findCueText(core.parseSubtitleXml(namespacedXml), 5.5), 'Namespaced cue');

console.log('subtitle-core tests passed');
