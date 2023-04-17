interface LinkArgs<T> {
  value: T;
  prev?: DoublyLinkedListLink<T>;
  next?: DoublyLinkedListLink<T>;
}

export class DoublyLinkedListLink<T> {
  value: T;
  prev?: DoublyLinkedListLink<T> = null;
  next?: DoublyLinkedListLink<T> = null;

  constructor({
    value,
    prev = null,
    next = null,
  }: LinkArgs<T>) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}
