/**
 * @file semantic-release 配置文件
 *
 * 用于手动和自动发布
 * 支持本地手动运行和 CI/CD 自动运行
 */

import process from 'node:process'
import { semanticReleaseVerify } from './scripts/index.js'

// 根据环境变量决定是否启用 GitHub 插件
// 手动发布时：不设置 GITHUB_TOKEN 或设置为空字符串，GitHub 插件会被跳过
// 自动发布时：在 CI/CD 中设置 GITHUB_TOKEN，GitHub 插件会正常工作
const plugins = [
  // 自定义验证（lint 和 type-check）
  semanticReleaseVerify,
  [
    '@semantic-release/commit-analyzer',
    {
      preset: 'angular',
      releaseRules: [
        // chore 默认不发布，配置为 patch（维护性更新，如依赖更新、配置调整等）
        { type: 'chore', release: 'patch' },
        // refactor 默认不发布，配置为 patch
        { type: 'refactor', release: 'patch' },
      ],
    },
  ],
  '@semantic-release/release-notes-generator',
  [
    '@semantic-release/changelog',
    {
      changelogFile: 'CHANGELOG.md',
    },
  ],
  [
    '@semantic-release/npm',
    {
      npmPublish: true,
    },
  ],
]

// 如果设置了 GITHUB_TOKEN 或 GH_TOKEN，启用 GitHub 插件
// 手动发布时可以不设置，自动发布时在 CI/CD 中设置
if (process.env.GITHUB_TOKEN || process.env.GH_TOKEN) {
  plugins.push([
    '@semantic-release/github',
    {
      successComment: false,
      releasedLabels: false,
    },
  ])
}

plugins.push([
  '@semantic-release/git',
  {
    assets: ['CHANGELOG.md', 'package.json'],
    // eslint-disable-next-line no-template-curly-in-string
    message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
  },
])

export default {
  branches: [
    'main',
    {
      name: 'beta',
      prerelease: true,
    },
  ],
  plugins,
}
