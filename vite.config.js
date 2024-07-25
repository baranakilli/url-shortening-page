import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate", // Kullanıcı müdahalesi olmadan güncellemeleri otomatik uygular
      devOptions: {
        enabled: true,
      },
      workbox: {
        skipWaiting: true, // Yeni servis çalışanı hemen etkinleşir
        clientsClaim: true, // Yeni servis çalışanı hemen kontrolü devralır
      },
    }),
  ],
});
