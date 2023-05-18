import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 将引入的@/*转化为真实的路径
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
