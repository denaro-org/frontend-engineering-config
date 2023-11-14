# @denaro-config/config-cz-git

> :tada: 前端工程化中的 cz-git 通用配置, 与 Commitlint 配合, 获取 Commitlint 相关配置, 给予命令行提示信息。

![npm (scoped)](https://img.shields.io/npm/v/%40denaro-config/config-cz-git?link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40vuepress-config%2Fconfig-cz-git)
![NPM](https://img.shields.io/npm/l/%40denaro-config%2Fconfig-cz-git?link=https%3A%2F%2Fgithub.com%2Fdenaro-org%2Ffrontend-engineering-config%2Fblob%2Fmain%2FLICENSE)

![GitHub repo size](https://img.shields.io/github/repo-size/denaro-org/frontend-engineering-config?link=https%3A%2F%2Fgithub.com%2Fdenaro-org%2Ffrontend-engineering-config)
![GitHub Repo stars](https://img.shields.io/github/stars/denaro-org/frontend-engineering-config?link=https%3A%2F%2Fgithub.com%2Fdenaro-org%2Ffrontend-engineering-config%2Fstargazers)
![GitHub issues](https://img.shields.io/github/issues/denaro-org/frontend-engineering-config?link=https%3A%2F%2Fgithub.com%2Fdenaro-org%2Ffrontend-engineering-config%2Fissues)

![npm](https://img.shields.io/npm/dw/%40denaro-config/config-cz-git?link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40vuepress-config%2Fconfig-cz-git)
![jsDelivr hits (npm scoped)](https://img.shields.io/jsdelivr/npm/hd/%40denaro-config%2Fconfig-cz-git?link=https%3A%2F%2Fwww.jsdelivr.com%2Fpackage%2Fnpm%2F%40denaro-config%2Fconfig-cz-git)

## 参考官网地址

> [cz-git](https://cz-git.qbb.sh/zh/)

## 安装至您的项目

```bash
npm install -D @denaro-config/config-cz-git
# or
pnpm install -D @denaro-config/config-cz-git
# or
yarn add -D @denaro-config/config-cz-git
```

## 使用

在项目根目录下创建 `cz.config.js` 文件, 参考配置内容如下：

```js
module.exports = {
  ...require('@denaro-config/config-cz-git')
}
```

## 配置 cz-git

在 `package.json` 中配置, 后续进行提交代码时需要执行 `npm run commit` 命令

```json
{
  "scripts": {
    "commit": "git add .&& cz"
  },
  "config": {
    "commitizen": {
      "path": "cz-git"
    }
  }
}
```

## 结合 commitlint 使用

> 参考 [commitlint](../commitlint/README.md)
