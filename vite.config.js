import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000, // Increase the limit from 500KB to 1000KB to 2000KB
  },
})

// // vite.config.js
// export default {
//   base: '/',  // Make sure the base is set to '/'
// };
