import vueI18n from "@intlify/vite-plugin-vue-i18n";
import vue from "@vitejs/plugin-vue";
import {resolve} from "path";
import {fileURLToPath, URL} from "url";
import {defineConfig} from "vite";
import eslintPlugin from "vite-plugin-eslint";
import Pages from "vite-plugin-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      include: resolve(__dirname, "./src/locales/**"),
      runtimeOnly: false,
    }),
    eslintPlugin(),
    Pages({
      pagesDir: [
        // { dir: "src/pages", baseRoute: "/es" },
        // { dir: "src/pages", baseRoute: "/en" },
        { dir: "src/pages", baseRoute: "/" },
      ],
      extensions: ["vue"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: { port: 8080 },
});
