import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app-shell",
      remotes: {
        productApp: "http://localhost:4173/assets/remoteEntry.js",
        cartApp: "http://localhost:4174/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 8001,
  },
  preview: {
    host: "localhost",
    port: 8001,
  },
  build: {
    target: "esnext",
  },
});
