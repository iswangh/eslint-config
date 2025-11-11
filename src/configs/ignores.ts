/**
 * @file 忽略文件配置
 *
 * 配置 ESLint 需要忽略的文件和目录
 */

import type { TypedFlatConfigItem } from '@antfu/eslint-config'

/**
 * 忽略文件配置
 *
 * 定义 ESLint 需要忽略的文件和目录模式
 *
 * @type {TypedFlatConfigItem[]}
 */
export const ignoresConfig: TypedFlatConfigItem[] = [
  {
    ignores: [
      // 构建输出目录
      'dist/',
      'dist-ssr/',
      'output/',
      'build/',
      'out/',
      '**/.output/',
      '**/.nuxt/',
      '**/.vite/',
      '**/.next/',
      '**/.turbo/',
      // 依赖和包管理
      'node_modules/',
      '.bun/',
      // 日志文件
      'logs/',
      '*.log',
      '.pnpm-debug.log',
      'yarn-error.log',
      'npm-debug.log*',
      'lerna-debug.log*',
      // 测试和覆盖率
      'coverage/',
      'test-results/',
      'playwright-report/',
      '**/cypress/videos/',
      '**/cypress/screenshots/',
      // 临时文件
      'temp/',
      'tmp/',
      // 缓存目录
      '.cache/',
      '.parcel-cache/',
      '.vite-inspect/',
      '.eslintcache',
      // 自动生成的文件
      'src/types/generated/',
      '**/*.generated.d.ts',
      '**/*.auto-imports.d.ts',
      '**/*.components.d.ts',
      '.eslintrc-auto-import.json',
      // 文档文件
      '**/*.md',
      // 工作流和部署
      '.workflow/',
      '.vercel/',
      '.netlify/',
      // TypeScript 构建信息
      '*.tsbuildinfo',
      // 系统文件
      '.DS_Store',
      'Thumbs.db',
    ],
  },
]
