const BRACKETS_MAP = new Map([
  ['}', '{'],
  [')', '('],
  [']', '['],
]);

export default function isValid(str: string): boolean {
  if (typeof str !== 'string') {
    return false;
  }

  const stack = [];

  for (const char of str) {
    if (/[[({]/.test(char)) {
      stack.push(char);
    } else if (BRACKETS_MAP.has(char)) {
      const pair = BRACKETS_MAP.get(char);
      const top = stack.pop();

      if (pair !== top) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
