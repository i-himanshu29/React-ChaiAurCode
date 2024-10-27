import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// to solve the cors error use proxy
export default defineConfig({
  server:{
    proxy:{
      '/api':'http://localhost:3000'
    }
  },
  plugins: [react()],
})
