import { useTranslation } from "react-i18next";
import { NAV_LINKS } from "../../../i18n/navLinks.js";
import "./HeaderHidden.css";
import close__burger from "../../../assets/Icons/close__burger.svg";
import logomb_image from "../../../assets/Icons/logo mb_image.svg";

export default function HeaderHidden({ isOpen, closeBurger }) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="headerHidden headerHidden--overlay w-full fixed top-0 left-0 z-50 bg-white flex flex-col h-dvh max-h-dvh overflow-hidden pt-6 px-6 pb-4">
      <div className="headerHidden__top-box flex flex-row justify-between items-center w-full shrink-0">
        <a className="headerHidden__logo-link" href="/">
          <img className="headerHidden__logo-image" src={logomb_image} alt="Logo" />
        </a>
        <button type="button" onClick={closeBurger} className="headerHidden__close-button p-2">
          <img className="headerHidden__close-button-icon" src={close__burger} alt="" />
        </button>
      </div>
      <div className="headerHidden__scroll">
        <ul className="headerHidden__list text-center">
          {NAV_LINKS.map(({ id, key }) => (
            <li className="headerHidden__lists my-4" key={id}>
              <a
                onClick={closeBurger}
                className="headerHidden__links text-xl font-medium"
                href={`#${id}`}
              >
                {t(`nav.${key}`)}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <a className="headerHidden__tel-link text-lg font-bold shrink-0" href="tel:+998990771717">
        +998 99 077 17 17
      </a>
    </div>
  );
}
