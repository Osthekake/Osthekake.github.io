import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages (user/organization site) can serve from root.
// We build into `docs/` so Pages can serve compiled assets.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'docs'
  }
});


