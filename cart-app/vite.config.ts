import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "cartApp",
      filename: "remoteEntry.js",
      exposes: {
        "./cart": "./src/pages/cart/index.ts",
      },
      shared: ["react", "react-dom", "@emotion/react", "@refinedev/core"],
    }),
  ],
  server: {
    port: 8003,
  },
  preview: {
    port: 4174,
  },
  build: {
    target: "esnext",
  },
});
