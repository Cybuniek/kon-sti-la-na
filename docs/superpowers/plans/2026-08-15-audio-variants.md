# Audio Variants Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Display and play the available `trackNN.mp3` versions as clearly labelled variants in the collapsible audio widget.

**Architecture:** A small dependency-free `audio-core.js` browser/Node module will convert configured track numbers into labels and asset paths, and bind exclusive playback to a set of audio elements. `script.js` will use it to render the list into a dedicated widget container. The static HTML retains only the widget shell, while CSS lays out successive variant entries.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, Node.js built-in `node:test`.

## Global Constraints

- Keep the site standalone and suitable for GitHub Pages; do not add dependencies or a build step.
- Use two-space indentation and kebab-case CSS classes.
- Track files remain relative assets using the exact pattern `assets/trackNN.mp3`.
- Starting configuration lists only `01` and `02`; later versions are enabled by adding their two-digit number to one array.
- Playing one variant pauses all other variants.
- Preserve the existing `localStorage` collapse key and accessible toggle semantics.

---

### Task 1: Add a tested audio-variant core

**Files:**
- Create: `tests/audio-core.test.cjs`
- Create: `audio-core.js`

**Interfaces:**
- Produces: `AudioCore.createTrackVariant(number)` returning `{ id: "track-01", label: "Wariant 01", src: "assets/track01.mp3" }` for `"01"`.
- Produces: `AudioCore.bindExclusivePlayback(audioElements)` which pauses every element except the one emitting `play`.
- Consumes: an iterable of standard `<audio>` elements with `addEventListener` and `pause` methods.

- [ ] **Step 1: Write the failing test**

```js
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
  const first = { pauseCalls: 0, addEventListener: (name, handler) => listeners.set(name, handler), pause() { this.pauseCalls += 1; } };
  const second = { pauseCalls: 0, addEventListener: (name, handler) => listeners.set(`${name}-second`, handler), pause() { this.pauseCalls += 1; } };

  bindExclusivePlayback([first, second]);
  listeners.get('play-second')();

  assert.equal(first.pauseCalls, 1);
  assert.equal(second.pauseCalls, 0);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/audio-core.test.cjs`

Expected: FAIL because `../audio-core.js` does not exist.

- [ ] **Step 3: Write minimal implementation**

```js
(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.AudioCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  function createTrackVariant(number) {
    const suffix = String(number).padStart(2, '0');
    return { id: `track-${suffix}`, label: `Wariant ${suffix}`, src: `assets/track${suffix}.mp3` };
  }

  function bindExclusivePlayback(audioElements) {
    [...audioElements].forEach((current) => {
      current.addEventListener('play', () => {
        [...audioElements].filter((other) => other !== current).forEach((other) => other.pause());
      });
    });
  }

  return { createTrackVariant, bindExclusivePlayback };
});
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/audio-core.test.cjs`

Expected: PASS with 2 passing tests.

- [ ] **Step 5: Commit**

```bash
git add tests/audio-core.test.cjs audio-core.js
git commit -m "Add audio variant core"
```

### Task 2: Add a tested configured variant list and render its players

**Files:**
- Modify: `index.html:245-250`
- Modify: `index.html:323` (load `audio-core.js` before `script.js`)
- Modify: `script.js:1-2,354-355,455-469`

**Interfaces:**
- Consumes: `AudioCore.createTrackVariant(number)` and `AudioCore.bindExclusivePlayback(audioElements)` from `audio-core.js`.
- Produces: `AudioCore.createTrackVariants(numbers)` returning configured variants while preserving their leading zeros.
- Produces: `<article class="audio-variant">` entries with an associated `<audio>` element inside `#audioVariantList`.

- [ ] **Step 1: Extend the failing test with the requested configuration**

```js
// Extend the existing import at the top of tests/audio-core.test.cjs:
// const { createTrackVariant, createTrackVariants, bindExclusivePlayback } = require('../audio-core.js');

test('createTrackVariants preserves leading zeros for configured tracks', () => {
  assert.deepEqual(createTrackVariants(['01', '02']), [
    { id: 'track-01', label: 'Wariant 01', src: 'assets/track01.mp3' },
    { id: 'track-02', label: 'Wariant 02', src: 'assets/track02.mp3' }
  ]);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/audio-core.test.cjs`

Expected: FAIL because `createTrackVariants` is not exported yet.

- [ ] **Step 3: Add the configured-list helper and render the list**

