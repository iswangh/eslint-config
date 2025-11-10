/**
 * @file 全局规则配置
 *
 * 适用于所有文件的全局 ESLint 规则
 */

import type { TypedFlatConfigItem } from '@antfu/eslint-config'

/**
 * 全局规则配置
 */
export const globalConfig: TypedFlatConfigItem[] = [
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'import', next: '*' }, // import 语句后需要空行
        { blankLine: 'never', prev: '*', next: 'import' }, // 禁止 import 前有空行
      ],
    },
  },
]
