# @denaro-config/stylelint

> :tada: 前端工程化中的 stylelint 通用配置, 用于规范 css 代码质量。

![npm (scoped)](https://img.shields.io/npm/v/%40denaro-config/stylelint)
![NPM](https://img.shields.io/npm/l/%40denaro-config%2Fstylelint)

![GitHub repo size](https://img.shields.io/github/repo-size/denaro-org/frontend-engineering-config)
![GitHub Repo stars](https://img.shields.io/github/stars/denaro-org/frontend-engineering-config)
![GitHub issues](https://img.shields.io/github/issues/denaro-org/frontend-engineering-config)
![GitHub top language](https://img.shields.io/github/languages/top/denaro-org/frontend-engineering-config)

![npm](https://img.shields.io/npm/dw/%40denaro-config/stylelint)
![jsDelivr hits (npm scoped)](https://img.shields.io/jsdelivr/npm/hd/%40denaro-config%2Fstylelint)

## 参考官网地址

> [stylelint](https://stylelint.io/)

## 安装至您的项目

```bash
npm install -D @denaro-config/stylelint
# or
pnpm install -D @denaro-config/stylelint
# or
yarn add -D @denaro-config/stylelint
```

## 使用

在项目根目录下创建 `.stylelintrc` 文件, 参考配置内容如下：

```js
{
  "extends": ["@denaro-config/stylelint"]
}
```

## 结合 lint-staged、husky 使用

在 `package.json` 中添加以下内容

```json
{
  "scripts": {
    "stylelint": "stylelint \"./**/*.{css,scss,sass,vue,html}\" --fix"
  },
  "lint-staged": {
    "*.{css,scss,sass,vue,html}": "stylelint --write --ignore-unknown"
  }
}
```

## 结合 eslint 使用

> 参考 [eslint-stylelint](../eslint-stylelint/README.md)
