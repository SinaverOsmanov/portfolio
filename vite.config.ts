import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import PostCSSConfig from './postcss.config';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            // Add your aliases here
            '@src': '/src',
            '@components': '/src/components',
            '@styles': '/src/styles',
        },
    },
    css: {
        postcss: PostCSSConfig, // Use the imported PostCSS configuration
    },
    build: {
        outDir: 'build'
    }
});
