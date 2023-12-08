/** @type {import('stylelint').Config} */
// @ts-check

module.exports = {
  $schema: 'https://json.schemastore.org/stylelintrc',

  extends: [
    '@denaro-config/stylelint',
    'stylelint-config-recommended-less',
    'stylelint-config-standard-less'
  ],

  // 不同格式的文件指定自定义语法
  overrides: [
    {
      files: ['**/*.(less|css|vue|html)'],
      customSyntax: 'postcss-less'
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html'
    }
  ],

  plugins: ['stylelint-less'],

  rules: {
    'font-family-no-missing-generic-family-keyword': null
  }
}
