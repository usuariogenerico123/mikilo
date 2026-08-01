import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    allowedHosts:["31016a89f6f01fc9-74-249-85-192.serveousercontent.com"]
  }
  
})
