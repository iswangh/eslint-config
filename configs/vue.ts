/**
 * @file Vue 文件规则配置
 *
 * 适用于 Vue 文件的特定规则
 */

import type { TypedFlatConfigItem } from '@antfu/eslint-config'

/**
 * Vue 文件规则配置
 */
export const vueConfig: TypedFlatConfigItem[] = [
  {
    files: ['**/*.vue'],
    rules: {
      'vue/block-lang': ['error', { script: { lang: 'ts' } }], // 块语言限制
    },
  },
]
