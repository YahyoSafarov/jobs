// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "Euro Job",
      meta: [{ name: "description", content: "Everything about Nuxt 3" }],
      link: [{ rel: "stylesheet", href: "./assets/image/zix logo.svg" }],
    },
  },
});
