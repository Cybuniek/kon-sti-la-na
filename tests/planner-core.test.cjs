const test = require('node:test');
const assert = require('node:assert/strict');
const {
  createDefaultPlan,
  createSignup,
  importSignup,
  approveSignup,
  validateImportPayload
} = require('../planner-core.js');

test('createSignup creates pending requests for selected tasks', () => {
  const plan = createDefaultPlan();
  const signup = createSignup(plan, {
    name: 'Alex',
    taskIds: ['kamera-zewnetrzna', 'bhp-trasa']
  });

  assert.equal(signup.person.name, 'Alex');
  assert.deepEqual(signup.requests.map((request) => request.status), ['pending', 'pending']);
  assert.deepEqual(signup.requests.map((request) => request.taskId), ['kamera-zewnetrzna', 'bhp-trasa']);
});

test('approveSignup rejects a request when a task has no available places', () => {
  const plan = createDefaultPlan();
  const first = createSignup(plan, { name: 'Ada', taskIds: ['kamera-zewnetrzna'] });
  const second = createSignup(plan, { name: 'Bartek', taskIds: ['kamera-zewnetrzna'] });

  importSignup(plan, first);
  importSignup(plan, second);

  assert.equal(approveSignup(plan, first.requests[0].id).ok, true);
  const result = approveSignup(plan, second.requests[0].id);

  assert.deepEqual(result, { ok: false, error: 'Brak wolnych miejsc w tym zadaniu.' });
  assert.equal(second.requests[0].status, 'pending');
});

test('validateImportPayload rejects incompatible and malformed imports', () => {
  assert.deepEqual(validateImportPayload({ version: 99 }), {
    ok: false,
    error: 'Nieobsługiwana wersja pliku planu.'
  });
  assert.deepEqual(validateImportPayload({ version: 1, type: 'signup', person: {} }), {
    ok: false,
    error: 'Plik zgłoszenia nie zawiera poprawnego pseudonimu lub zadań.'
  });
});

test('validateImportPayload accepts an exported signup', () => {
  const plan = createDefaultPlan();
  const signup = createSignup(plan, { name: 'Nina', taskIds: ['backstage-dokumentacja'] });

  assert.deepEqual(validateImportPayload(signup), { ok: true, kind: 'signup' });
});
