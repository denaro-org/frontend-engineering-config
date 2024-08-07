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
        'love',
        '@denaro-config/eslint-config-prettier'
    ],

    ignorePatterns: ['.eslintrc.*', 'commitlint.config.*', 'cz.config.*'],

    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest'
    },

    parser: '@typescript-eslint/parser',

    rules: {
        '@typescript-eslint/strict-boolean-expressions': 'off',
        'import/no-duplicates': ['error', { considerQueryString: true }]
    }
}
