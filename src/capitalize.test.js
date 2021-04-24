import capitalize from './capitalize.js';

test('first character is capitalized', () => {
  expect(capitalize('banana')).toMatch(/^[A-Z]/);
});

test("other characters don't change", () => {
  expect(capitalize('iNcReDiBlE')).toBe('INcReDiBlE');
});
