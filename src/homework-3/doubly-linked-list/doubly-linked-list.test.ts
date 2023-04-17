import { DoublyLinkedListLink } from './doubly-linked-list-link';
import { DoublyLinkedList } from './doubly-linked-list';

describe('DoublyLinkedListLink:', () => {
  test('should correctly created', () => {
    const link = new DoublyLinkedListLink<number>({ value: 1});
    const link2 = new DoublyLinkedListLink<number>({
      value: 2,
      prev: link,
    });
    const link3 = new DoublyLinkedListLink<number>({
      value: 3,
      prev: link2,
      next: link,
    });

    expect(link.value).toBe(1);
    expect(link.prev).toBeNull();
    expect(link.next).toBeNull();

    expect(link2.prev).toStrictEqual(link);

    expect(link3.prev).toStrictEqual(link2);
    expect(link3.next).toStrictEqual(link);
  });
});

describe('DoublyLinkedList:', () => {
  let list = null;

  beforeEach(() => {
    list = new DoublyLinkedList<number>();
  });

  test('should be able to initialize with iterable', () => {
    const arr = [4, 5, 6];
    const list = new DoublyLinkedList<number>(arr);

    expect(list.first.value).toBe(4);
    expect(list.first.next.value).toBe(5);
    expect(list.last.value).toBe(6);
  });

  test('values should correctly add to the end of the list', () => {
    list.addEnd(1);
    list.addEnd(2);
    list.addEnd(3);

    expect(list.first.value).toBe(1);
    expect(list.last.value).toBe(3);
    expect(list.first.next.value).toBe(2);
    expect(list.first.next.prev.value).toBe(1);
  });

  test('values should correctly add to the beginning of the list', () => {
    list.addStart(3);
    list.addStart(2);
    list.addStart(1);

    expect(list.first.value).toBe(1);
    expect(list.last.value).toBe(3);
    expect(list.first.next.value).toBe(2);
    expect(list.first.next.prev.value).toBe(1);
  });

  test('should correctly remove values from the start', () => {
    list.addEnd(1);
    list.addEnd(2);
    list.addEnd(3);

    list.removeStart();
    expect(list.first.value).toBe(2);

    list.removeStart();
    expect(list.first.value).toBe(3);
    expect(list.last.value).toBe(3);

    list.removeStart();
    list.removeStart();
    expect(list.first).toBeNull();
    expect(list.last).toBeNull();
  });

  test('should correctly remove values from the end', () => {
    list.addEnd(1);
    list.addEnd(2);
    list.addEnd(3);

    list.removeEnd();
    expect(list.last.value).toBe(2);

    list.removeEnd();
    expect(list.last.value).toBe(1);
    expect(list.first.value).toBe(1);

    list.removeEnd();
    list.removeEnd();
    expect(list.last).toBeNull();
    expect(list.first).toBeNull();
  });

  test('list should be iterable', () => {
    list.addEnd(1);
    list.addEnd(2);
    list.addEnd(3);

    expect(list).toContain(1);
    expect(list).toContain(2);
    expect(list).toContain(3);

    const iter = list[Symbol.iterator]();

    expect(iter.next().value).toBe(1);
    expect(iter.next().value).toBe(2);
    expect(iter.next().value).toBe(3);
    expect(iter.next().value).toBeUndefined();
  });
});
