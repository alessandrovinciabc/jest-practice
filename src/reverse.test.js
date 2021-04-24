import reverse from './reverse.js';

test('string is reversed', () => {
  expect(reverse('apple')).toBe('elppa');
  expect(reverse('mom')).toBe('mom');
});
