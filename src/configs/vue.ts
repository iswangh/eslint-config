/**
 * @file Vue 文件规则配置
 *
 * 适用于 Vue 文件的特定规则
 */

import type { TypedFlatConfigItem } from '@antfu/eslint-config'

/**
 * Vue 文件规则配置
 *
 * 包含适用于 Vue 文件的特定 ESLint 规则
 *
 * @type {TypedFlatConfigItem[]}
 */
export const vueConfig: TypedFlatConfigItem[] = [
  {
    files: ['**/*.vue'],
    rules: {
      // 强制 Vue 文件的 script 块使用 TypeScript
      'vue/block-lang': ['error', { script: { lang: 'ts' } }],
    },
  },
]
