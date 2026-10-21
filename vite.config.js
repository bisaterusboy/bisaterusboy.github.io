import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      webp: { quality: 80 },
    }),
  ],
  base: '/', // Update untuk GitHub Pages repository
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react/') || id.includes('react-dom/')) {
              return 'vendor';
            }
            if (id.includes('react-router-dom')) {
              return 'router';
            }
            if (id.includes('bootstrap') || id.includes('react-bootstrap')) {
              return 'ui';
            }
            if (id.includes('@fortawesome')) {
              return 'icons';
            }
            if (id.includes('react-slick') || id.includes('slick-carousel')) {
              return 'carousel';
            }
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Tingkatkan limit warning
  }
})
