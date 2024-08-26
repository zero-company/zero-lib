import { defineConfig } from 'tsup'

export default defineConfig(options => ({
  entryPoints: ['src/lib/index.tsx'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  minify: true,
  external: ['react'],
  ...options,
}))
