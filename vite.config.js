import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  const config = {
    base: "/ToDoDay/",
    plugins: [
      vue(),
      VitePWA({ registerType: "autoUpdate", devOptions: { enabled: false } }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
  if (command === "serve") {
    config.base = "/";
    return config;
  } else {
    // command === 'build'
    return config;
  }
});
