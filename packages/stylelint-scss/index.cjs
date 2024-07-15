/** @type {import('stylelint').Config} */
// @ts-check

module.exports = {
    $schema: 'https://json.schemastore.org/stylelintrc',

    extends: [
        '@denaro-config/stylelint',
        'stylelint-config-recommended-scss',
        'stylelint-config-standard-scss',
        'stylelint-config-tailwindcss/scss'
    ],

    // 不同格式的文件指定自定义语法
    overrides: [
        {
            files: ['**/*.(scss|css|vue|html)'],
            customSyntax: 'postcss-scss'
        },
        {
            files: ['**/*.(html|vue)'],
            customSyntax: 'postcss-html'
        }
    ],

    plugins: ['stylelint-scss'],

    rules: {
        'font-family-no-missing-generic-family-keyword': null,
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'tailwind',
                    'apply',
                    'layer',
                    'config',
                    'variants',
                    'responsive',
                    'screen',
                    'function',
                    'if',
                    'else',
                    'else-if',
                    'each',
                    'include',
                    'mixin',
                    'extend',
                    'content',
                    'use',
                    'import'
                ]
            }
        ]
    }
}
