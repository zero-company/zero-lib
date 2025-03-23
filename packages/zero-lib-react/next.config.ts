import type { NextConfig } from 'next'
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist-next',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  webpack: config => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    }
    return config
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      //@ts-ignore
      ['rehype-gfm', { strict: true, throwOnError: true }],
      //remarkGfm,
    ],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
