# @denaro/config-cz-git

> :tada: 前端工程化中的 cz-git 通用配置, 与 Commitlint 配合, 获取 Commitlint 相关配置, 给予命令行提示信息。

<p align="center">
  <a href="https://www.npmjs.com/package/%40denaro%2Fconfig-cz-git" target="_blank">
    <img alt="npm" src="https://img.shields.io/npm/v/%40denaro%2Fconfig-cz-git">
  </a>
  <a href="https://github.com/frontend-engineering-config/stargazers" target="_blank">
    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/frontend-engineering-config">
  </a>
  <a href="https://github.com/frontend-engineering-config/issues" target="_blank">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/frontend-engineering-config">
  </a>
  <br />  
  <a href="https://www.jsdelivr.com/package/npm/%40denaro%2Fconfig-cz-git" target="_blank">
    <img alt="jsDelivr hits (npm scoped)" src="https://img.shields.io/jsdelivr/npm/hd/%40denaro%2Fconfig-cz-git">
  </a>
  <a href="https://github.com/frontend-engineering-config/blob/main/LICENSE" target="_blank">
    <img alt="NPM" src="https://img.shields.io/npm/l/%40denaro%2Fconfig-cz-git">
  </a>
</p>

## 参考官网地址

> [cz-git](https://cz-git.qbb.sh/zh/)

## 安装至您的项目

```bash
npm install -D @denaro/config-cz-git
# or
pnpm install -D @denaro/config-cz-git
# or
yarn add -D @denaro/config-cz-git
```

## 使用

在项目根目录下创建 `cz.config.js` 文件, 参考配置内容如下：

```js
module.exports = {
  ...require('@denaro/config-cz-git')
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
