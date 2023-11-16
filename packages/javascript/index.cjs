/** @type {import('eslint').Linter.BaseConfig} */
// @ts-check

module.exports = {
  $schema: 'https://json.schemastore.org/eslintrc.json',

  extends: [
    '@denaro-config/eslint-config-basic',
    'eslint:recommended',
    'standard'
  ]
}
