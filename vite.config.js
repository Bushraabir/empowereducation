import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({

    base: '/empowereducation/',

    plugins: [
        react(),
    ],

    assetsInclude: ['**/*.glb'],

    resolve: {
        alias: {
            '@': '/src',
        },
    },

    server: {
        fs: {
            strict: false,
        },
    },

    build: {

        rollupOptions: {
            output: {
                manualChunks: undefined,
            },
        },
    },
})