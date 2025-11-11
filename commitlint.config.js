/**
 * @file Commitlint 配置文件
 *
 * 专为规范化 Git 提交信息设计，验证 Git 提交信息格式，确保团队提交信息规范统一
 *
 * @see {@link https://commitlint.js.org/ Commitlint 官方网站}
 * @see {@link https://www.conventionalcommits.org/zh-hans/v1.0.0/ Conventional Commits 规范}
 * @ts-check
 */

import iswangh from '@iswangh/commitlint-config'

/**
 * Commitlint 配置
 *
 * 使用 @iswangh/commitlint-config 提供的默认配置
 * 如需自定义，可以传入配置选项：
 * ```javascript
 * export default iswangh({
 *   rules: {
 *     'header-max-length': [2, 'always', 80],
 *   },
 * })
 * ```
 *
 * @type {ReturnType<typeof iswangh>}
 */
export default iswangh()
