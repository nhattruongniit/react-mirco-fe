import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "PRODUCT",
      filename: "remoteEntry.js",
      exposes: {
        "./product": "./src/pages/product.jsx",
      },
      shared: ["react"],
    }),
  ],
  server: {
    port: 8002,
  },
});
