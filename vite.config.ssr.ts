/**
 * Vite SSR build configuration.
 * Used only by: `vite build --config vite.config.ssr.ts`
 *
 * Produces an ES module bundle of src/entry-server.tsx into dist/server/
 * which the prerender.mjs script then imports to render each route.
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    ssr: 'src/entry-server.tsx',
    outDir: 'dist/server',
    rollupOptions: {
      output: {
        format: 'esm',
      },
    },
    // Don't minify the server bundle — it runs in Node, not the browser
    minify: false,
    // Allow larger server chunks — they aren't delivered to the browser
    chunkSizeWarningLimit: 10000,
  },
  // Tell Vite we're in SSR mode so it handles imports correctly
  ssr: {
    // Externalise native Node modules; keep React and friends bundled
    noExternal: ['react-helmet-async'],
  },
});
