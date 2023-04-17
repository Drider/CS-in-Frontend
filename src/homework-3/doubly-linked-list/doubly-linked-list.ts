import { DoublyLinkedListLink } from './doubly-linked-list-link';

export class DoublyLinkedList<T> {
  #first: DoublyLinkedListLink<T> = null;
  #last: DoublyLinkedListLink<T> = null;

  constructor(iterable?: Iterable<T>) {
    if (
      iterable != null &&
      typeof iterable[Symbol.iterator] === 'function'
    ) {
      for (const value of iterable) {
        this.addEnd(value);
      }
    }
  }

  get isEmpty(): boolean {
    return this.#first == null;
  }

  get first() {
    return this.#first;
  }

  get last() {
    return this.#last;
  }

  addStart(value: T) {
    const link = new DoublyLinkedListLink({
      value,
      next: this.#first,
    });

    if (this.isEmpty) {
      this.#last = link;
    } else {
      this.#first.prev = link;
    }

    this.#first = link;
  }

  addEnd(value: T) {
    const link = new DoublyLinkedListLink({
      value,
      prev: this.#last,
    });

    if (this.isEmpty) {
      this.#first = link;
    } else {
      this.#last.next = link;
    }

    this.#last = link;
  }

  removeStart() {
    if (this.isEmpty) {
      return;
    }

    if (this.#first.next == null) {
      this.#last = null;
    } else {
      this.#first.next.prev = null;
    }

    this.#first = this.#first.next;
  }

  removeEnd() {
    if (this.isEmpty) {
      return;
    }

    if (this.#last.prev == null) {
      this.#first = null;
    } else {
      this.#last.prev.next = null;
    }

    this.#last = this.#last.prev;
  }

  [Symbol.iterator]() {
    return {
      current: this.#first,
      next() {
        const item = this.current;

        if (item == null) {
          return { done: true, value: undefined };
        }

        this.current = item.next;

        return { done: false, value: item.value };
      },
    };
  }
}
