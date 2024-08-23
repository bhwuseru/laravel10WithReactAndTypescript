import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/ts/app.tsx", "resources/css/app.css"],
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: true,
        port: 5173, // .envrcの export VITE_PORTのポート番号を設定
        hmr: {
            host: "localhost",
        },
        watch: {
            usePolling: true,
        },
    },
});
