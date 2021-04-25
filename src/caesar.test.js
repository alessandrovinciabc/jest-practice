import caesar from './caesar.js';

test('with 0 shift it returns original string', () => {
  expect(caesar('banana', 0)).toBe('banana');
});

test('works with negative shifts', () => {
  expect(caesar('cbobob', -1)).toBe('banana');
});

test('wraps around after z', () => {
  expect(caesar('zombie', 1)).toBe('apncjf');
});

test("doesn't break with punctuation", () => {
  expect(caesar('a.b', 1)).toBe('b.c');
});

test('keeps the case', () => {
  expect(caesar('Banana', 1)).toBe('Cbobob');
});
