import { useTranslation } from "react-i18next";
import "./AdressSection.css";
import beshqozon from "../../../assets/Images/beshqozon.png";

export default function AdressSection() {
  const { t } = useTranslation();

  return (
    <section
      id="8"
      className="pb-3 px-4 md:px-12 lg:px-24  md:m-8 rounded-[40px] bg-white scroll-mt-24"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold  mb-4">
            <span className="text-[#FF8A00]">{t("address.titleOrange")}</span>
            {t("address.titleRest")}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            {t("address.subtitle")}
          </p>
        </div>

        <div className="address-container">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <img
              className="hidden sm:block w-145 h-150 "
              src={beshqozon}
              alt={t("address.imgAlt")}
            />
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="map-wrapper">
              <iframe
                title="Map"
                src="https://yandex.com/map-widget/v1/?um=constructor%3A8b11b860bb59ae658baa15f9dc5500b72ecc6ee75f05d818d0fb6c300af4989a&amp;source=constructor"
                width="100%"
                height="600"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
