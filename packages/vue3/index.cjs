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

  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
    defineOptions: 'readonly',
    withDefaults: 'readonly',
    defineExpose: 'readonly'
  },

  extends: [
    'plugin:vue/base',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended'
  ],

  ignorePatterns: [
    'dist',
    'node_modules',
    'coverage',
    'packages/*/dist',
    'lib'
  ],

  rules: {
    'vue/max-len': [
      'error',
      {
        code: 80,
        template: 80,
        tabWidth: 2,
        comments: 80,
        ignorePattern: '',
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreUrls: false,
        ignoreStrings: false,
        ignoreTemplateLiterals: false,
        ignoreRegExpLiterals: false,
        ignoreHTMLAttributeValues: false,
        ignoreHTMLTextContents: false
      }
    ],
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style']
      }
    ]
  }
}
