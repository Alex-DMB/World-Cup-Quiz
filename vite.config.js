import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/World-Cup-Quiz/',
  resolve:{
    alias:{
      '@img' : path.resolve(__dirname, './src/img'),
      '@audio' : path.resolve(__dirname, './src/audio'),
    },
  },

  plugins: [react()]
})
