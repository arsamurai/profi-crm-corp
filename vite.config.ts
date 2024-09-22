import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  server: { host: false, port: 3000 },
  build: {
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "ua/index.html"),
        404: resolve(__dirname, "404.html"),
        privacy: resolve(__dirname, "ua/privacy.html"),
        tarifs: resolve(__dirname, "ua/tarifs.html"),
        contacts: resolve(__dirname, "ua/contacts.html"),
        blog: resolve(__dirname, "ua/blog.html"),
        article: resolve(__dirname, "ua/article.html"),
      },
    },
  },
})
