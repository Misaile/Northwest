// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, {transformAssetUrls} from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: {enabled: false},
  devServer: {
    port: 4000,
  },
  ssr: false,
  app: {
    rootId: "Amethyst",
    buildAssetsDir: "/static/",
    baseURL: "/",
    head: {
      title: "Amethyst",
      meta: [
        {
          name: "theme",
          content: "Amethyst <amethyst.synaiv.com>",
        },
        {
          name: "theme-uri",
          content: "https://amethyst.synaiv.com/",
        },
        {
          name: "theme-author",
          content: "Molecule <mol@synaiv.com>",
        },
      ],
    },
  },

  runtimeConfig: {
    wp_user: "http://localhost:8888/wp-admin",
    wp_graphql: "http://localhost:8888/index.php?graphql",
  },

  features: {
    inlineStyles: false,
  },

  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", config => {
        //@ts-ignore
        config.plugins.push(vuetify());
      });
    },
    "@pinia/nuxt",
  ],
  pinia: {
    storesDirs: ["./variables/**"],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
