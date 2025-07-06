import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Crypto-Price-Tracker/', // ✅ This is important for GitHub Pages
  plugins: [react()],
})
