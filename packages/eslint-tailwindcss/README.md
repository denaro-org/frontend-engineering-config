# @denaro-config/eslint-config-tailwindcss

> :tada: 针对 tailwindcss 的 eslint 代码规范配置。

![npm (scoped)](https://img.shields.io/npm/v/%40denaro-config/eslint-config-tailwindcss)
![NPM](https://img.shields.io/npm/l/%40denaro-config%2Feslint-config-tailwindcss)

![GitHub repo size](https://img.shields.io/github/repo-size/denaro-org/frontend-engineering-config)
![GitHub Repo stars](https://img.shields.io/github/stars/denaro-org/frontend-engineering-config)
![GitHub issues](https://img.shields.io/github/issues/denaro-org/frontend-engineering-config)
![GitHub top language](https://img.shields.io/github/languages/top/denaro-org/frontend-engineering-config)

![npm](https://img.shields.io/npm/dw/%40denaro-config/eslint-config-tailwindcss)
![jsDelivr hits (npm scoped)](https://img.shields.io/jsdelivr/npm/hd/%40denaro-config%2Feslint-config-tailwindcss)

## 参考官网地址

> [eslint](https://eslint.org/) > [tailwindcss](https://tailwindcss.com/)

## 安装至您的项目

```bash
npm install -D @denaro-config/eslint-config-tailwindcss
# or
pnpm install -D @denaro-config/eslint-config-tailwindcss
# or
yarn add -D @denaro-config/eslint-config-tailwindcss
```

## 使用

在项目根目录下创建 `.eslintrc.js` 文件, 参考配置内容如下：

```js
module.exports = {
    extends: ['@denaro-config/eslint-config-tailwindcss']
}
```

你也可以在配置中省略 `eslint-config`：

```js
module.exports = {
    extends: ['@denaro-config/tailwindcss']
}
```
