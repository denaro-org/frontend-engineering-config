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

  overrides: [
    {
      env: { node: true },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: { sourceType: 'script' }
    }
  ],

  rules: {
    // 缩进两个空格
    indent: ['error', 2, { SwitchCase: 1 }],
    // 每行最大长度, 忽略注释
    'max-len': ['error', { code: 120, ignoreComments: true }],
    // import 语句之后强制空一行
    'import/newline-after-import': ['error', { count: 1 }],
    // import 语句排序
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: ['type', ['builtin', 'external'], 'internal', ['sibling', 'parent'], 'index', 'unknown'],
        'newlines-between': 'always'
      }
    ],
    // import 语句排序
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false
      }
    ],
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
    ]
  }
}
