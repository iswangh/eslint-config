/**
 * @file unused-imports 规则配置
 *
 * 配置 unused-imports 插件的规则
 */

import type { TypedFlatConfigItem } from '@antfu/eslint-config'
import unusedImports from 'eslint-plugin-unused-imports'

/**
 * unused-imports 配置
 *
 * 配置 unused-imports 插件，用于检测和警告未使用的导入和变量
 *
 * @type {TypedFlatConfigItem[]}
 */
export const unusedImportsConfig: TypedFlatConfigItem[] = [
  { plugins: { unusedImports } },
  {
    rules: {
      // 检测未使用的导入
      'unused-imports/no-unused-imports': 'warn',
      // 检测未使用的变量，忽略以 _ 开头的变量
      'unused-imports/no-unused-vars': ['error', { vars: 'all', varsIgnorePattern: '^_' }],
    },
  },
]
