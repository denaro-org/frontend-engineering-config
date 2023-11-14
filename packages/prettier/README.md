# @denaro/prettier

> :tada: 前端工程化中的 prettier 通用配置, 补充 eslint 的不足之处, 尽情享受 prettier 带来的代码舒适度。

<p align="center">
  <a href="https://www.npmjs.com/package/%40denaro%2Fprettier" target="_blank">
    <img alt="npm" src="https://img.shields.io/npm/v/%40denaro%2Fprettier">
  </a>
  <a href="https://github.com/frontend-engineering-config/stargazers" target="_blank">
    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/frontend-engineering-config">
  </a>
  <a href="https://github.com/frontend-engineering-config/issues" target="_blank">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/frontend-engineering-config">
  </a>
  <br />  
  <a href="https://www.jsdelivr.com/package/npm/%40denaro%2Fprettier" target="_blank">
    <img alt="jsDelivr hits (npm scoped)" src="https://img.shields.io/jsdelivr/npm/hd/%40denaro%2Fprettier">
  </a>
  <a href="https://github.com/frontend-engineering-config/blob/main/LICENSE" target="_blank">
    <img alt="NPM" src="https://img.shields.io/npm/l/%40denaro%2Fprettier">
  </a>
</p>

## 参考官网地址

> [prettier](https://prettier.io/)

## 安装至您的项目

```bash
npm install -D @denaro/prettier
# or
pnpm install -D @denaro/prettier
# or
yarn add -D @denaro/prettier
```

## 使用

在项目根目录下创建 `.prettierrc.cjs` 文件, 参考配置内容如下：

```js
module.exports = {
  ...require('@denaro/prettier')
}
```

## 结合 lint-staged、husky 使用

在 `package.json` 中添加以下内容

```json
{
  "scripts": {
    "prettier": "prettier . --write"
  },
  "lint-staged": {
    "**/*": "prettier --write --ignore-unknown"
  }
}
```

## 结合 eslint 使用

> 参考 [prettier](../eslint-packages/prettier/README.md)