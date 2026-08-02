import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    allowedHosts:["048e62b8e48973f2-51-8-152-65.serveousercontent.com"]
  }
  
})
