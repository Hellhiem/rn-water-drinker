import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import { Languages } from "types/Defaults";
import en from "./en.json";

i18n.use(initReactI18next).init({
  fallbackLng: Languages.en,
  interpolation: {
    escapeValue: false
  },
  lng: Languages.en,
  resources: {
    [Languages.en]: {
      translation: en
    }
  }
});
