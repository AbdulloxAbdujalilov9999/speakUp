// Run with: node tests/progress-merge.test.js
const assert = require("assert");
const { merge, signature } = require("../shared/progress-merge.js");

const days = (from, to, at = 1000, score = 80) => { const o = {}; for (let d = from; d <= to; d++) o[d] = { date: "2026-10-01", score, at }; return o; };
const xpOf = (o) => Object.values(o).reduce((s, e) => s + 100 + e.score * 5, 0);
const base = (completed, extra = {}) => Object.assign({ completed, grammarDone: {}, homeworkDone: {}, roleplay: {}, appliedResets: {}, xp: xpOf(completed), streak: 3, lastDate: "2026-10-05", name: "Ali" }, extra);

// What Realtime Database does to a value: drops null/undefined and empty objects, and returns an
// Array for objects with mostly-dense integer keys.
function rtdb(v) {
  if (v === null || v === undefined) return undefined;
  if (Array.isArray(v)) v = Object.assign({}, v);
  if (typeof v !== "object") return v;
  const out = {};
  for (const [k, x] of Object.entries(v)) { const y = rtdb(x); if (y !== undefined) out[k] = y; }
  const ks = Object.keys(out);
  if (!ks.length) return undefined;
  if (ks.every((k) => /^\d+$/.test(k))) {
    const max = Math.max(...ks.map(Number));
    if (max < ks.length * 2) { const arr = []; for (let i = 0; i <= max; i++) arr[i] = out[i] === undefined ? null : out[i]; return arr; }
  }
  return out;
}

// 1. the reported bug: a stale device (10 lessons) vs the cloud (15)
let stale = base(days(1, 10)), cloud = base(days(1, 15));
let m = merge(stale, cloud);
assert.deepStrictEqual(Object.keys(m.completed).map(Number), Array.from({ length: 15 }, (_, i) => i + 1));
assert.strictEqual(m.xp, cloud.xp, "xp follows the side that is ahead");
assert.strictEqual(signature(merge(cloud, stale)), signature(m), "commutative");
assert.strictEqual(signature(merge(m, m)), signature(m), "idempotent");

// 2. both devices progressed offline
m = merge(base({ ...days(1, 10), ...days(11, 12) }), base({ ...days(1, 10), ...days(13, 14) }));
assert.strictEqual(Object.keys(m.completed).length, 14);
assert.strictEqual(m.xp, xpOf(m.completed), "xp rebuilt from records when both sides have extras");

// 3. a reset on one device isn't undone by a stale device — but re-doing it afterwards sticks
const resetSide = base(days(1, 4), { removed: { completed: { 5: 2000 } }, appliedResets: { r1: true } });
const staleSide = base(days(1, 5));
assert.ok(!merge(staleSide, resetSide).completed[5], "reset day stays reset");
const redone = base({ ...days(1, 4), 5: { date: "x", score: 90, at: 3000 } }, { removed: { completed: { 5: 2000 } } });
assert.strictEqual(merge(resetSide, redone).completed[5].score, 90);

// 4. RTDB returns dense numeric keys as arrays
const asArray = [null, ...Array.from({ length: 5 }, () => ({ date: "x", score: 70, at: 1 }))];
assert.deepStrictEqual(Object.keys(merge(base({}), { completed: asArray, xp: 1 }).completed), ["1", "2", "3", "4", "5"]);

// 5. "erase all" wipes older records everywhere, legacy (no `at`) included
const erased = base({}, { epoch: 5000, xp: 0, streak: 0, lastDate: null });
assert.deepStrictEqual(merge(base({ 1: { date: "x", score: 50 } }), erased).completed, {});
assert.ok(merge(base({ 1: { date: "x", score: 50, at: 6000 } }), erased).completed[1]);

// 6. streak/lastDate, name, applied flags, roleplay best
m = merge(base({}, { lastDate: "2026-10-01", streak: 9, name: "" }), base({}, { lastDate: "2026-10-06", streak: 2, name: "Ali" }));
assert.strictEqual(m.lastDate, "2026-10-06"); assert.strictEqual(m.streak, 2); assert.strictEqual(m.name, "Ali");
assert.strictEqual(merge(base({}, { roleplay: { 3: { best: 60, at: 1 } } }), base({}, { roleplay: { 3: { best: 85, at: 2 } } })).roleplay[3].best, 85);
m = merge(base({}, { appliedResets: { a: true } }), base({}, { appliedResets: { b: true }, appliedPasses: { p: true } }));
assert.deepStrictEqual(Object.keys(m.appliedResets).sort(), ["a", "b"]); assert.ok(m.appliedPasses.p);

// 7. empty / null input
assert.strictEqual(merge(base(days(1, 3)), null).completed[3].score, 80);
assert.strictEqual(merge(null, null).xp, 0);

// 8. no endless re-upload: once written to the cloud and read back, a copy must compare equal to
//    the one that was written (null/empty values never survive a round trip through the database)
[
  base({}, { homeworkDone: { 0: { date: "x", score: 90, at: 1 } }, xp: 350, streak: 0, lastDate: null, name: "" }),
  base(days(1, 12)),
  base({}, { xp: 0, streak: 0, lastDate: null, name: "" }),
].forEach((local, i) => {
  const written = merge(local, null);
  const readBack = rtdb(Object.assign({}, written, { updatedAt: 1 }));
  const echo = merge(local, readBack);
  assert.strictEqual(signature(echo), signature(readBack), `case ${i}: cloud copy must equal what the device would push`);
  assert.strictEqual(signature(echo), signature(written), `case ${i}: device copy must not change`);
});

console.log("all progress-merge tests passed");
