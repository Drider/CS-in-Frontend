import { DoublyLinkedList } from '../../homework-3/doubly-linked-list/doubly-linked-list';

export default class Queue<T> {
  #store = new DoublyLinkedList<T>();

  get head(): Nullable<T> {
    return this.#store.first?.value ?? null;
  }

  push(value: T) {
    this.#store.addEnd(value);
  }

  pop(): Nullable<T> {
    return this.#store.removeStart();
  }

  clear() {
    this.#store.clear();
  }
}
