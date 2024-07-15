/** @type {import('prettier').Config} */
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
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-strongly-recommended',
        '@denaro-config/eslint-config-prettier'
    ],

    ignorePatterns: [
        'dist',
        'node_modules',
        'coverage',
        'packages/*/dist',
        'lib'
    ],

    plugins: ['import'],

    rules: {
        // import 语句之后强制空一行
        'import/newline-after-import': ['error', { count: 1 }],
        // import 语句排序
        'import/order': [
            'error',
            {
                alphabetize: { order: 'asc', caseInsensitive: true },
                groups: [
                    'type',
                    ['builtin', 'external'],
                    'internal',
                    ['sibling', 'parent'],
                    'index',
                    'unknown'
                ],
                'newlines-between': 'always'
            }
        ],
        'array-bracket-spacing': ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],
        // 针对注释的空格限制
        'spaced-comment': [
            'error',
            'always',
            {
                line: {
                    markers: ['/'],
                    exceptions: ['-', '+']
                },
                block: {
                    markers: ['!'],
                    exceptions: ['*'],
                    balanced: true
                }
            }
        ],
        'vue/max-len': [
            'error',
            {
                code: 80,
                template: 80,
                tabWidth: 4,
                comments: 80,
                ignorePattern: '',
                ignoreComments: true,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
                ignoreHTMLAttributeValues: true,
                ignoreHTMLTextContents: true
            }
        ],
        'vue/component-tags-order': [
            'error',
            {
                order: ['template', 'script', 'style']
            }
        ],
        'vue/html-self-closing': [
            'error',
            {
                // 没有子元素，自动使用闭合单标签
                html: {
                    void: 'never',
                    normal: 'never',
                    component: 'always'
                },
                svg: 'always',
                math: 'always'
            }
        ],
        'import/no-duplicates': ['error', { considerQueryString: true }]
    }
}
