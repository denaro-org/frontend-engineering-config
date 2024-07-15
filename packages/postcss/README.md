# @denaro-config/postcss

> :tada: 提供 autoprefixer 主流浏览器的样式前缀配置。

![npm (scoped)](https://img.shields.io/npm/v/%40denaro-config/postcss)
![NPM](https://img.shields.io/npm/l/%40denaro-config%2Fpostcss)

![GitHub repo size](https://img.shields.io/github/repo-size/denaro-org/frontend-engineering-config)
![GitHub Repo stars](https://img.shields.io/github/stars/denaro-org/frontend-engineering-config)
![GitHub issues](https://img.shields.io/github/issues/denaro-org/frontend-engineering-config)
![GitHub top language](https://img.shields.io/github/languages/top/denaro-org/frontend-engineering-config)

![npm](https://img.shields.io/npm/dw/%40denaro-config/postcss)
![jsDelivr hits (npm scoped)](https://img.shields.io/jsdelivr/npm/hd/%40denaro-config%2Fpostcss)

## 参考官网地址

> [postcss](https://postcss.org/) > [autoprefixer](https://autoprefixer.github.io/)

## 安装至您的项目

```bash
npm install -D @denaro-config/postcss
# or
pnpm install -D @denaro-config/postcss
# or
yarn add -D @denaro-config/postcss
```

## 使用

在项目根目录下创建 `postcss.config.cjs` 文件, 参考配置内容如下：

```js
module.exports = {
    ...require('@denaro-config/postcss')
}
```
