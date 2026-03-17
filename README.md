# 前端工程化辅助包

## 1. 项目介绍

本项目是一个前端工程化辅助包，包含以下内容：

### 1.1. 工程化 commit 规范类包

- [config-commitlint](./packages/commitlint/README.md)
- [config-cz-git](./packages/cz-git/README.md)

### 1.2. 工程化代码规范类包

- [eslint-config-basic](./packages/basic/README.md)
- [eslint-config-check-file](./packages/check-file/README.md)
- [eslint-config-prettier](./packages/eslint-prettier/README.md)
- [eslint-config-tailwindcss](./packages/eslint-tailwindcss/README.md)
- [eslint-config-javascript](./packages/javascript/README.md)
- [prettier](./packages/prettier/README.md)
- [stylelint](./packages/stylelint/README.md)
- [stylelint-less](./packages/stylelint-less/README.md)
- [stylelint-scss](./packages/stylelint-scss/README.md)
- [eslint-config-typescript](./packages/typescript/README.md)
- [eslint-config-vue3](./packages/vue3/README.md)

### 1.3. 工程化配置整合类包

- [postcss](./packages/postcss/README.md)
- [tsconfig](./packages/tsconfig/README.md)
- [vue3-types](./packages/vue3-types/README.md)

## 2. 项目优点

- 一键安装，一键配置，一键使用
- 懒人必备，工程化必备
- 工程化配置整合，代码规范整合, 无需各种姿势上网找配置，即插即用

## 3. 项目安装

```bash
npm install -D @denaro/{config-commitlint,config-cz-git,...}
# or
pnpm install -D @denaro/{config-commitlint,config-cz-git,...}
# or
yarn add -D @denaro/{config-commitlint,config-cz-git,...}
```

## 4. 项目使用

### 4.1. 结合 lint-staged、husky 使用

#### 4.1.1. 安装相关依赖

```bash
npm install -D lint-staged husky
# or
pnpm install -D lint-staged husky
# or
yarn add -D lint-staged husky
```

#### 4.1.2. 配置 husky

### 配置 husky

初始化 husky

```bash
npx husky install
```

添加 pre-commit 钩子

```bash
npx husky add .husky/pre-commit "npx --no-install lint-staged"
```

添加 commit-msg 钩子

```bash
npx husky add .husky/commit-msg "npx --no -- commitlint --edit ${1}"
```
