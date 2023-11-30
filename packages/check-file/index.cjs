/** @type {import('eslint').Linter.BaseConfig} */
// @ts-check

module.exports = {
  $schema: 'https://json.schemastore.org/eslintrc.json',

  root: true,

  env: {
    browser: true,
    es6: true,
    es2021: true,
    node: true
  },

  plugins: ['check-file'],

  rules: {
    'check-file/no-index': 'error',
    'check-file/filename-blocklist': [
      'error',
      {
        '**/*.model.ts': '*.models.ts',
        '**/*.util.ts': '*.utils.ts'
      }
    ],
    'check-file/folder-match-with-fex': [
      'error',
      {
        '*.test.{js,jsx,ts,tsx}': '**/__tests__/',
        '*.styled.{jsx,tsx}': '**/pages/'
      }
    ],
    'check-file/filename-naming-convention': [
      'error',
      {
        '**/*.{jsx,tsx}': 'CAMEL_CASE',
        '**/*.{js,ts}': 'KEBAB_CASE'
      }
    ],
    'check-file/folder-naming-convention': [
      'error',
      {
        'src/**/': 'CAMEL_CASE',
        'mocks/*/': 'KEBAB_CASE'
      }
    ]
  }
}
