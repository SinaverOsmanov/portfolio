import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import PostCSSConfig from './postcss.config';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    esbuild: {
        jsxFactory: 'React.createElement',
        jsxFragment: 'React.Fragment',
      },
      base: './',
    css: {
        postcss: PostCSSConfig, // Use the imported PostCSS configuration
    },
    build: {
        outDir: 'build'
    }
});
