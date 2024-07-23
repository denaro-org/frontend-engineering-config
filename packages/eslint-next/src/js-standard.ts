import globals from 'globals'
import standard from 'eslint-config-standard'
import pluginN from 'eslint-plugin-n'
import pluginPromise from 'eslint-plugin-promise'
import pluginImport from 'eslint-plugin-import'
import type { Linter } from 'eslint'

export default [
    {
        files: ['**/*.{js,mjs,cjs}'],
        languageOptions: {
            globals: {
                ...globals.es2021,
                ...globals.node,
                document: 'readonly',
                navigator: 'readonly',
                window: 'readonly'
            }
        }
    },
    {
        plugins: {
            n: pluginN,
            import: pluginImport,
            promise: pluginPromise
        },
        rules: standard.rules
    }
] as Linter.FlatConfig[]
