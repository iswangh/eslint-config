/**
 * @file ESLint 配置主入口
 *
 * 基于 @antfu/eslint-config 的 ESLint 配置，集成了 Vue、TypeScript 和 JSX 支持
 *
 * @see {@link https://eslint.org/ ESLint 官方网站}
 * @see {@link https://github.com/antfu/eslint-config @antfu/eslint-config GitHub 仓库}
 */

import type { OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'
import antfu from '@antfu/eslint-config'
import { antfuConfig, globalConfig, ignoresConfig, typescriptConfig, unusedImportsConfig, vueConfig } from './configs'

/**
 * ESLint 配置函数
 *
 * 基于 `@antfu/eslint-config`，并添加自定义规则配置
 * 支持传入配置选项和额外的配置对象，用户传入的规则会覆盖封装的规则
 *
 * 使用方式与 antfu() 相同：
 * ```typescript
 * iswangh(
 *   { vue: true, typescript: true, rules: { ... } },
 *   { plugins: { ... } },
 *   { rules: { ... } },
 *   ...
 * )
 * ```
 *
 * @param {OptionsConfig & Omit<TypedFlatConfigItem, 'files'>} [options] - @antfu/eslint-config 的配置选项，会与默认配置合并
 * @param {...TypedFlatConfigItem} userConfigs - 用户传入的额外配置对象，会追加到默认配置之后
 * @returns {TypedFlatConfigItem[]} ESLint 扁平配置数组
 */
export default function iswangh(
  options?: OptionsConfig & Omit<TypedFlatConfigItem, 'files'>,
  ...userConfigs: TypedFlatConfigItem[]
) {
  const { rules: userRules, ...restOptions } = options || {}

  // 收集所有用户传入的 rules，确保可以覆盖封装的规则
  const allUserRules = [
    userRules,
    ...userConfigs.map(config => config.rules),
  ]
    .filter((rules): rules is NonNullable<typeof rules> => Boolean(rules))
    .reduce<Record<string, unknown>>((acc, rules) => ({ ...acc, ...rules }), {})

  return antfu(
    { ...antfuConfig, ...restOptions } as OptionsConfig & Omit<TypedFlatConfigItem, 'files'> & { ignores?: string[] },
    ...unusedImportsConfig,
    ...globalConfig,
    ...typescriptConfig,
    ...vueConfig,
    ...ignoresConfig,
    // 用户传入的额外配置对象（保留所有属性，包括 plugins、files 等）
    ...userConfigs,
    // 将所有用户传入的 rules 放在最后，确保可以覆盖所有封装的规则
    ...(Object.keys(allUserRules).length > 0 ? [{ rules: allUserRules } as TypedFlatConfigItem] : []),
  )
}
