import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import SSR from 'vite-ssr/plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),  SSR()]
})
