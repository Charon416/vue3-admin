import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// import { resolve } from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './viteEnv', //这里配置环境变量文件的位置
  resolve: {
    alias: {
      '@': path.resolve('./src')
      // '@': resolve(__dirname, './src')
    }
  },
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), './src/assets/icons')],
      symbolId: 'icon-[dir]-[name]'
    })
  ]
})
