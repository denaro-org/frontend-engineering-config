# @denaro-config/vue3-types

> :tada: 提供 vue3 项目的全局 d.ts 类型声明文件, 为你提供多种文件类型声明。

![npm (scoped)](https://img.shields.io/npm/v/%40denaro-config/vue3-types)
![NPM](https://img.shields.io/npm/l/%40denaro-config%2Fvue3-types)

![GitHub repo size](https://img.shields.io/github/repo-size/denaro-org/frontend-engineering-config)
![GitHub Repo stars](https://img.shields.io/github/stars/denaro-org/frontend-engineering-config)
![GitHub issues](https://img.shields.io/github/issues/denaro-org/frontend-engineering-config)
![GitHub top language](https://img.shields.io/github/languages/top/denaro-org/frontend-engineering-config)

![npm](https://img.shields.io/npm/dw/%40denaro-config/vue3-types)
![jsDelivr hits (npm scoped)](https://img.shields.io/jsdelivr/npm/hd/%40denaro-config%2Fvue3-types)

## 参考官网地址

> - [typescript](https://www.typescriptlang.org/)
> - [Vue.js](https://v3.cn.vuejs.org/)

## 安装至您的项目

```bash
npm install -D @denaro-config/vue3-types
# or
pnpm install -D @denaro-config/vue3-types
# or
yarn add -D @denaro-config/vue3-types
```

## 使用

在项目的根目录下创建 `env.d.ts` 文件, 参考配置内容如下：

```ts
/// <reference types="@denaro-config/vue3-types/shims-vue" />
```

有使用 vite 的项目需要额外的配置：

```ts
/// <reference types="vite/client" />
```
