import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // استبدل 'repo-name' باسم المستودع الذي أنشأته على Github حرفياً
  base: '/mohammadawad/', 
})