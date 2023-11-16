/** @type {import('eslint').Linter.BaseConfig} */
// @ts-check

module.exports = {
  $schema: 'https://json.schemastore.org/eslintrc.json',

  plugins: ['@typescript-eslint', 'typescript-sort-keys'],

  extends: [
    '@denaro-config/eslint-config-basic',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:typescript-sort-keys/recommended',
    'standard-with-typescript'
  ],

  ignorePatterns: ['.eslintrc.*'],

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest'
  },

  parser: '@typescript-eslint/parser'
}
