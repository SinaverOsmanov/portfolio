import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import PostCSSConfig from './postcss.config';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    esbuild: {
        jsxFactory: 'React.createElement',
        jsxFragment: 'React.Fragment',
    },
    resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
      },
    base: '/portfolio/',
    css: {
        postcss: PostCSSConfig, // Use the imported PostCSS configuration
    },
    build: {
        outDir: 'build',
        minify: 'esbuild', // Use esbuild for minification (faster)
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom'], // Separate React and React DOM
                },
            },
        },
    },
    optimizeDeps: {
        include: ['react', 'react-dom'], // Optimize React dependencies
    },
});
