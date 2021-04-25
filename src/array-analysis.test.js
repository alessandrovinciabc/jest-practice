import analyzeArray from './array-analysis.js';

test('length works', () => {
  expect(analyzeArray([0])).toMatchObject({ length: 1 });
  expect(analyzeArray([])).toMatchObject({ length: 0 });
});

test('max works', () => {
  expect(analyzeArray([5, 2, 1, 99, 6, 1])).toMatchObject({ max: 99 });
});

test('min works', () => {
  expect(analyzeArray([9, 2, 8, 5, 3, 1, -3])).toMatchObject({ min: -3 });
});

test('average works', () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toMatchObject({ average: 3 });
});
