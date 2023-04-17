interface LinkArgs<T> {
  value: T;
  prev?: Link<T>;
  next?: Link<T>;
}

export class Link<T> {
  value: T;
  prev?: Link<T> = null;
  next?: Link<T> = null;

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
