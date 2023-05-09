interface VectroConfig {
  capacity: number;
}

export default class Vector<T> {
  #buffer = null;
  #length = 0;
  #capacity = 0;

  constructor(ctor: CtorOfType<T>, { capacity }: VectroConfig) {
    this.#capacity = capacity;
    this.#buffer = new ctor(capacity);
  }

  // getIndex(input: number) {

  // }

  set(index: number, val: number) {
    if (index >= this.#capacity) {
      throw new RangeError('Vector internal buffer capacity exeeded');
    }

    this.#buffer[index] = val;
  }

  get(index: number) {
    // if (index >= this.#length) {
    //   return undefined;
    // }

    return this.#buffer[index];
  }

  // push(val: number) {

  // }

  // pop() {

  // }

  // unshift(val: number) {

  // }

  // shift() {

  // }

  // updateSize() {

  // }
}


const vector = new Vector(Uint8Array, { capacity: 10 });

vector.set(1, 10);

console.log('get from vector', vector.get(1));

