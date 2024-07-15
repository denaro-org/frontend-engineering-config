const fs = require('node:fs')
const path = require('node:path')

const packages = fs.readdirSync(path.resolve(__dirname, 'packages'))

module.exports = {
    extends: ['@denaro-config/config-commitlint'],
    prompt: {
        scopes: [...packages]
    },
    rules: {
        'scope-enum': [2, 'always', [...packages]]
    }
}
