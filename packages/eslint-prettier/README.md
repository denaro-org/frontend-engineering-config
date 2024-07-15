# @denaro-config/eslint-config-prettier

> :tada: 前端工程化中的 prettier 通用配置, 补充 eslint 的不足之处, 尽情享受 prettier 带来的代码舒适度。

![npm (scoped)](https://img.shields.io/npm/v/%40denaro-config/eslint-config-prettier)
![NPM](https://img.shields.io/npm/l/%40denaro-config%2Feslint-config-prettier)

![GitHub repo size](https://img.shields.io/github/repo-size/denaro-org/frontend-engineering-config)
![GitHub Repo stars](https://img.shields.io/github/stars/denaro-org/frontend-engineering-config)
![GitHub issues](https://img.shields.io/github/issues/denaro-org/frontend-engineering-config)
![GitHub top language](https://img.shields.io/github/languages/top/denaro-org/frontend-engineering-config)

![npm](https://img.shields.io/npm/dw/%40denaro-config/eslint-config-prettier)
![jsDelivr hits (npm scoped)](https://img.shields.io/jsdelivr/npm/hd/%40denaro-config%2Feslint-config-prettier)

## 参考官网地址

> -   [eslint](https://eslint.org/)
> -   [prettier](https://prettier.io/)

## 安装至您的项目

```bash
npm install -D @denaro-config/eslint-config-prettier
# or
pnpm install -D @denaro-config/eslint-config-prettier
# or
yarn add -D @denaro-config/eslint-config-prettier
```

## 使用

在项目根目录下创建 `.prettierrc.cjs` 文件, 参考配置内容如下：

```js
module.exports = {
    extends: ['@denaro-config/eslint-config-prettier']
}
```

你也可以在配置中省略 `eslint-config`：

```js
module.exports = {
    extends: ['@denaro-config/prettier']
}
```

## 结合 prettier 使用

> 参考 [prettier](../prettier/README.md)
