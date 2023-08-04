import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import ssr from "vite-plugin-ssr/plugin";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths(), react(), ssr({ prerender: true })],
    server: {
        port: 3000,
    },
});
