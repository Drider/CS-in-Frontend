import { Link } from './Link';
import { DoublyLinkedList } from './DoublyLinkedList';

describe('Doubly List Link:', () => {
  test('should correctly created', () => {
    const link = new Link<number>({ value: 1});
    const link2 = new Link<number>({
      value: 2,
      prev: link,
    });
    const link3 = new Link<number>({
      value: 3,
      prev: link2,
      next: link,
    });

    expect(link.value).toBe(1);
    expect(link.prev).toBe(null);
    expect(link.next).toBe(null);

    expect(link2.prev).toStrictEqual(link);

    expect(link3.prev).toStrictEqual(link2);
    expect(link3.next).toStrictEqual(link);
  });
});

describe('Doubly Linked list:', () => {
  let list = null;

  beforeEach(() => {
    list = new DoublyLinkedList<number>();
  });

  test('values should correctly add to the end of the list', () => {
    list.add(1);
    list.add(2);
    list.add(3);

    expect(list.first.value).toBe(1);
    expect(list.last.value).toBe(3);
    expect(list.first.next.value).toBe(2);
    expect(list.first.next.prev.value).toBe(1);
  });

  test('values should correctly add to the beginning of the list', () => {
    list.insertFirst(3);
    list.insertFirst(2);
    list.insertFirst(1);

    expect(list.first.value).toBe(1);
    expect(list.last.value).toBe(3);
    expect(list.first.next.value).toBe(2);
    expect(list.first.next.prev.value).toBe(1);
  });

  test('list should be iterable', () => {
    list.add(1);
    list.add(2);
    list.add(3);

    expect(list).toContain(1);
    expect(list).toContain(2);
    expect(list).toContain(3);

    const iter = list[Symbol.iterator]();

    expect(iter.next().value).toBe(1);
    expect(iter.next().value).toBe(2);
    expect(iter.next().value).toBe(3);
    expect(iter.next().value).toBe(undefined);
  });
});
