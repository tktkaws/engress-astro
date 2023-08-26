import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  build: {
    // 例: ビルドの間に `page/index.html` のかわりに `page.html` を生成します。
    format: "file",
  },
});