```js
function createTrackVariant(number) {
  const suffix = String(number).padStart(2, '0');
  return { id: `track-${suffix}`, label: `Wariant ${suffix}`, src: `assets/track${suffix}.mp3` };
}

function createTrackVariants(numbers) {
  return numbers.map((number) => createTrackVariant(number));
}

const audioTrackNumbers = ['01', '02'];

function renderAudioVariants() {
  const variants = AudioCore.createTrackVariants(audioTrackNumbers);
  audioVariantList.innerHTML = '';
  variants.forEach((variant) => {
    const item = document.createElement('article');
    item.className = 'audio-variant';
    const label = document.createElement('p');
    label.textContent = variant.label;
    const audio = document.createElement('audio');
    audio.controls = true;
    audio.preload = 'metadata';
    audio.src = variant.src;
    item.append(label, audio);
    audioVariantList.append(item);
  });
  AudioCore.bindExclusivePlayback(audioVariantList.querySelectorAll('audio'));
}
```

Return `createTrackVariants` alongside the two existing core functions. Replace the static player with `<div class="audio-variant-list" id="audioVariantList"></div>`, call `renderAudioVariants()` during setup, and include `<script src="audio-core.js"></script>` directly before `script.js`.

- [ ] **Step 4: Run tests to verify they pass**

Run: `node --test tests/audio-core.test.cjs tests/planner-core.test.cjs`

Expected: PASS with all audio-core and existing planner-core tests passing.

- [ ] **Step 5: Commit**

```bash
git add index.html script.js audio-core.js tests/audio-core.test.cjs
git commit -m "Render audio track variants"
```

### Task 3: Add list spacing and verify the static page

**Files:**
- Modify: `style.css:1199-1214`

**Interfaces:**
- Consumes: `.audio-variant-list` and `.audio-variant` generated by `renderAudioVariants()`.
- Produces: vertically separated, readable audio entries without changing the widget’s collapse or mobile rules.

- [ ] **Step 1: Write the failing CSS-presence test**

```js
const fs = require('node:fs');

test('audio widget styles space successive variants', () => {
  const css = fs.readFileSync('style.css', 'utf8');
  assert.match(css, /\.audio-variant-list\s*\{[\s\S]*display:\s*grid/);
  assert.match(css, /\.audio-variant\s*\{[\s\S]*gap:\s*/);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/audio-core.test.cjs`

Expected: FAIL because the variant classes are not styled yet.

- [ ] **Step 3: Add minimal responsive list styles**

```css
.audio-variant-list {
  display: grid;
  gap: 12px;
}

.audio-variant {
  display: grid;
  gap: 6px;
}

.audio-variant p {
  margin: 0;
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.4;
}
```

- [ ] **Step 4: Run all automated checks**

Run: `node --test tests/*.test.cjs; git diff --check`

Expected: PASS with every test passing and no whitespace errors.

- [ ] **Step 5: Manually verify in a local browser**

Run: `python -m http.server 8000`

Check: the collapsed button restores its saved state; the expanded widget lists `Wariant 01` and `Wariant 02`; each player loads its matching asset; starting one stops the other; the widget remains usable at mobile width.

- [ ] **Step 6: Commit**

```bash
git add style.css tests/audio-core.test.cjs
git commit -m "Style audio variant list"
```

### Task 4: Publish the requested track replacement and widget update

**Files:**
- Add: `assets/track01.mp3`
- Add: `assets/track02.mp3`
- Delete: `assets/bgmusic.mp3`
- Modify: all files created or changed in Tasks 1-3

**Interfaces:**
- Consumes: the user-supplied asset replacement files.
- Produces: a focused GitHub branch, commit, push, and draft pull request containing only the audio widget work and its required assets.

- [ ] **Step 1: Confirm the exact publish diff**

Run: `git status -sb; git diff --stat; git diff --name-status`

Expected: the publish scope contains only the audio-widget source, tests, documentation, `assets/track01.mp3`, `assets/track02.mp3`, and deletion of `assets/bgmusic.mp3`; it excludes `00.jpg` and `01.jpg`.

- [ ] **Step 2: Verify GitHub CLI availability and authentication**

Run: `gh --version; gh auth status`

Expected: an installed `gh` with an authenticated account.

- [ ] **Step 3: Create a feature branch and commit the final scope**

```bash
git switch -c codex/audio-track-variants
git add -- index.html script.js style.css audio-core.js tests/audio-core.test.cjs docs/superpowers assets/track01.mp3 assets/track02.mp3
git add -u -- assets/bgmusic.mp3
git commit -m "Add audio track variants"
```

- [ ] **Step 4: Push and open a draft pull request**

Run: `git push -u origin codex/audio-track-variants`

Then create a draft PR titled `Add audio track variants`, explaining the new auto-labelled list, exclusive playback, and the checks run.

- [ ] **Step 5: Report the branch, commit, PR URL, and verification output**
