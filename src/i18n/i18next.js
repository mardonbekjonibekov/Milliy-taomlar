import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uz from "./locales/uz.json";
import en from "./locales/en.json";
import ru from "./locales/ru.json";

const STORAGE_KEY = "app_lang";

function getInitialLng() {
  if (typeof window === "undefined") return "uz";
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && ["uz", "en", "ru"].includes(saved)) return saved;
  return "uz";
}

const initialLng = getInitialLng();
if (typeof document !== "undefined") {
  document.documentElement.lang = initialLng;
}

i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: uz },
    en: { translation: en },
    ru: { translation: ru },
  },
  lng: initialLng,
  fallbackLng: "uz",
  supportedLngs: ["uz", "en", "ru"],
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng;
  }
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(STORAGE_KEY, lng);
  }
});

export default i18n;
