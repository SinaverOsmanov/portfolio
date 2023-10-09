import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import PostCSSConfig from './postcss.config';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({command, mode})=>{
    return {
    plugins: [react()],
    esbuild: {
        jsxFactory: 'React.createElement',
        jsxFragment: 'React.Fragment',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@types': path.resolve(__dirname, './src/types'),
            '@services': path.resolve(__dirname, './src/services'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@store': path.resolve(__dirname, './src/store'),
            '@i18n': path.resolve(__dirname, './src/i18n'),
            '@components': path.resolve(__dirname, './src/components'),
        },
      },
    base: './',
    css: {
        postcss: PostCSSConfig, // Use the imported PostCSS configuration
    },
    build: {
        sourcemap: true,
        outDir: 'build',
        minify: 'esbuild', // Use esbuild for minification (faster)
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name].[ext]',
                manualChunks: {
                    react: ['react', 'react-dom'], // Separate React and React DOM
                },
            },
        },
    },
    assetsInclude: ['src/assets/**/*'],
    optimizeDeps: {
        include: ['react', 'react-dom'], // Optimize React dependencies
    },
}});
