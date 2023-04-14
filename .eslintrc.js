module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  rules: {
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-extra-semi': 'error',
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    camelcase: 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'one-var': ['error', 'never'],
    'no-eval': 'error',
    'no-useless-concat': 'error',
    'prefer-template': 'error',
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'no-else-return': ['error', { allowElseIf: false }],
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 1 }],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'no-sequences': ['error', { allowInParentheses: false }],
    'padding-line-between-statements': ['error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'const', next: '*' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: ['block', 'multiline-block-like', 'for', 'if', 'multiline-expression'], next: '*' }],
    'brace-style': 'error',
    'object-curly-newline': ['error', { consistent: true }],
    'array-bracket-newline': ['error', 'consistent'],
    'array-element-newline': ['error', 'consistent'],
    'multiline-ternary': ['error', 'always-multiline'],
    'no-nested-ternary': 'error',
    'object-shorthand': ['error', 'properties'],
    'arrow-body-style': ['error', 'as-needed'],
    'max-statements-per-line': 'error',
    '@typescript-eslint/indent': ['error', 2],
  },
};