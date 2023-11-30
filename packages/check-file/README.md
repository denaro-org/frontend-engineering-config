# @denaro-config/eslint-config-check-file

> :tada: 前端工程化中的 eslint 通用配置, 提供校验、规范文件或文件夹命名, 一般适用于规范单元测试文件和存放单元测试的目录。

![npm (scoped)](https://img.shields.io/npm/v/%40denaro-config/eslint-config-check-file)
![NPM](https://img.shields.io/npm/l/%40denaro-config%2Feslint-config-check-file)

![GitHub repo size](https://img.shields.io/github/repo-size/denaro-org/frontend-engineering-config)
![GitHub Repo stars](https://img.shields.io/github/stars/denaro-org/frontend-engineering-config)
![GitHub issues](https://img.shields.io/github/issues/denaro-org/frontend-engineering-config)
![GitHub top language](https://img.shields.io/github/languages/top/denaro-org/frontend-engineering-config)

![npm](https://img.shields.io/npm/dw/%40denaro-config/eslint-config-check-file)
![jsDelivr hits (npm scoped)](https://img.shields.io/jsdelivr/npm/hd/%40denaro-config%2Feslint-config-check-file)

## 参考官网地址

> [eslint](https://eslint.org/) > [eslint-plugin-check-file](https://github.com/DukeLuo/eslint-plugin-check-file)

## 安装至您的项目

```bash
npm install -D @denaro-config/eslint-config-check-file
# or
pnpm install -D @denaro-config/eslint-config-check-file
# or
yarn add -D @denaro-config/eslint-config-check-file
```

## 使用

在项目根目录下创建 `.eslintrc.js` 文件, 参考配置内容如下：

```js
module.exports = {
  extends: ['@denaro-config/eslint-config-check-file']
}
```

你也可以在配置中省略 `eslint-config`：

```js
module.exports = {
  extends: ['@denaro-config/check-file']
}
```

在 `package.json` 中添加 `lint` 命令：

```json
{
  "scripts": {
    "lint": "eslint --ext vue,js,jsx,cjs,mjs,ts,tsx,cts,mts --fix ."
  }
}
```

## 结合 commitlint 使用

> 参考 [commitlint](../commitlint/README.md)

## 结合 cz-git 使用

> 参考 [cz-git](../cz-git/README.md)
