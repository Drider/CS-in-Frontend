export default class StackTypedArray {
  #top = -1;
  #store: TypedArray;

  get head() {
    return this.#store[this.#top];
  }

  get length() {
    return this.#store.length;
  }

  get size() {
    return this.#top + 1;
  }

  constructor(
    ctor: CtorOfType<TypedArray>,
    length: number,
  ) {
    this.#store = new ctor(length);
  }

  push(value: number) {
    if (this.size === this.length) {
      throw new RangeError(`Stack overflow: you can\`t add ${value}`);
    }

    this.#store[++this.#top] = value;
  }

  pop(): number {
    if (this.size === 0) {
      throw new RangeError('Can`t pop value, stack is empty');
    }

    return this.#store[this.#top--];
  }
}
