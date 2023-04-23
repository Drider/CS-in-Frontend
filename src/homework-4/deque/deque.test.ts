import Deque from './deque';

describe('Deque: ', () => {
  let deque;

  beforeEach(() => {
    deque = new Deque<number>();
  });

  test('should correctly add to start and remove from start of the deque', () => {
    deque.unshift(1);
    deque.unshift(2);

    expect(deque.shift()).toBe(2);
    expect(deque.shift()).toBe(1);
    expect(deque.shift()).toBeNull();
  });

  test('should correctly add to end and remove from end of the deque', () => {
    deque.push(1);
    deque.push(2);

    expect(deque.pop()).toBe(2);
    expect(deque.pop()).toBe(1);
    expect(deque.pop()).toBeNull();
  });
});
