export default function collapseByRecursion(obj: object): object {
  if (obj == null || typeof obj !== 'object') {
    throw new TypeError('Incorrect input type. The input parameter must be an object type.');
  }

  const result = {};

  function traverse(val: unknown, key = '') {
    if (val == null || typeof val !== 'object') {
      result[key] = val;

      return val;
    }
 
    Object.entries(val).forEach(([tKey, tValue]) => {
      const resultKey = key ? `${key}.${tKey}` : tKey;

      traverse(tValue, resultKey);
    });
  }

  traverse(obj);

  return result;
}
