import Queue from './queue';

describe('Queue: ', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue<number>();
  });


  test('should correctly push values to the end of the queue', () => {
    queue.push(1);
    queue.push(2);
    queue.push(3);

    expect(queue.head).toBe(1);

    queue.pop();
    queue.pop();

    expect(queue.head).toBe(3);
  });

  test('should correctly get values from the beggining of the queue', () => {
    queue.push(1);
    queue.push(2);
    queue.push(3);

    expect(queue.pop()).toBe(1);
    expect(queue.head).toBe(2);

    expect(queue.pop()).toBe(2);
    expect(queue.head).toBe(3);

    expect(queue.pop()).toBe(3);
    expect(queue.head).toBeNull();

    expect(queue.pop()).toBeNull();
  });

  test('should correctly clear', () => {
    queue.push(1);
    queue.push(2);
    queue.push(3);

    expect(queue.head).toBe(1);

    queue.clear();

    expect(queue.head).toBeNull();
  });
});
