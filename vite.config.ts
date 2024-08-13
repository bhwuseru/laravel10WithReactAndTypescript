import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/ts/app.tsx"],
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: true,
        port: 18044,
        hmr: {
            host: "localhost",
        },
        watch: {
            usePolling: true,
        },
    },
});
