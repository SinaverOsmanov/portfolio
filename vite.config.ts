import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import PostCSSConfig from './postcss.config';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({command, mode})=>{
    const env = loadEnv(mode, process.cwd(), '')
    
    return {
    plugins: [react()],
    esbuild: {
        jsxFactory: 'React.createElement',
        jsxFragment: 'React.Fragment',
    },
    define: {
        __TEMPLATE_ID__: JSON.stringify(env.TEMPLATE_ID),
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@store': path.resolve(__dirname, './src/store'),
            '@i18n': path.resolve(__dirname, './src/i18n'),
            '@components': path.resolve(__dirname, './src/components'),
        },
      },
    base: '/portfolio',
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
