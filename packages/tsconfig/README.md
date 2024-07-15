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

-   CommonJS

```json
{
    "extends": "@denaro-config/tsconfig/tsconfig.json"
}
```

-   ESNext

```json
{
    "extends": "@denaro-config/tsconfig/tsconfig.esnext.json"
}
```

-   Vue3

```json
{
    "extends": "@denaro-config/tsconfig/tsconfig.vue3.json"
}
```

-   Vite+Vue 项目

-   `tsconfig.json`

```json
{
    "files": [],
    "references": [
        {
            "path": "./tsconfig.node.json"
        },
        {
            "path": "./tsconfig.app.json"
        }
    ]
}
```

-   `tsconfig.app.json`

```json
{
    "extends": "@denaro-config/tsconfig/tsconfig.vue3.json",

    "include": [
        "env.d.ts",
        "src/**/*.ts",
        "src/**/*.tsx",
        "src/**/*.vue",
        "tests/**/*.ts",
        "tests/**/*.tsx"
    ],

    "exclude": ["src/**/__tests__/*", "node_modules", "lib", "dist"]
}
```

-   `tsconfig.node.json`

```json
{
    "extends": "@denaro-config/tsconfig/tsconfig.node.json",

    "include": [
        "vite.config.*",
        "vitest.config.*",
        "cypress.config.*",
        "nightwatch.conf.*",
        "playwright.config.*"
    ]
}
```

## 结合 eslint 使用

> 参考 [typescript](../typescript/README.md)
