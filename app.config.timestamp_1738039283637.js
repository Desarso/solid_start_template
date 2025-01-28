// app.config.ts
import { defineConfig } from "@solidjs/start/config";
var app_config_default = defineConfig({
  vite: {
    ssr: { external: ["@prisma/client"] },
    plugins: [
      VitePWA({ registerType: "autoUpdate" })
    ]
  },
  middleware: "./src/middleware.ts"
});
export {
  app_config_default as default
};
