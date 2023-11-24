# @denaro-config/prettier

> :tada: 前端工程化中的 prettier 通用配置, 补充 eslint 的不足之处, 尽情享受 prettier 带来的代码舒适度。

![npm (scoped)](https://img.shields.io/npm/v/%40denaro-config/prettier)
![NPM](https://img.shields.io/npm/l/%40denaro-config%2Fprettier)

![GitHub repo size](https://img.shields.io/github/repo-size/denaro-org/frontend-engineering-config)
![GitHub Repo stars](https://img.shields.io/github/stars/denaro-org/frontend-engineering-config)
![GitHub issues](https://img.shields.io/github/issues/denaro-org/frontend-engineering-config)
![GitHub top language](https://img.shields.io/github/languages/top/denaro-org/frontend-engineering-config)

![npm](https://img.shields.io/npm/dw/%40denaro-config/prettier)
![jsDelivr hits (npm scoped)](https://img.shields.io/jsdelivr/npm/hd/%40denaro-config%2Fprettier)

## 参考官网地址

> [prettier](https://prettier.io/)

## 安装至您的项目

```bash
npm install -D @denaro-config/prettier
# or
pnpm install -D @denaro-config/prettier
# or
yarn add -D @denaro-config/prettier
```

## 使用

在项目根目录下创建 `.prettierrc.cjs` 文件, 参考配置内容如下：

```js
module.exports = {
  ...require('@denaro-config/prettier')
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

> 参考 [eslint-prettier](../eslint-prettier/README.md)
