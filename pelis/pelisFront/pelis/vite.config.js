import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    allowedHosts:["c2f2efb75e9a042f-135-237-130-227.serveousercontent.com"]
  }
  
})
