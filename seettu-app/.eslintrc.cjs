module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:boundaries/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks', 'boundaries'],
  settings: {
    'boundaries/elements': [
      { type: 'module', pattern: 'src/modules/*' },
      { type: 'shared', pattern: 'src/shared/*' },
      { type: 'design-system', pattern: 'src/design-system/*' },
    ],
  },
  rules: {
    'boundaries/element-types': [2, {
      default: 'disallow',
      rules: [
        { from: 'module', allow: ['shared', 'design-system'] },
        { from: 'shared', allow: ['shared'] },
      ],
    }],
  },
};
