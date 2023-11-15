/** @type {import('eslint').Linter.BaseConfig} */
// @ts-check

module.exports = {
  $schema: 'https://json.schemastore.org/eslintrc.json',

  extends: ['prettier', 'plugin:prettier/recommended'],

  plugins: ['prettier'],

  rules: {
    'prettier/prettier': 'error'
  }
}
