type BitValue = 0 | 1;

export default class BitAccessor {
  readonly #store: Uint8Array = null;

  constructor(TypedArray: Uint8Array) {
    this.#store = TypedArray;
  }

  get(index: number, position: number) {
    this.#validate(index, position);

    const item = this.#store[index];

    return (item & (1 << position)) > 0 ? 1 : 0;
  }

  set(index: number, position: number, value: BitValue) {
    this.#validate(index, position, value);

    const item = this.#store[index];

    if (value === 1) {
      this.#store[index] = this.#setBit(item, position);
    } else {
      this.#store[index] = this.#resetBit(item, position);
    }
  }

  #setBit(item: number, index: number) {
    return item | (1 << index);
  }

  #resetBit(item: number, index: number) {
    return item & ~(1 << index);
  }

  #validate(index: number, position: number, value?: BitValue) {
    if (index < 0 || index >= this.#store.length) {
      throw new RangeError('Index out of array lenght');
    }

    if (position < 0 || position >= 8) {
      throw new RangeError('Position out of byte range');
    }

    if (
      (value != null && value !== 1 && value !== 0) ||
      (arguments.length === 3 && value == null)
    ) {
      throw new Error('Input value must be 0 or 1');
    }
  }
}
