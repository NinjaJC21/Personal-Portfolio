// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // (default — make sure you're not pointing to /public)
  build: {
    outDir: 'dist',
  },
})

