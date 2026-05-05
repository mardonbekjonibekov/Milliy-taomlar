import { useTranslation } from "react-i18next";
import { NAV_LINKS } from "../../../i18n/navLinks.js";
import "./HeaderNavbar.css";

export default function HeaderNavbar() {
  const { t } = useTranslation();

  return (
    <ul className="container headerNavbar__list hidden xl:flex xl:flex-row xl:items-center xl:w-full xl:justify-around flex-1 text-lg font-medium mt-4">
      {NAV_LINKS.map(({ id, key }) => (
        <li className="headerNavbar__lists" key={id}>
          <a
            className="headerNavbar__links whitespace-nowrap nav-link text-[#393939] hover:text-orange-500 font-bold"
            href={`#${id}`}
          >
            {t(`nav.${key}`)}
          </a>
        </li>
      ))}
    </ul>
  );
}
