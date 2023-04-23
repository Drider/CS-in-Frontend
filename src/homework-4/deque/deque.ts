import { DoublyLinkedList } from '../../homework-3/doubly-linked-list/doubly-linked-list';

export default class Deque<T> {
  #store = new DoublyLinkedList<T>();

  get head() {
    return this.#store.first;
  }

  get tail() {
    return this.#store.last;
  }

  push(value: T) {
    this.#store.addEnd(value);
  }

  pop(): Nullable<T> {
    return this.#store.removeEnd();
  }

  unshift(value: T) {
    this.#store.addStart(value);
  }

  shift(): Nullable<T> {
    return this.#store.removeStart();
  }

  clear() {
    this.#store.clear();
  }
}
