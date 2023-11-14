# @denaro/eslint-config-javascript

> :tada: 前端工程化中的 eslint 通用配置, 采用 standard 风格规范您的 javascript 项目。

<p align="center">
  <a href="https://www.npmjs.com/package/%40denaro%2Feslint-config-javascript" target="_blank">
    <img alt="npm" src="https://img.shields.io/npm/v/%40denaro%2Feslint-config-javascript">
  </a>
  <a href="https://github.com/denaro-org/frontend-engineering-config/stargazers" target="_blank">
    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/denaro-org/frontend-engineering-config">
  </a>
  <a href="https://github.com/denaro-org/frontend-engineering-config/issues" target="_blank">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/denaro-org/frontend-engineering-config">
  </a>
  <br />  
  <a href="https://www.jsdelivr.com/package/npm/%40denaro%2Feslint-config-javascript" target="_blank">
    <img alt="jsDelivr hits (npm scoped)" src="https://img.shields.io/jsdelivr/npm/hd/%40denaro%2Feslint-config-javascript">
  </a>
  <a href="https://github.com/frontend-engineering-config/blob/main/LICENSE" target="_blank">
    <img alt="NPM" src="https://img.shields.io/npm/l/%40denaro%2Feslint-config-javascript">
  </a>
</p>

## 参考官网地址

> [eslint](https://eslint.org/)

## 安装至您的项目

```bash
npm install -D @denaro/eslint-config-javascript
# or
pnpm install -D @denaro/eslint-config-javascript
# or
yarn add -D @denaro/eslint-config-javascript
```

## 使用

在项目根目录下创建 `.eslintrc.js` 文件, 参考配置内容如下：

```js
module.exports = {
  extends: ['@denaro/eslint-config-javascript']
}
```

## 结合 commitlint 使用

> 参考 [commitlint](../commitlint/README.md)

## 结合 cz-git 使用

> 参考 [cz-git](../cz-git/README.md)
