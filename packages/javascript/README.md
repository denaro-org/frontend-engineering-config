# @denaro-config/eslint-config-javascript

> :tada: 前端工程化中的 eslint 通用配置, 采用 standard 风格规范您的 javascript 项目。

![npm (scoped)](https://img.shields.io/npm/v/%40denaro-config/eslint-config-javascript?link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40vuepress-config%2Feslint-config-javascript)
![NPM](https://img.shields.io/npm/l/%40denaro-config%2Feslint-config-javascript?link=https%3A%2F%2Fgithub.com%2Fdenaro-org%2Ffrontend-engineering-config%2Fblob%2Fmain%2FLICENSE)

![GitHub repo size](https://img.shields.io/github/repo-size/denaro-org/frontend-engineering-config?link=https%3A%2F%2Fgithub.com%2Fdenaro-org%2Ffrontend-engineering-config)
![GitHub Repo stars](https://img.shields.io/github/stars/denaro-org/frontend-engineering-config?link=https%3A%2F%2Fgithub.com%2Fdenaro-org%2Ffrontend-engineering-config%2Fstargazers)
![GitHub issues](https://img.shields.io/github/issues/denaro-org/frontend-engineering-config?link=https%3A%2F%2Fgithub.com%2Fdenaro-org%2Ffrontend-engineering-config%2Fissues)

![npm](https://img.shields.io/npm/dw/%40denaro-config/eslint-config-javascript?link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40vuepress-config%2Feslint-config-javascript)
![jsDelivr hits (npm scoped)](https://img.shields.io/jsdelivr/npm/hd/%40denaro-config%2Feslint-config-javascript?link=https%3A%2F%2Fwww.jsdelivr.com%2Fpackage%2Fnpm%2F%40denaro-config%2Feslint-config-javascript)

## 参考官网地址

> [eslint](https://eslint.org/)

## 安装至您的项目

```bash
npm install -D @denaro-config/eslint-config-javascript
# or
pnpm install -D @denaro-config/eslint-config-javascript
# or
yarn add -D @denaro-config/eslint-config-javascript
```

## 使用

在项目根目录下创建 `.eslintrc.js` 文件, 参考配置内容如下：

```js
module.exports = {
  extends: ['@denaro-config/eslint-config-javascript']
}
```

## 结合 commitlint 使用

> 参考 [commitlint](../commitlint/README.md)

## 结合 cz-git 使用

> 参考 [cz-git](../cz-git/README.md)
