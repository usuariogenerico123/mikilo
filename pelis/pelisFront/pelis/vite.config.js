import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    allowedHosts:["78044e0a51659c64-51-8-152-65.serveousercontent.com"]
  }
  
})
