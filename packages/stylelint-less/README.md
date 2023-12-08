# @denaro-config/stylelint-less

> :tada: 前端工程化中的 stylelint 通用配置, 用于规范 less 代码质量。

![npm (scoped)](https://img.shields.io/npm/v/%40denaro-config/stylelint-less)
![NPM](https://img.shields.io/npm/l/%40denaro-config%2Fstylelint-less)

![GitHub repo size](https://img.shields.io/github/repo-size/denaro-org/frontend-engineering-config)
![GitHub Repo stars](https://img.shields.io/github/stars/denaro-org/frontend-engineering-config)
![GitHub issues](https://img.shields.io/github/issues/denaro-org/frontend-engineering-config)
![GitHub top language](https://img.shields.io/github/languages/top/denaro-org/frontend-engineering-config)

![npm](https://img.shields.io/npm/dw/%40denaro-config/stylelint-less)
![jsDelivr hits (npm scoped)](https://img.shields.io/jsdelivr/npm/hd/%40denaro-config%2Fstylelint-less)

## 参考官网地址

> [stylelint](https://stylelint.io/)

## 安装至您的项目

```bash
npm install -D @denaro-config/stylelint-less
# or
pnpm install -D @denaro-config/stylelint-less
# or
yarn add -D @denaro-config/stylelint-less
```

## 使用

在项目根目录下创建 `.stylelintrc` 文件, 参考配置内容如下：

```js
{
  "extends": ["@denaro-config/stylelint-less"]
}
```

## 忽略检查

在项目根目录下创建 `.stylelintignore` 文件, 参考配置内容如下：

```text
node_modules
dist
lib
```

## 结合 lint-staged、husky 使用

在 `package.json` 中添加以下内容

```json
{
  "scripts": {
    "stylelint": "stylelint \"./**/*.{css,less,vue,html}\" --fix"
  },
  "lint-staged": {
    "*.{css,less,vue,html}": "stylelint --write --ignore-unknown"
  }
}
```
