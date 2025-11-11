/**
 * @file Lint-Staged 配置文件
 *
 * 用于配置 Git 提交前需要执行的 lint 任务，对暂存区文件进行代码规范检查和自动修复。
 * 仅在提交时对暂存区的文件执行检查，提高提交效率，避免对整个项目进行检查。
 *
 * @see {@link https://github.com/okonet/lint-staged Lint-Staged GitHub 仓库}
 */

/**
 * Lint-Staged 配置
 *
 * 配置对暂存区文件执行的 lint 任务
 *
 * @type {import('lint-staged').Config}
 */
export default {
  '*.{js,jsx,ts,tsx,vue,yaml,yml}': ['eslint --fix'],
}
