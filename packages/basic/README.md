# @denaro/eslint-config-basic

> :tada: 前端工程化中的 eslint 通用配置, 提供较为基础的 rules 规则。

<p align="center">
  <a href="https://www.npmjs.com/package/%40denaro%2Feslint-config-basic" target="_blank">
    <img alt="npm" src="https://img.shields.io/npm/v/%40denaro%2Feslint-config-basic">
  </a>
  <a href="https://github.com/frontend-engineering-config/stargazers" target="_blank">
    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/frontend-engineering-config">
  </a>
  <a href="https://github.com/frontend-engineering-config/issues" target="_blank">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/frontend-engineering-config">
  </a>
  <br />  
  <a href="https://www.jsdelivr.com/package/npm/%40denaro%2Feslint-config-basic" target="_blank">
    <img alt="jsDelivr hits (npm scoped)" src="https://img.shields.io/jsdelivr/npm/hd/%40denaro%2Feslint-config-basic">
  </a>
  <a href="https://github.com/frontend-engineering-config/blob/main/LICENSE" target="_blank">
    <img alt="NPM" src="https://img.shields.io/npm/l/%40denaro%2Feslint-config-basic">
  </a>
</p>

## 参考官网地址

> [eslint](https://eslint.org/)

## 安装至您的项目

```bash
npm install -D @denaro/eslint-config-basic
# or
pnpm install -D @denaro/eslint-config-basic
# or
yarn add -D @denaro/eslint-config-basic
```

## 使用

在项目根目录下创建 `.eslintrc.js` 文件, 参考配置内容如下：

```js
module.exports = {
  extends: ['@denaro/eslint-config-basic']
}
```

在 `package.json` 中添加 `lint` 命令：

```json
{
  "scripts": {
    "lint": "eslint --ext mjs,js,jsx,ts,tsx,cjs --fix ."
  }
}
```

## 结合 commitlint 使用

> 参考 [commitlint](../config-packages/commitlint/README.md)

## 结合 cz-git 使用

> 参考 [cz-git](../config-packages/cz-git/README.md)
