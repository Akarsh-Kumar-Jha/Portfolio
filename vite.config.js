import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   // Asset handling configuration
   assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'],

   // Asset public directory
   publicDir: 'public',
})
