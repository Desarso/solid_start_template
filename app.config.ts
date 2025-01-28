import { defineConfig } from "@solidjs/start/config";
import {VitePWA} from 'vite-plugin-pwa';
import suidPlugin from "@suid/vite-plugin";

export default defineConfig({
  vite: {
    ssr: { external: ["@prisma/client"] },
    plugins: [
      VitePWA({ registerType: 'autoUpdate' }),
      suidPlugin(),
    ]
  },
  middleware: "./src/middleware.ts",
});
