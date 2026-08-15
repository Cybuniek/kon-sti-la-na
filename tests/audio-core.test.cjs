const test = require('node:test');
const assert = require('node:assert/strict');
const { createTrackVariant, bindExclusivePlayback } = require('../audio-core.js');

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
