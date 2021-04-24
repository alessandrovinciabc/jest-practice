import capitalize from './capitalize.js';

test('first character is capitalized', () => {
  expect(capitalize('banana')).toMatch(/^[A-Z]/);
});
