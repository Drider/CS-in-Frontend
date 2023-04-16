import { Link } from './Link';

export class DoublyLinkedList<T> {
  first: Link<T> = null;
  last: Link<T> = null;

  insertFirst(value: T) {
    const link = new Link({
      value,
      next: this.first,
    });

    if (this.isEmpty) {
      this.last = link;
    } else {
      this.first.prev = link;
    }

    this.first = link;
  }

  insertLast(value: T) {
    const link = new Link({
      value,
      prev: this.last,
    });

    if (this.isEmpty) {
      this.first = link;
    } else {
      this.last.next = link;
    }

    this.last = link;
  }

  /**
   * alias for insertLast
   */
  add(value: T) {
    this.insertLast(value);
  }

  get isEmpty(): boolean {
    return this.first == null;
  }

  [Symbol.iterator]() {
    return {
      current: this.first,
      next() {
        const item = this.current;

        if (item == null) {
          return { done: true, value: undefined };
        }

        this.current = item.next;

        return {
          value: item.value,
          done: false,
        };
      },
    };
  }
}
