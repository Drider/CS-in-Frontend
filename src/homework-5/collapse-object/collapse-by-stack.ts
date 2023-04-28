function getIterator(input: object) {
  return Object.entries(input)[Symbol.iterator]();
}

export default function collapseByStack(obj: object): object {
  if (obj == null || typeof obj !== 'object') {
    throw new TypeError('Incorrect input type, param should be Object type');
  }

  const result = {};
  const stack = [];

  stack.push(['', getIterator(obj)]);

  while (stack.length > 0) {
    const [sKey, iter] = stack.pop();

    const iterData = iter.next();

    if (iterData.done) {
      continue;
    }

    const [iKey, val] = iterData.value;
    const resultKey = sKey ? `${sKey}.${iKey}` : iKey;

    if (val != null && typeof val === 'object') {
      const newIter = getIterator(val);

      stack.push([sKey, iter]);
      stack.push([resultKey, newIter]);
      continue;
    }

    result[resultKey] = val;

    if (!iterData.done) {
      stack.push([sKey, iter]);
    }
  }

  return result;
}
