/** @type {import('stylelint').Config} */
// @ts-check

module.exports = {
  $schema: 'https://json.schemastore.org/stylelintrc',

  extends: ['stylelint-config-standard', 'stylelint-config-standard-scss'],

  plugins: ['stylelint-order'],

  rules: {
    'prettier/prettier': true,
    'order/properties-alphabetical-order': true
  }
}
