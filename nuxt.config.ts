export default defineNuxtConfig({
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/content",
    "@nuxt/image-edge",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "nuxt-simple-sitemap",
    '@unocss/nuxt',
  ],
  colorMode: {
    classSuffix: "",
    preference: "dark",
  },
  app: {
    head: {
      meta: [
        { name: "format-detection", content: "telephone=no" },
        // Twitter
        { name: "twitter:site", content: "@spain-cars1" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        {
          rel: "mask-icon",
          href: "/images/favicon/favicon.ico",
          color: "#FDFDFD",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/images/favicon/favicon.ico",
          sizes: "any",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/images/favicon/favicon.ico",
          sizes: "32x32",
          media: "(prefers-color-scheme:light)",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/images/favicon/favicon.ico",
          sizes: "32x32",
          media: "(prefers-color-scheme:dark)",
        },
      ],
    },
  },
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "en",
    langDir: "locales",
    baseUrl: "https://spain-cars.com",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "spain-cars-i18n-v5",
      redirectOn: "root",
      alwaysRedirect: true,
    },
    vueI18n: {
      legacy: false,
      fallbackLocale: ["en", "ko", "zh"],
    },
    locales: [
      {
        code: "en",
        iso: "en",
        name: "English",
        file: "en.json",
      }
   
    ],
  },
  runtimeConfig: {
    public: {
      siteUrl: "https://spain-cars.com" || process.env.NUXT_PUBLIC_SITE_URL,
    },
  },
  // routeRules: {
  //   "/ko/blog": { sitemap: { changefreq: "weekly" } },
  //   "/zh/blog": { sitemap: { changefreq: "weekly" } },
  //   "/blog": { sitemap: { changefreq: "weekly" } },
  // },
  // nitro: {
  //   prerender: {
  //     crawlLinks: true,
  //     routes: ["/"],
  //   },
  // },
});
