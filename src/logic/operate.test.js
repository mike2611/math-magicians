import operate from './operate';

describe('operate logic test', () => {
  test('Test operation +', () => {
    const result = operate('1', '2', '+');
    expect(result).toBe('3');
  });
  test('Test operation -', () => {
    const result = operate('1', '2', '-');
    expect(result).toBe('-1');
  });
  test('Test operation x', () => {
    const result = operate('1', '2', 'x');
    expect(result).toBe('2');
  });
  test('Test operation ÷', () => {
    const result = operate('4', '2', '÷');
    expect(result).toBe('2');
  });
  test('Test operation %', () => {
    const result = operate('2', '2', '%');
    expect(result).toBe('0');
  });
});
