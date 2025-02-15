import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "./", // Asegura rutas relativas
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://815f-186-155-15-36.ngrok-free.app", // Usa la URL del backend en ngrok
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
