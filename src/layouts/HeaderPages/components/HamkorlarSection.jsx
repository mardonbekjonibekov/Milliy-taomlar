import React from "react";
import { useTranslation } from "react-i18next";
import MarqueeComponent from "react-fast-marquee";
import Chortoq from "../../../assets/Icons/Chortoq.png";
import Hilton from "../../../assets/Icons/Hilton.png";
import Borjomi from "../../../assets/Icons/Borjomi.png";
import coca_cola from "../../../assets/Icons/coca_cola.png";

export default function HamkorlarSection() {
  const { t } = useTranslation();
  const Marquee = MarqueeComponent.default || MarqueeComponent;

  return (
    <section id="6" className="px-4 md:px-12 lg:px-24 my-4 md:my-16 scroll-mt-24">
      <div className="container mx-auto  border-bottom md:py-8 rounded-[20px] overflow-hidden">
        <div className="text-center mb-12 px-4 border-b-2 border-gray-200 ">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {t("partners.before")}
            <span className="text-orange-400">{t("partners.highlight")}</span>
          </h2>
        </div>

        <Marquee gradient={false} speed={150} pauseOnHover={true}>
          <div className="mx-8 md:mx-16">
            <img className="h-16 md:h-20 w-auto object-contain" src={Chortoq} alt="Chortoq" />
          </div>
          <div className="mx-8 md:mx-16">
            <img className="h-16 md:h-20 w-auto object-contain" src={Hilton} alt="Hilton" />
          </div>
          <div className="mx-8 md:mx-16">
            <img className="h-16 md:h-20 w-auto object-contain" src={Borjomi} alt="Borjomi" />
          </div>
          <div className="mx-8 md:mx-16">
            <img className="h-16 md:h-20 w-auto object-contain" src={coca_cola} alt="Coca Cola" />
          </div>
        </Marquee>
      </div>
    </section>
  );
}
