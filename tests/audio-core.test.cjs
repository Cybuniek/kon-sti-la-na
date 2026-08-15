const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const {
  createTrackVariant,
  createTrackVariants,
  bindExclusivePlayback
} = require('../audio-core.js');

test('createTrackVariant builds a label and source from a two-digit track number', () => {
  assert.deepEqual(createTrackVariant('02'), {
    id: 'track-02',
    label: 'Wariant 02',
    src: 'assets/track02.mp3'
  });
});

test('bindExclusivePlayback pauses other tracks when one starts', () => {
  const listeners = new Map();
  const first = {
    pauseCalls: 0,
    addEventListener: (name, handler) => listeners.set(name, handler),
    pause() { this.pauseCalls += 1; }
  };
  const second = {
    pauseCalls: 0,
    addEventListener: (name, handler) => listeners.set(`${name}-second`, handler),
    pause() { this.pauseCalls += 1; }
  };

  bindExclusivePlayback([first, second]);
  listeners.get('play-second')();

  assert.equal(first.pauseCalls, 1);
  assert.equal(second.pauseCalls, 0);
});

test('createTrackVariants preserves leading zeros for configured tracks', () => {
  assert.deepEqual(createTrackVariants(['01', '02']), [
    { id: 'track-01', label: 'Wariant 01', src: 'assets/track01.mp3' },
    { id: 'track-02', label: 'Wariant 02', src: 'assets/track02.mp3' }
  ]);
});

test('audio widget styles space successive variants', () => {
  const css = fs.readFileSync('style.css', 'utf8');
  assert.match(css, /\.audio-variant-list\s*\{[\s\S]*display:\s*grid/);
  assert.match(css, /\.audio-variant\s*\{[\s\S]*gap:\s*/);
});
