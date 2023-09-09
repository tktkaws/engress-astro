import { defineConfig } from "astro/config";
import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  // outDir: "./dist",
  // base: "/dist",
  build: {
    format: "file",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // importしたいファイルを記載
          additionalData: `@import "src/styles/_mixin.scss";`,
        },
      },
    },
  },
  integrations: [relativeLinks()],
});
