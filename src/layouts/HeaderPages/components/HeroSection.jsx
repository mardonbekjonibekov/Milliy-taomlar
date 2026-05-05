import React from "react";
import { useTranslation } from "react-i18next";
import "./HeaderLayouts.css";
import HeroImage from "../../../assets/Images/baground2.png";
import Herolaptop from "../../../assets/Images/laptop.png";
import Baground3 from "../../../assets/Images/baground3.png";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <section
        id="1"
        className="hidden sm:flex relative flex-col justify-center bg-white px-4 md:px-12 lg:px-24 xl:px-32 lg:pt-10 overflow-hidden pt-0 mt-0"
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 ">
          <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#333] leading-tight">
              {t("hero.d1")}
              <span className="text-[#FF8A00]">{t("hero.d2")}</span>
              {t("hero.d3")}
              <span className="text-[#FF8A00]">{t("hero.d4")}</span>
              {t("hero.d5")}
              <span className="text-[#FF8A00]">{t("hero.d6")}</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-lg mt-6 mb-8 max-w-2xl mx-auto lg:mx-0">
              {t("hero.lead")}
            </p>
            <button
              type="button"
              className="bg-[#FF8A00] text-white px-8 py-3 md:px-10 md:py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300 ] hover:text-red-600"
            >
              {t("hero.cta")}
            </button>
          </div>

          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end items-center mt-2 lg:mt-10">
            <div className="relative w-full max-w-xl lg:max-w-2xl flex items-center justify-center">
              <img
                src={HeroImage}
                alt=""
                className="absolute min-w-full h-auto -top-16 lg:-top-20 object-contain z-0 opacity-100 saturate-150 transform scale-110 lg:scale-125"
              />

              <div className="relative z-10 transform lg:-rotate-2 w-full">
                <img src={Herolaptop} alt="" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="block sm:hidden relative min-h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url(${Baground3})`,
            filter: "brightness(0.6)",
          }}
        />

        <div className="absolute top-0 left-0 w-full rotate-180 z-10">
          <svg viewBox="0 0 1440 320" className="w-full h-auto">
            <path
              fill="#ffffff"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-10">
          <svg viewBox="0 0 1440 320" className="w-full h-auto">
            <path
              fill="#ffffff"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center text-white">
          <h1 className="text-4xl font-extrabold leading-tight">
            {t("hero.m1")}
            <span className="text-[#FF8A00]">{t("hero.m2")}</span>
            {t("hero.m3")}
            <br />
            <span className="text-[#FF8A00]">{t("hero.m4")}</span>
            {t("hero.m5")}
            <br />
            {t("hero.m6")}
            <span className="text-[#FF8A00]">{t("hero.m7")}</span>
          </h1>
          <p className="text-white-600 text-lg md:text-xl mt-6 mb-8 max-w-2xl mx-auto lg:mx-0">
            {t("hero.lead")}
          </p>
          <button
            type="button"
            className="mt-10 bg-[#FF8A00] text-white px-10 py-4 rounded-xl font-bold shadow-lg"
          >
            {t("hero.cta")}
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
