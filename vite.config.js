import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/LyphDraw-portfolio/',
  plugins: [vue()],
})
