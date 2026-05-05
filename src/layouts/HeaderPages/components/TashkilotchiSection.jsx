import { useTranslation } from "react-i18next";
import rasm1 from "../../../assets/Images/rasm1.png";
import rasm2 from "../../../assets/Images/rasm2.png";
import rasm3 from "../../../assets/Images/rasm3.png";

export default function TashkilotchiSection() {
  const { t } = useTranslation();

  return (
    <section id="7" className="px-4 md:px-12 lg:px-24 my-8 md:my-16 scroll-mt-24">
      <div className="container mx-auto bg-gray-50 p-8 md:p-12 rounded-[40px]">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">{t("organizers.title")}</h2>

          <div className="flex flex-wrap justify-center items-center gap-15 md:gap-16 lg:gap-24">
            <div className="flex justify-center">
              <img
                className="w-30 h-auto md:w-37.5 object-contain"
                src={rasm1}
                alt={`${t("organizers.imgAlt")} 1`}
              />
            </div>
            <div className="flex justify-center">
              <img
                className="w-45 h-auto md:w-53 object-contain"
                src={rasm2}
                alt={`${t("organizers.imgAlt")} 2`}
              />
            </div>
            <div className="flex justify-center">
              <img
                className="w-45 h-auto md:w-53 object-contain"
                src={rasm3}
                alt={`${t("organizers.imgAlt")} 3`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
