// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "zh-TW",
      },
      title: "Coffee Brand - 精選咖啡豆專賣",
      meta: [
        {
          name: "description",
          content:
            "探索精選單品豆，從產地到烘焙，淬鍊出純粹的原始風味。提供巴西、哥倫比亞、衣索比亞、肯亞等世界各地精選咖啡豆。",
        },
        { property: "og:title", content: "Coffee Brand - 精選咖啡豆專賣" },
        {
          property: "og:description",
          content:
            "探索精選單品豆，從產地到烘焙，淬鍊出純粹的原始風味。",
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "zh_TW" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/coffee-icon.png" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Tinos:wght@400;700&display=swap",
        },
      ],
    },
  },
});
