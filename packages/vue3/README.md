# @denaro/eslint-config-vue

> :tada: 前端工程化中的 vue3 项目通用配置, 严格遵守 eslint-plugin-vue 官网推荐的风格规范。

<p align="center">
  <a href="https://www.npmjs.com/package/%40denaro%2Feslint-config-vue" target="_blank">
    <img alt="npm" src="https://img.shields.io/npm/v/%40denaro%2Feslint-config-vue">
  </a>
  <a href="https://github.com/denaro-org/frontend-engineering-config/stargazers" target="_blank">
    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/denaro-org/frontend-engineering-config">
  </a>
  <a href="https://github.com/denaro-org/frontend-engineering-config/issues" target="_blank">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/denaro-org/frontend-engineering-config">
  </a>
  <br />  
  <a href="https://www.jsdelivr.com/package/npm/%40denaro%2Feslint-config-vue" target="_blank">
    <img alt="jsDelivr hits (npm scoped)" src="https://img.shields.io/jsdelivr/npm/hd/%40denaro%2Feslint-config-vue">
  </a>
  <a href="https://github.com/frontend-engineering-config/blob/main/LICENSE" target="_blank">
    <img alt="NPM" src="https://img.shields.io/npm/l/%40denaro%2Feslint-config-vue">
  </a>
</p>

## 参考官网地址

> [eslint-plugin-vue](https://eslint.vuejs.org/)

## 安装至您的项目

```bash
npm install -D @denaro/eslint-config-vue
# or
pnpm install -D @denaro/eslint-config-vue
# or
yarn add -D @denaro/eslint-config-vue
```

## 使用

在项目根目录下创建 `.eslintrc.js` 文件, 参考配置内容如下：

```js
module.exports = {
  extends: ['@denaro/eslint-config-vue']
}
```

## 结合 commitlint 使用

> 参考 [commitlint](../commitlint/README.md)

## 结合 cz-git 使用

> 参考 [cz-git](../cz-git/README.md)

## 结合 prettier 使用

> 参考 [prettier](../prettier/README.md)
