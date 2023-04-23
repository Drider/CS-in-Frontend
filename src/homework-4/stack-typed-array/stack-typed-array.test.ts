import StackTypedArray from './stack-typed-array';

describe('StackTypedArray: ', () => {
  let stack;

  beforeEach(() => {
    stack = new StackTypedArray(Int16Array, 5);
  });

  test('should correctly push values', () => {
    stack.push(1);
    stack.push(12);
    stack.push(144);
    stack.push(-5);

    expect(stack.head).toBe(-5);
  });

  test('should correctly pop values', () => {
    const values = [1, 12, 144, -5];

    values.forEach((val) => stack.push(val));

    expect(stack.pop()).toBe(-5);
    expect(stack.pop()).toBe(144);
    expect(stack.pop()).toBe(12);
    expect(stack.pop()).toBe(1);
  });

  test('should correctly throw exeption on stack overflow', () => {
    expect(() => {
      const values = [1, 12, 144, -5, 10, 22];

      values.forEach((val) => stack.push(val));
    }).toThrow(/Stack overflow: you can`t add .+/);
  });

  test('should correctly throw exeption on pop values if stack is empty', () => {
    expect(() => {
      stack.pop();
    }).toThrow('Can`t pop value, stack is empty');
  });
});
