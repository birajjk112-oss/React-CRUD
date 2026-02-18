import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Set the base to the GitHub repo name so pages load at /<repo>/
  base: '/React-CRUD/',
  plugins: [react()],
})
