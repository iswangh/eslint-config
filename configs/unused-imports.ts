/**
 * @file unused-imports 规则配置
 *
 * 配置 unused-imports 插件的规则
 */

import type { TypedFlatConfigItem } from '@antfu/eslint-config'
import unusedImports from 'eslint-plugin-unused-imports'

/**
 * unused-imports 配置
 */
export const unusedImportsConfig: TypedFlatConfigItem[] = [
  { plugins: { unusedImports } },
  {
    rules: {
      // unused-imports
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': ['error', { vars: 'all', varsIgnorePattern: '^_' }],
    },
  },
]
