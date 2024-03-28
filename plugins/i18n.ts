import {createI18n} from "vue-i18n";

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "zh-CN",
  fallbackLocale: "en",
  missingWarn: false,
  fallbackWarn: false,
  silentFallbackWarn: true,
  silentTranslationWarn: true,
  messages: {
    en: {
      en: "English",
      "zh-CN": "简体中文",
    },
    "zh-CN": {
      en: "English",
      "zh-CN": "简体中文",
    },
  },
});
export default defineNuxtPlugin(({vueApp}) => {
  vueApp.use(i18n);
});
export {i18n};
