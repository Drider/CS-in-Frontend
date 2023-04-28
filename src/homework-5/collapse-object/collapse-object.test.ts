import collapseByRecursion from './collapse-by-recursion';
import collapseByStack from './collapse-by-stack';

describe('Collapse object: ', () => {
  test.each([
    {
      input: { a: { b: [1, 2], '': { c: 2 } }, d: 'foo' },
      expected: { 'a.b.0': 1, 'a.b.1': 2, 'a..c': 2, d: 'foo' },
    },
    {
      input: [{ a: 1 }, { b: { c: [2, 3] } }],
      expected: { '0.a': 1, '1.b.c.0': 2, '1.b.c.1': 3 },
    },
  ])(
    'should be collapsed as %j',
    ({ input, expected }) => {
      expect(collapseByRecursion(input)).toEqual(expected);
      expect(collapseByStack(input)).toEqual(expected);
    },
  );
});
