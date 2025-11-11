# @iswangh/eslint-config

基于 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 的 ESLint 扁平配置，添加了自定义规则（TypeScript 命名约定、Vue TypeScript 强制、未使用导入检测等），支持 JavaScript 和 TypeScript 配置文件。

## 项目介绍

`@iswangh/eslint-config` 是一个基于 `@antfu/eslint-config` 的 ESLint 扁平配置包，提供了开箱即用的代码规范配置。该配置在 `@antfu/eslint-config` 的基础上添加了自定义规则，包括 TypeScript 命名约定、Vue 文件强制使用 TypeScript、未使用导入和变量检测等，同时支持 JavaScript 和 TypeScript 两种配置文件格式，适用于现代前端项目的代码质量保障。

### 核心功能

- 基于 `@antfu/eslint-config` 的现代化 ESLint 扁平配置
- 完整的 TypeScript 支持，包括命名约定和类型检查
- Vue 3 项目支持，强制使用 TypeScript
- 未使用导入和变量的自动检测
- 可自定义配置，支持覆盖默认规则

### 应用场景

- Vue 3 + TypeScript 项目
- 需要统一代码规范的前端项目
- 基于 ESLint 9.x 的现代前端项目

## 技术栈

### 运行时依赖

- **jiti**: `^2.6.1` - TypeScript 模块动态加载器，用于支持从 JavaScript 配置文件导入 TypeScript 模块

### 对等依赖

- **@antfu/eslint-config**: `^6.0.0` - 基础 ESLint 配置
- **eslint**: `^9.0.0` - ESLint 核心
- **eslint-plugin-unused-imports**: `^4.0.0` - 未使用导入检测插件

### 开发依赖

- **@antfu/eslint-config**: `^6.2.0` - 开发时使用的 ESLint 配置（用于项目自身）
- **eslint**: `^9.39.1` - ESLint 核心（用于项目自身）
- **eslint-plugin-unused-imports**: `^4.3.0` - 未使用导入检测插件（用于项目自身）
- **TypeScript**: `^5.9.3` - TypeScript 编译器

## 目录结构

```
eslint-config/
├── configs/              # 配置模块目录
│   ├── antfu.ts          # Antfu 基础配置
│   ├── global.ts          # 全局规则配置
│   ├── ignores.ts         # 忽略文件配置
│   ├── typescript.ts      # TypeScript 规则配置
│   ├── unused-imports.ts  # 未使用导入规则配置
│   ├── vue.ts             # Vue 规则配置
│   └── index.ts           # 配置模块聚合导出
├── eslint.config.js       # ESLint 配置示例（JavaScript）
├── eslint.config.ts       # ESLint 配置示例（TypeScript）
├── index.js               # 主入口文件（JavaScript 包装，用于支持 JS 配置文件）
├── index.ts               # 主入口文件（TypeScript 实现）
├── package.json           # 项目配置文件
├── tsconfig.json          # TypeScript 配置
└── README.md              # 项目文档
```

## 快速开始

### 环境要求

- Node.js >= 18.0.0
- 支持 ESM 的包管理器（pnpm、npm、yarn）

### 安装

推荐使用 `ni`（需要全局安装 `@antfu/ni`）：

```bash
ni -D @iswangh/eslint-config
```

或使用其他包管理器：

```bash
# pnpm
pnpm add -D @iswangh/eslint-config

# npm
npm install -D @iswangh/eslint-config

# yarn
yarn add -D @iswangh/eslint-config
```

### 使用方法

#### JavaScript 配置文件

创建 `eslint.config.js`：

```javascript
/**
 * @file ESLint 配置文件
 * @ts-check
 */

import iswangh from '@iswangh/eslint-config'

/**
 * ESLint 配置
 *
 * @type {ReturnType<typeof import('@antfu/eslint-config').default>}
 */
export default iswangh()
```

#### TypeScript 配置文件

创建 `eslint.config.ts`：

```typescript
import iswangh from '@iswangh/eslint-config'

export default iswangh()
```

#### 自定义配置

`iswangh()` 函数支持传递 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 的所有选项，以及额外的配置对象：

```typescript
import iswangh from '@iswangh/eslint-config'

export default iswangh(
  {
    vue: true,
    typescript: true,
    jsx: false,
    rules: {
      // 自定义规则
    },
    // ... 其他 @antfu/eslint-config 选项
  },
  // 可以传入多个额外的配置对象
  {
    rules: {
      // 更多自定义规则
    },
  }
)
```

**注意**：用户传入的规则会覆盖封装的规则，确保用户配置优先级最高。

## 配置说明

本配置基于 `@antfu/eslint-config`，并添加了以下自定义规则。配置按以下顺序加载：Antfu 基础配置 → Unused Imports 配置 → 全局规则 → TypeScript 规则 → Vue 规则 → 忽略文件配置。

### Antfu 配置

- `formatters: true`：启用代码格式化支持
- `antfu/top-level-function: 'off'`：关闭顶级函数检查

**注意**：`vue`、`typescript`、`jsx`、`stylistic` 等选项在 `@antfu/eslint-config` 中默认已开启或自动检测，无需重复设置。

### 全局规则

适用于所有文件：

- `no-console: ['warn', { allow: ['warn', 'error'] }]`：警告使用 `console`，但允许 `console.warn` 和 `console.error`
- `padding-line-between-statements`：
  - `['error', { blankLine: 'always', prev: 'import', next: '*' }]`：import 语句后需要空行
  - `['error', { blankLine: 'never', prev: '*', next: 'import' }]`：禁止 import 前有空行

### TypeScript 规则

适用于 `**/*.ts`、`**/*.tsx`、`**/*.vue` 文件：

- `@typescript-eslint/no-explicit-any: 'warn'`：允许使用 `any` 但会警告
- `@typescript-eslint/no-empty-interface: ['warn', { allowSingleExtends: true }]`：允许空接口但会警告，继承单个接口时不会警告
- `@typescript-eslint/naming-convention`：命名约定
  - 变量：`camelCase`、`PascalCase`、`UPPER_CASE`（允许 `_` 前缀，允许 `__dirname` 和 `__filename`）
  - 函数：`camelCase`、`PascalCase`
  - 类、枚举、接口、类型别名：`PascalCase`

### Vue 规则

适用于 `**/*.vue` 文件：

- `vue/block-lang: ['error', { script: { lang: 'ts' } }]`：强制 Vue 文件中的 `<script>` 块使用 TypeScript

### Unused Imports 规则

- `unused-imports/no-unused-imports: 'warn'`：警告未使用的导入
- `unused-imports/no-unused-vars: ['error', { vars: 'all', varsIgnorePattern: '^_' }]`：错误未使用的变量，检查所有变量，忽略以 `_` 开头的变量

### 忽略文件

以下文件和目录会被自动忽略：

- `dist/`、`output/`、`**/.output/`、`**/.nuxt/`、`**/.vite/`
- `node_modules/`、`.bun/`
- `.pnpm-debug.log`、`yarn-error.log`
- `coverage/`、`temp/`、`tmp/`
- `src/types/generated/`、`**/*.generated.d.ts`
- `**/*.md`

## 项目信息

- **许可证**：Apache-2.0
- **仓库**：[Gitee](https://gitee.com/iswangh/eslint-config.git)
