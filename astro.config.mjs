// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sourceInfoIntegration from './src/plugins/source-info-integration.mjs';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Enable source info in build when BUILD_DEV environment variable is set
const enableSourceInfo = process.env.BUILD_DEV === 'true';

// https://astro.build/config
export default defineConfig({
    site: 'http://localhost:4321',
    integrations: [
        react(),
        sitemap({ lastmod: new Date() }),
        sourceInfoIntegration({
            enabled: enableSourceInfo,
            hideToolbar: true
        })
    ],
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
    },
    // Disable toolbar in dev mode when using build-dev
    devToolbar: {
        enabled: !enableSourceInfo
    }
});
