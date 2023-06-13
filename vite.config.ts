import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import path from 'path'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './viteEnv', //这里配置环境变量文件的位置
  plugins: [vue()],
  resolve: {
    alias: {
      // '@': path.resolve('./src')
      '@': resolve(__dirname, './src')
    }
  }
})
