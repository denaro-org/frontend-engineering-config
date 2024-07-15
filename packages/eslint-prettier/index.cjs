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

    extends: ['plugin:prettier/recommended'],

    plugins: ['prettier'],

    rules: {
        'prettier/prettier': 'error'
    }
}
