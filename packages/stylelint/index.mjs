/** @type {import('stylelint').Config} */
// @ts-check

module.exports = {
  $schema: 'https://json.schemastore.org/stylelintrc',

  extends: ['stylelint-config-standard'],

  plugins: ['stylelint-order'],

  rules: {
    'prettier/prettier': true,
    'order/properties-alphabetical-order': true
  }
}
