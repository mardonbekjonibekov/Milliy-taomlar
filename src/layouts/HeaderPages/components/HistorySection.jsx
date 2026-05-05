import { useTranslation } from "react-i18next";
import tarix1 from "../../../assets/Images/tarix-1.png";
import tarix2 from "../../../assets/Images/tarix2.png";

export default function HistorySection() {
  const { t } = useTranslation();

  return (
    <section id="5" className=" px-4 md:px-12 lg:px-24  md:m-8 rounded-[40px] scroll-mt-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FF8A00] mb-4">
            {t("history.title")}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            {t("history.intro")}
          </p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mb-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-[rgb(57,57,57)] text-3xl md:text-4xl font-bold mb-6">
              {t("history.block1Title")}
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
              {t("history.block1Text")}
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="rounded-[40px] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <img
                src={tarix1}
                alt={t("history.imgAlt")}
                className="w-full h-80 md:h-100 object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          <div className="w-full lg:w-1/2">
            <div className="rounded-[40px] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <img
                src={tarix2}
                alt={t("history.imgAlt")}
                className="w-full h-100 object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-[rgb(57,57,57)] text-3xl md:text-4xl font-bold mb-6">
              {t("history.block2Title")}
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
              {t("history.block2Text")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
