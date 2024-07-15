# @denaro-config/config-commitlint

> :tada: 前端工程化中的 commitlint 通用配置, 规范您的 commit message。

![npm (scoped)](https://img.shields.io/npm/v/%40denaro-config/config-commitlint)
![NPM](https://img.shields.io/npm/l/%40denaro-config%2Fconfig-commitlint)

![GitHub repo size](https://img.shields.io/github/repo-size/denaro-org/frontend-engineering-config)
![GitHub Repo stars](https://img.shields.io/github/stars/denaro-org/frontend-engineering-config)
![GitHub issues](https://img.shields.io/github/issues/denaro-org/frontend-engineering-config)
![GitHub top language](https://img.shields.io/github/languages/top/denaro-org/frontend-engineering-config)

![npm](https://img.shields.io/npm/dw/%40denaro-config/config-commitlint)
![jsDelivr hits (npm scoped)](https://img.shields.io/jsdelivr/npm/hd/%40denaro-config%2Fconfig-commitlint)

## 参考官网地址

> [commitlint](https://commitlint.js.org/#/)

## 安装至您的项目

```bash
npm install -D @denaro-config/config-commitlint
# or
pnpm install -D @denaro-config/config-commitlint
# or
yarn add -D @denaro-config/config-commitlint
```

## 使用

在项目根目录下创建 `commitlint.config.js` 文件, 参考配置内容如下：

```js
module.exports = {
    extends: ['@denaro-config/config-commitlint']
}
```

如果您的项目为 monorepo, 那么你可以配置 `scopes`, 参考配置内容如下：

> scopes, 通常来定义本次 commit 涉及范围

```js
const fs = require('node:fs')
const path = require('node:path')

const packages = fs.readdirSync(path.resolve(__dirname, 'packages'))

module.exports = {
    prompt: {
        scopes: [...packages]
    },
    rules: {
        'scope-enum': [2, 'always', [...packages]]
    }
}
```

## 结合 cz-git 使用

> 参考 [cz-git](../cz-git/README.md)
