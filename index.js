/**
 * @file ESLint 配置主入口（JavaScript 包装）
 *
 * 使用 jiti 动态加载 TypeScript 模块，支持从 JavaScript 配置文件导入
 * 当使用 eslint.config.js 时，Node.js 无法直接执行 TypeScript 文件，
 * 因此通过此包装文件使用 jiti 动态加载 TypeScript 模块
 */

import { createJiti } from 'jiti'

/**
 * 创建 jiti 实例，用于动态加载 TypeScript 模块
 */
const jiti = createJiti(import.meta.url, {
  extensions: ['.ts', '.tsx', '.js', '.jsx'],
  esmResolve: true,
})

/**
 * 动态加载并导出 TypeScript 模块的默认导出
 */
export default jiti('./index.ts').default
