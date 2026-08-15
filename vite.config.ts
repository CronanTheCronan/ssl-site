import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Custom domain apex — base must be '/'
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})
