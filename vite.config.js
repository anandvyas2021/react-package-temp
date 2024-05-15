import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { libInjectCss } from "vite-plugin-lib-inject-css";

import tailwindcss from "tailwindcss";

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "lib/main.jsx"),
            name: "index",
            // fileName: (format) => `index.${format}.js`,
            fileName: "index",
        },

        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                },
            },
        },
    },
    plugins: [react(), tailwindcss(), libInjectCss()],
});
