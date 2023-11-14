# @denaro/config-commitlint

> :tada: 前端工程化中的 commitlint 通用配置, 规范您的 commit message。

<p align="center">
  <a href="https://www.npmjs.com/package/%40denaro%2Fconfig-commitlint" target="_blank">
    <img alt="npm" src="https://img.shields.io/npm/v/%40denaro%2Fconfig-commitlint">
  </a>
  <a href="https://github.com/denaro-org/frontend-engineering-config/stargazers" target="_blank">
    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/denaro-org/frontend-engineering-config">
  </a>
  <a href="https://github.com/denaro-org/frontend-engineering-config/issues" target="_blank">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/denaro-org/frontend-engineering-config">
  </a>
  <br />  
  <a href="https://www.jsdelivr.com/package/npm/%40denaro%2Fconfig-commitlint" target="_blank">
    <img alt="jsDelivr hits (npm scoped)" src="https://img.shields.io/jsdelivr/npm/hd/%40denaro%2Fconfig-commitlint">
  </a>
  <a href="https://github.com/frontend-engineering-config/blob/main/LICENSE" target="_blank">
    <img alt="NPM" src="https://img.shields.io/npm/l/%40denaro%2Fconfig-commitlint">
  </a>
</p>

## 参考官网地址

> [commitlint](https://commitlint.js.org/#/)

## 安装至您的项目

```bash
npm install -D @denaro/config-commitlint
# or
pnpm install -D @denaro/config-commitlint
# or
yarn add -D @denaro/config-commitlint
```

## 使用

在项目根目录下创建 `commitlint.config.js` 文件, 参考配置内容如下：

```js
module.exports = {
  extends: ['@denaro/config-commitlint']
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
