import { codeInspectorPlugin } from 'code-inspector-plugin'

/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  webpack: (config) => {
    config.plugins.push(
      codeInspectorPlugin({ bundler: 'webpack', hotKeys: ['altKey'] }),
    )

    config.module.rules.push({
      test: /\.md$/i,
      type: 'asset/source',
    })
    return config
  },
  distDir: 'dist',
}
