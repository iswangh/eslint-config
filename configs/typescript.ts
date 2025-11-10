/**
 * @file TypeScript 文件规则配置
 *
 * 适用于 TypeScript 文件的特定规则，包括命名约定等
 */

import type { TypedFlatConfigItem } from '@antfu/eslint-config'

/**
 * TypeScript 文件规则配置
 */
export const typescriptConfig: TypedFlatConfigItem[] = [
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn', // 允许使用 any 但不推荐，会警告
      '@typescript-eslint/no-empty-interface': ['warn', { allowSingleExtends: true }], // 允许接口定义为空，但会警告，继承不会
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'], // 普通变量用 camelCase，常量用 UPPER_CASE
          leadingUnderscore: 'allow', // 允许 _private 形式的私有变量
          filter: {
            // 允许配置文件中的 __dirname 和 __filename
            regex: '^(__dirname|__filename)$',
            match: false,
          },
        },
        { selector: 'function', format: ['camelCase', 'PascalCase'] },
        { selector: 'class', format: ['PascalCase'] },
        { selector: 'enum', format: ['PascalCase'] },
        { selector: 'interface', format: ['PascalCase'] },
        { selector: 'typeAlias', format: ['PascalCase'] },
      ],
    },
  },
]
