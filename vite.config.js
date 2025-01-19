import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/empowereducation/',

    server: {
        open: true, // Open in browser on dev
        port: 5173, // Dev server port
        cors: true, // Enable CORS
        historyApiFallback: true, // Fallback for SPA routing
    },

    plugins: [
        react(), // React plugin
    ],

    assetsInclude: ['**/*.glb'], // Include GLB assets

    resolve: {
        alias: {
            '@': '/src', // Alias for src directory
        },
    },

    build: {
        rollupOptions: {
            output: {
                manualChunks: undefined, // No manual chunking
            },
        },
    },
});