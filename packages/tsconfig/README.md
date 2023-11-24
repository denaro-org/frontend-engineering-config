# @denaro-config/tsconfig

> :tada: 前端工程化中的 tsconfig 通用配置, 提供多种打包场景的 tsconfig 配置, 您可以执行进行继承使用。

![npm (scoped)](https://img.shields.io/npm/v/%40denaro-config/tsconfig)
![NPM](https://img.shields.io/npm/l/%40denaro-config%2Ftsconfig)

![GitHub repo size](https://img.shields.io/github/repo-size/denaro-org/frontend-engineering-config)
![GitHub Repo stars](https://img.shields.io/github/stars/denaro-org/frontend-engineering-config)
![GitHub issues](https://img.shields.io/github/issues/denaro-org/frontend-engineering-config)
![GitHub top language](https://img.shields.io/github/languages/top/denaro-org/frontend-engineering-config)

![npm](https://img.shields.io/npm/dw/%40denaro-config/tsconfig)
![jsDelivr hits (npm scoped)](https://img.shields.io/jsdelivr/npm/hd/%40denaro-config%2Ftsconfig)

## 参考官网地址

> [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

## 安装至您的项目

```bash
npm install -D @denaro-config/tsconfig
# or
pnpm install -D @denaro-config/tsconfig
# or
yarn add -D @denaro-config/tsconfig
```

## 使用

在项目根目录下创建 `tsconfig.json` 文件, 参考配置内容如下：

- CommonJS

```json
{
  "extends": "@tsconfig/eslint-config/tsconfig.json"
}
```

- ESNext

```json
{
  "extends": "@tsconfig/eslint-config/tsconfig.esnext.json"
}
```

- Vue3

```json
{
  "extends": "@tsconfig/eslint-config/tsconfig.vue3.json"
}
```

## 结合 eslint 使用

> 参考 [typescript](../typescript/README.md)
