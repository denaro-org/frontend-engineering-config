import type { ESLint, Linter } from 'eslint'
import eslint_js from '@eslint/js'
import js_standard from './js-standard'
import js_basic from '@denaro-config/eslint-config-basic'
import ts_rules from '@denaro-config/eslint-config-typescript'
import { fixupPluginRules } from '@eslint/compat'
import import_eslint from 'eslint-plugin-import'

interface NextConfig {
    /**
     * 排除的文件或者文件夹
     */
    ignores?: string[]
    /**
     * 自定义的 rules 规则
     */
    rules?: Linter.RulesRecord
    /**
     * 是否启用 standard 风格来约束 js 代码
     */
    standard?: boolean
    /**
     * 是否启用 markdown 文件的 lint
     */
    markdown?: boolean
    /**
     * 是否启用 json 文件的 lint
     */
    json?: boolean
    /**
     * 是否启用 jsdoc 的 lint
     */
    jsdoc?: boolean
    /**
     * 是否启用 ts 的 lint
     */
    ts?: boolean
}

export default async function (
    next_config?: NextConfig,
    ...rest: Linter.FlatConfig[]
) {
    const config = Object.assign(
        { jsdoc: true, json: true, markdown: true },
        next_config
    )
    let eslint_config: Linter.FlatConfig[] = []

    // ignores
    eslint_config.push({
        ignores: [
            '**/dist',
            '**/node_modules',
            '**/package-lock.json',
            '**/yarn.lock',
            '**/pnpm-lock.yaml',
            ...(config?.ignores || [])
        ]
    })

    // js
    eslint_config.push(eslint_js.configs.recommended)
    eslint_config.push({ rules: js_basic.rules })
    if (config.standard) {
        eslint_config = eslint_config.concat(js_standard)
    }

    // import
    // TODO: remove the fixupPluginRules when the plugin is supported for eslint v9
    eslint_config.push({
        plugins: { import: fixupPluginRules(import_eslint) as ESLint.Plugin }
    })

    // markdown
    if (config?.markdown) {
        const markdown_eslint = await import('eslint-plugin-markdown')
        eslint_config.push(
            ...(markdown_eslint.default.configs
                .recommended as Linter.FlatConfig[])
        )
    }

    // json
    if (config?.json) {
        const json_eslint = await import('eslint-plugin-jsonc')
        eslint_config.push(
            ...(json_eslint.default.configs[
                'flat/recommended-with-jsonc'
            ] as Linter.FlatConfig[])
        )
    }

    // ts
    let typescript_eslint
    if (config?.ts) {
        typescript_eslint = await import('typescript-eslint')
        eslint_config.push(
            ...(typescript_eslint.default.configs
                .recommended as Linter.FlatConfig[])
        )
        eslint_config.push({ rules: ts_rules.rules })
    }

    // additional rules
    if (config?.rules) {
        eslint_config.push({ rules: config.rules })
    }

    // additional configs
    if (rest.length > 0) {
        eslint_config.push(...rest)
    }

    return eslint_config
}
