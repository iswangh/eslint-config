/**
 * @file semantic-release 自定义 verifyConditions 插件
 *
 * 在发布前验证代码质量（lint 和 type-check）
 * 作为 semantic-release 的 verifyConditions 阶段执行
 */

import { execSync } from 'node:child_process'
import process from 'node:process'

/**
 * semantic-release 自定义插件
 * 在发布前运行 lint 和 type-check
 */
export default {
  /**
   * verifyConditions 生命周期钩子
   * 在发布前验证条件（运行代码质量检查）
   *
   * @param {Record<string, unknown>} pluginConfig - 插件配置对象
   * @param {import('semantic-release').Context} context - semantic-release 上下文对象
   * @returns {Promise<void>}
   */
  async verifyConditions(pluginConfig, context) {
    const { logger } = context

    logger.log('🔍 运行代码质量检查...')

    try {
      // 运行 lint
      logger.log('📋 运行 ESLint...')
      execSync('pnpm run lint', { stdio: 'inherit' })

      // 运行 type-check
      logger.log('📋 运行 TypeScript 类型检查...')
      execSync('pnpm run type-check', { stdio: 'inherit' })

      logger.log('✅ 代码质量检查通过')
    }
    catch {
      logger.error('❌ 代码质量检查失败')
      process.exit(1)
    }
  },
}
