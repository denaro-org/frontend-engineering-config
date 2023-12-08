/** @type {import('stylelint').Config} */
// @ts-check

module.exports = {
  $schema: 'https://json.schemastore.org/stylelintrc',

  extends: [
    'stylelint-prettier/recommended',
    'stylelint-config-prettier',
    'stylelint-config-recess-order',
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-css-modules'
  ],

  plugins: ['stylelint-scss', 'stylelint-order', 'stylelint-prettier'],

  rules: {
    'prettier/prettier': true,
    'order/properties-alphabetical-order': true,
    'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['mixin', 'extend', 'content', 'use', 'import'] }
    ]
  }
}
