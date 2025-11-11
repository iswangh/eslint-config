/**
 * @file configs 模块聚合导出入口
 *
 * 统一管理所有配置模块的对外接口
 * 避免在模块外部直接导入模块内部文件
 */

export * from './antfu'
export * from './global'
export * from './ignores'
export * from './typescript'
export * from './unused-imports'
export * from './vue'
