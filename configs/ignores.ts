/**
 * @file 忽略文件配置
 *
 * 配置 ESLint 需要忽略的文件和目录
 */

import type { TypedFlatConfigItem } from '@antfu/eslint-config'

/**
 * 忽略文件配置
 */
export const ignoresConfig: TypedFlatConfigItem[] = [
  {
    ignores: [
      'dist/',
      'output/',
      '**/.output/',
      '**/.nuxt/',
      '**/.vite/',
      'node_modules/',
      '.bun/',
      '.pnpm-debug.log',
      'yarn-error.log',
      'coverage/',
      'temp/',
      'tmp/',
      'src/types/generated/',
      '**/*.generated.d.ts',
      '**/*.md',
    ],
  },
]
