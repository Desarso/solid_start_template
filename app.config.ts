import { defineConfig } from "@solidjs/start/config";
import {VitePWA} from 'vite-plugin-pwa';

export default defineConfig({
  vite: {
    ssr: { external: ["@prisma/client"] },
    plugins: [
      VitePWA({ registerType: 'autoUpdate' }),
    ]
  },
  middleware: "./src/middleware.ts",
});
