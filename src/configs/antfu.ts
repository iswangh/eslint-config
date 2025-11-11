/**
 * @file antfu 配置选项
 *
 * 基于 @antfu/eslint-config 的默认配置选项
 *
 * 注意：vue、typescript、jsx、stylistic 默认已开启或自动检测，无需重复设置
 */

import type { OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'

/**
 * antfu 配置选项
 *
 * 只包含需要自定义的选项，默认开启的选项不再重复
 *
 * @type {OptionsConfig & Omit<TypedFlatConfigItem, 'files'>}
 */
export const antfuConfig: OptionsConfig & Omit<TypedFlatConfigItem, 'files'> = {
  formatters: true,
  rules: {
    'antfu/top-level-function': 'off',
  },
}
