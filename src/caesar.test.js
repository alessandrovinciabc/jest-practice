import caesar from './caesar.js';

test('with 0 shift it returns original string', () => {
  expect(caesar('banana', 0)).toBe('banana');
});
