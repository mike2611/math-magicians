import calculate from './calculate';
import operate from './operate';

describe('Test for calculate functions', () => {
  let state; let
    buttonName;

  beforeEach(() => {
    state = {
      total: null,
      next: null,
      operation: null,
    };
  });

  test('Testing if the buttonName is AC', () => {
    buttonName = 'AC';
    state.total = '1';
    state.next = '2';
    state.operation = '+';
    const result = calculate(state, buttonName);

    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('Testing if buttonName is a number, is equal to 0 and object.next is equal to 0 return empty objet', () => {
    buttonName = '0';
    state.next = '0';
    const result = calculate(state, buttonName);

    expect(result).toEqual({});
  });

  test('Testing if buttonName is a number, if there is an operation and if there is object.next', () => {
    buttonName = '0';
    state.operation = 'x';
    state.next = '3';
    const result = calculate(state, buttonName);

    expect(result).toEqual({
      ...state,
      next: state.next + buttonName,
    });
  });

  test('Testing if buttonName is a number, if there is an operation and if there is object.next if false', () => {
    buttonName = '0';
    state.operation = 'x';
    const result = calculate(state, buttonName);

    expect(result).toEqual({
      ...state,
      next: buttonName,
    });
  });

  test('Testing if buttonName is a number and obj.next is true', () => {
    buttonName = '0';
    state.next = '3';
    const result = calculate(state, buttonName);

    expect(result).toEqual({
      next: state.next + buttonName,
      total: null,
    });
  });

  test('Testing if buttonName is a number and no other conditions are met', () => {
    buttonName = '0';
    const result = calculate(state, buttonName);

    expect(result).toEqual({
      next: buttonName,
      total: null,
    });
  });

  test('Testing if buttonName is . and obj.next exist and object.next includes the .', () => {
    buttonName = '.';
    state.next = '.2';
    const result = calculate(state, buttonName);

    expect(result).toEqual({
      ...state,
    });
  });

  test('Testing if buttonName is . and obj.next exist', () => {
    buttonName = '.';
    state.next = '2';
    const result = calculate(state, buttonName);

    expect(result).toEqual({
      ...state,
      next: `${state.next}.`,
    });
  });

  test('Testing if buttonName is . and obj.operation exist', () => {
    buttonName = '.';
    state.operation = 'x';
    const result = calculate(state, buttonName);

    expect(result).toEqual({
      next: '0.',
    });
  });

  test('Testing if buttonName is . and obj.total exist object.total includes the .', () => {
    buttonName = '.';
    state.total = '2.';
    const result = calculate(state, buttonName);

    expect(result).toEqual({});
  });

  test('Testing if buttonName is . and obj.total exist', () => {
    buttonName = '.';
    state.total = '2';
    const result = calculate(state, buttonName);

    expect(result).toEqual({
      total: `${state.total}.`,
    });
  });

  test('Testing if buttonName is a . and no other conditions are met', () => {
    buttonName = '.';
    const result = calculate(state, buttonName);

    expect(result).toEqual({
      total: '0.',
    });
  });

  test('Testing if buttonName is a = and obj.next and obj.operation exists', () => {
    buttonName = '=';
    state.total = '2';
    state.next = '1';
    state.operation = '-';
    const result = calculate(state, buttonName);

    expect(result).toEqual({
      total: operate(state.total, state.next, state.operation),
      next: null,
      operation: null,
    });
  });

  test('Testing if buttonName is a =', () => {
    buttonName = '=';
    const result = calculate(state, buttonName);

    expect(result).toEqual({});
  });

  test('Testing if buttonName is +/- and obj.next exist', () => {
    buttonName = '+/-';
    state.next = '3';
    const result = calculate(state, buttonName);

    expect(result).toEqual({
      ...state,
      next: (-1 * parseFloat(state.next)).toString(),
    });
  });

  test('Testing if buttonName is +/- and obj.total exist', () => {
    buttonName = '+/-';
    state.total = '3';
    const result = calculate(state, buttonName);

    expect(result).toEqual({
      ...state,
      total: (-1 * parseFloat(state.total)).toString(),
    });
  });

  test('Testing if buttonName is +/-', () => {
    buttonName = '+/-';
    const result = calculate(state, buttonName);

    expect(result).toEqual({});
  });

  test('Testing if obj.total exist and obj.next and obj.operation doesn\'t', () => {
    state.total = '3';
    buttonName = '+';
    const result = calculate(state, buttonName);

    expect(result).toEqual({
      ...state,
      operation: buttonName,
    });
  });

  test('Testing if obj.operation and obj.total exists and obj.next doesn\'t', () => {
    state.total = '3';
    state.operation = '+';
    buttonName = '+';
    const result = calculate(state, buttonName);

    expect(result).toEqual({
      ...state,
      operation: buttonName,
    });
  });

  test('Testing if obj.operation exists and obj.next and obj.total doesn\'t', () => {
    state.total = '2';
    state.next = '1';
    state.operation = '+';
    buttonName = '+';
    const result = calculate(state, buttonName);

    expect(result).toEqual({
      total: operate(state.total, state.next, state.operation),
      next: null,
      operation: buttonName,
    });
  });

  test('Testing if obj.next doesn\'t exists', () => {
    const result = calculate(state, buttonName);

    expect(result).toEqual({
      operation: buttonName,
    });
  });

  test('Testing if save the operation and shift next into total', () => {
    state.next = '2';
    const result = calculate(state, buttonName);

    expect(result).toEqual({
      total: state.next,
      next: null,
      operation: buttonName,
    });
  });
});
