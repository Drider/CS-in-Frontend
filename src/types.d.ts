type Nullable<T> = T | null;

type TypedArray =
  Uint8Array |
  Uint16Array |
  Uint32Array |
  Int8Array |
  Int16Array |
  Int32Array |
  Float32Array |
  Float64Array;

interface CtorOfType<T> extends Function {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): T;
}
