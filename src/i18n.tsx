import i18next from "i18next";
// import I18NextHttpBackend from "i18next-http-backend";
// import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
import es from "./locales/es";
import en from "./locales/en";

i18next.use(initReactI18next).init({
    lng: 'es',
    fallbackLng: 'en',
    debug: true,
    detection: {
        order: ['queryString', 'cookie'],
        cache: ['cookie']
    },
    resources: {
        es,
        en
    },
    interpolation: {
        escapeValue: false
    }
})
