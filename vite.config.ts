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
        port: Number(process.env.VITE_PORT) ||  5173, // .env環境変数からポート番号を取得
        hmr: {
            host: "localhost",
        },
        watch: {
            usePolling: true,
        },
    },
});
