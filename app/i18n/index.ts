import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import mr from "./locales/mr.json";
import en from "./locales/en.json";
import hi from "./locales/hi.json";

const savedLanguage = localStorage.getItem("language") || "mr";

i18n.use(initReactI18next).init({
  resources: {
    mr: { translation: mr },
    en: { translation: en },
    hi: { translation: hi },
  },

  lng: savedLanguage,
  fallbackLng: "mr",

  interpolation: {
    escapeValue: false,
  },

  react: {
    useSuspense: false,
  },
});

export default i18n;