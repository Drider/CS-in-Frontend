import isValid from './is-valid';

describe('Brackets validation:', () => {
  test.each([
    ['(hello{world} and [me])',   true],
    ['(({[]}))[]',                true],
    ['(hello{world)} and [me])',  false],
    [')(hello{world)} and [me])', false],
    ['(<<>(})]',                  false],
    ['((((((',                    false],
    [undefined,                   false],
    [null,                        false],
  ])(
    'validation of _> %s <_ is expected to be <%s>',
    (str, expected) => {
      expect(isValid(str)).toBe(expected);
    },
  );
});
