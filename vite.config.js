import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        fullPageScroll: resolve(__dirname, "src/pages/full-page-scroll.html"),
      },
    },
    outDir: "../build",
  },
});
