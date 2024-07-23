import denaroEslint from '@denaro-config/eslint-next'

export default denaroEslint({
    indent: 2, // default 4
    ts: true, // default false
    vue: true, // default false
    markdown: false, // default true
    json: false, // default true
    ignores: ['scripts/**'],
    rules: {
        
        // custom rules
        curly: ['error'],
    },
})