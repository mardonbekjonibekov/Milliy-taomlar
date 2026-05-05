import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./HeaderLanguage.css";
import globus__icon from "../../../assets/Icons/globus__icon.svg";
import open__burger from "../../../assets/Icons/open_burger.svg";

const LANGUAGES = [
  { code: "uz", labelKey: "lang.uz" },
  { code: "en", labelKey: "lang.en" },
  { code: "ru", labelKey: "lang.ru" },
];

export default function HeaderLanguage({ openBurger }) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  function selectLang(code) {
    void i18n.changeLanguage(code);
    setOpen(false);
  }

  return (
    <div className="flex flex-row justify-center items-center gap-4 font-inter">
      <a
        className="hidden md:block text-orange-500 fontn-inter"
        href="tel:+998990771717"
      >
        +998 99 077 17 17
      </a>

      <div className="relative" ref={wrapRef}>
        <button
          type="button"
          className="headerLanguage__globe rounded-lg p-1 hover:bg-black/5 transition-colors"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-label={t("lang.label")}
          onClick={() => setOpen((v) => !v)}
        >
          <img
            className="w-6 h-6 md:w-8 md:h-8 invert pointer-events-none"
            src={globus__icon}
            alt=""
          />
        </button>

        {open && (
          <ul
            className="headerLanguage__dropdown absolute right-0 top-full mt-2 min-w-44 rounded-xl border border-gray-200 bg-white py-1 shadow-lg z-60"
            role="listbox"
          >
            {LANGUAGES.map(({ code, labelKey }) => (
              <li key={code} role="option" aria-selected={i18n.language === code}>
                <button
                  type="button"
                  className={
                    "headerLanguage__option w-full px-4 py-2.5 text-left text-sm font-medium transition-colors " +
                    (i18n.language === code
                      ? "bg-orange-50 text-orange-600"
                      : "text-gray-800 hover:bg-gray-50")
                  }
                  onClick={() => selectLang(code)}
                >
                  {t(labelKey)}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button type="button" onClick={openBurger} className="xl:hidden">
        <img
          className="w-8.75 h-7.5 invert"
          src={open__burger}
          alt=""
        />
      </button>
    </div>
  );
}
