import calculator from './calculator.js';

describe('with addition', () => {
  test('summing positive numbers works', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });

  test('summing a negative and positive number works', () => {
    expect(calculator.add(2, -2)).toBe(0);
  });

  test('summing negative numbers works', () => {
    expect(calculator.add(-2, -2)).toBe(-4);
  });
});

describe('with subtraction', () => {
  test('right hand negative numbers become positive', () => {
    expect(calculator.subtract(5, -1)).toBe(6);
  });
  test('it works', () => {
    expect(calculator.subtract(5, 5)).toBe(0);
  });
});

describe('with multiplication', () => {
  test('multiplying by 0 gives 0', () => {
    expect(calculator.multiply(3, 0)).toBe(0);
  });
  test('multiplying by a negative number changes sign', () => {
    expect(calculator.multiply(3, -1)).toBe(-3);
    expect(calculator.multiply(-3, -1)).toBe(3);
  });
});

describe('with division', () => {
  test('dividing by 0 throws an error', () => {
    expect(() => {
      calculator.divide(5, 0);
    }).toThrow();
  });
  test('it works', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });
});
