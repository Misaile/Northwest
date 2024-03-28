import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import {createVuetify} from "vuetify";
import {aliases, mdi} from "vuetify/iconsets/mdi";
import {AMETHYST_LIGHT, AMETHYST_DARK, AMETHYST_VIOLET} from "~/scripts/themes";
export const vuetify = createVuetify({
  ssr: false,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    themes: {
      light: AMETHYST_LIGHT,
      dark: AMETHYST_DARK,
      violet: AMETHYST_VIOLET,
    },
  },
});
export default defineNuxtPlugin(app => {
  app.vueApp.use(vuetify);
});
