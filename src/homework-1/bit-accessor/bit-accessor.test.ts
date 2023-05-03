import BitAccessor from './bit-accessor';

describe('BitAccessor:', () => {
  let bitAccessor;

  beforeEach(() => {
    bitAccessor = new BitAccessor(new Uint8Array([0b1110, 0b1101]));
  });

  test('should correctly get bit by index', () => {
    expect(bitAccessor.get(0, 1)).toBe(1);
    expect(bitAccessor.get(1, 1)).toBe(0);
  });

  test('should correctly change bit value', () => {
    expect(bitAccessor.get(0, 1)).toBe(1);
    expect(bitAccessor.get(1, 1)).toBe(0);

    bitAccessor.set(0, 1, 0);
    expect(bitAccessor.get(0, 1)).toBe(0);

    bitAccessor.set(1, 1, 1);
    expect(bitAccessor.get(1, 1)).toBe(1);
  });

  test('should correctly handle unexpected cases', () => {
    expect(() => {
      bitAccessor.get(44, 0);
    }).toThrowError(new RangeError('Index out of array lenght'));

    expect(() => {
      bitAccessor.get(-1, 0);
    }).toThrowError(new RangeError('Index out of array lenght'));


    expect(() => {
      bitAccessor.get(0, 10);
    }).toThrowError(new RangeError('Position out of byte range'));

    expect(() => {
      bitAccessor.get(0, -1);
    }).toThrowError(new RangeError('Position out of byte range'));


    expect(() => {
      bitAccessor.set(0, 1, 2);
    }).toThrowError(new Error('Input value must be 0 or 1'));

    expect(() => {
      bitAccessor.set(0, 1, 'dff');
    }).toThrowError(new Error('Input value must be 0 or 1'));

    expect(() => {
      bitAccessor.set(0, 1, null);
    }).toThrowError(new Error('Input value must be 0 or 1'));
  });
});
