import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "productApp",
      filename: "remoteEntry.js",
      exposes: {
        "./product": "./src/pages/product/index.ts",
      },
      shared: ["react", "react-dom", "@emotion/react", "@refinedev/core"],
    }),
  ],
  build: {
    target: "esnext",
  },
  preview: {
    port: 4173,
    open: true,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  server: {
    port: 8002,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
