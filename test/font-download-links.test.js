const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, '3wa_netflix', 'manifest.json'), 'utf8'));
const background = fs.readFileSync(path.join(root, '3wa_netflix', 'background.js'), 'utf8');

assert.equal(manifest.version, '3.6.5');

const expectedLinks = [
  'https://github.com/ButTaiwan/genyog-font/releases/download/v2.100/GenYoGothic2TW-otf.zip',
  'https://github.com/ButTaiwan/genseki-font/releases/download/v2.100/GenSekiGothic2TW-otf.zip',
  'https://github.com/ButTaiwan/iansui/releases/download/v1.020/iansui.zip',
  'https://github.com/lxgw/LxgwWenKai/releases/download/v1.522/LXGWWenKaiMono-Regular.ttf',
  'https://github.com/ButTaiwan/bpmfvs/releases/download/v1.500/BpmfZihiKaiStd.zip',
  'https://github.com/ButTaiwan/bpmfvs/releases/download/v1.500/BpmfZihiSans.zip',
  'https://github.com/ButTaiwan/bpmfvs/releases/download/v1.500/BpmfZihiSerif.zip'
];

const removedLinks = [
  'https://github.com/ButTaiwan/genyog-font/raw/master/ttc/GenYoGothic-R.ttc',
  'https://github.com/ButTaiwan/genseki-font/raw/master/ttc/GenSekiGothic-R.ttc',
  'https://github.com/ButTaiwan/iansui/raw/main/Iansui-Regular.ttf',
  'https://github.com/ButTaiwan/bpmfvs/raw/master/outputs/BpmfZihiKaiStd-Regular.ttf',
  'https://github.com/ButTaiwan/bpmfvs/raw/master/outputs/BpmfZihiSans-Regular.ttf',
  'https://github.com/ButTaiwan/bpmfvs/raw/master/outputs/BpmfZihiSerif-Regular.ttf'
];

for (const url of expectedLinks) {
  assert.ok(background.includes(url), `missing fixed font link: ${url}`);
}

for (const url of removedLinks) {
  assert.equal(background.includes(url), false, `old broken font link remains: ${url}`);
}

console.log('font download link tests passed');
