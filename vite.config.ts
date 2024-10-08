import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  server: { host: false, port: 3000 },
  build: {
    assetsDir: "assets",
    rollupOptions: {
      input: {
        404: resolve(__dirname, "404.html"),
        // UA
        UA_main: resolve(__dirname, "ua/index.html"),
        UA_terms: resolve(__dirname, "ua/terms.html"),
        UA_tarifs: resolve(__dirname, "ua/tarifs.html"),
        UA_contacts: resolve(__dirname, "ua/contacts.html"),
        UA_blog: resolve(__dirname, "ua/blog.html"),
        UA_article: resolve(__dirname, "ua/article.html"),
        UA_signUp: resolve(__dirname, "ua/sign-up.html"),
        // RU
        RU_main: resolve(__dirname, "ru/index.html"),
        RU_terms: resolve(__dirname, "ru/terms.html"),
        RU_tarifs: resolve(__dirname, "ru/tarifs.html"),
        RU_contacts: resolve(__dirname, "ru/contacts.html"),
        RU_blog: resolve(__dirname, "ru/blog.html"),
        RU_article: resolve(__dirname, "ru/article.html"),
        RU_signUp: resolve(__dirname, "ru/sign-up.html"),
      },
    },
  },
})
