import { useTranslation } from "react-i18next";
import logomb from "../../assets/Icons/logo mb_image.svg";

export default function FooterPages() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#393939] text-white mt-8 md:mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <img src={logomb} alt="logomb" className="h-auto w-auto" />
          </div>

          <div className="hidden lg:flex flex-col space-y-2">
            <a href="#1" className="hover:text-orange-400">
              {t("footer.home")}
            </a>
            <a href="#5" className="hover:text-orange-400">
              {t("footer.about")}
            </a>
            <a href="#3" className="hover:text-orange-400">
              {t("footer.courses")}
            </a>
            <a href="#4" className="hover:text-orange-400">
              {t("footer.chefs")}
            </a>
            <a href="#5" className="hover:text-orange-400">
              {t("footer.history")}
            </a>
            <a href="#6" className="hover:text-orange-400">
              {t("footer.honorary")}
            </a>
            <a href="#7" className="hover:text-orange-400">
              {t("footer.leaders")}
            </a>
            <a href="#8" className="hover:text-orange-400">
              {t("footer.address")}
            </a>
          </div>

          <div className="flex flex-col space-y-3">
            <a href="" className="text-orange-400 font-bold uppercase tracking-wider">
              {t("footer.phoneLabel")}
            </a>
            <p>+99871 266 78 00</p>
            <p>+99871 266 77 78</p>
            <p>{t("footer.fax")}</p>

            <h2 className="text-amber-600 font-bold uppercase tracking-wider pt-4">
              {t("footer.hoursTitle")}
            </h2>
            <p className="text-sm leading-relaxed">
              {t("footer.hoursLine1")} <br />
              {t("footer.hoursLine2")} <br />
              {t("footer.hoursLine3")}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <p className="text-[#e57f25] text-xl font-medium mb-4">{t("footer.contactTitle")}</p>
            <p className="text-lg leading-relaxed mb-6">
              {t("footer.addressLine1")}
              <br />
              {t("footer.addressLine2")}
            </p>

            <div className="flex gap-4">
              <a href="#" className="hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill="#d66800"
                    d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm-4 5a4 4 0 0 0-3.995 3.8L8 12a4 4 0 1 0 4-4m4.5-1.5a1 1 0 0 0-.993.883l-.007.127a1 1 0 0 0 1.993.117L17.5 7.5a1 1 0 0 0-1-1"
                  />
                </svg>
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill="#d66800"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38"
                  />
                </svg>
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill="#d66800"
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                  />
                </svg>
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill="#d66800"
                    d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
