module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended',
    "plugin:react-hooks/recommended",

    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    quotes: ['warn', 'single'],
    '@typescript-eslint/camelcase': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/prop-types': 'off',
  }
};
