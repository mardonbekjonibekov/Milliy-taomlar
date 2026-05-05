import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import chef from "../../../assets/Images/chef-image.png";
import balgariskiy from "../../../assets/Icons/balgariskiy.svg";
import qalampir from "../../../assets/Icons/qalampir.svg";
import pitsa from "../../../assets/Icons/pitsa.svg";

const CoursesSection = () => {
  const { t } = useTranslation();

  const courses = useMemo(
    () => [
      {
        title: t("courses.card1Title"),
        description: t("courses.card1Desc"),
        icon: "🧁",
      },
      {
        title: t("courses.card2Title"),
        description: t("courses.card2Desc"),
        icon: "🍔",
      },
      {
        title: t("courses.card3Title"),
        description: t("courses.card3Desc"),
        icon: "🍕",
      },
    ],
    [t]
  );

  return (
    <section id="3" className="py-16  px-3 md:px-12 lg:px-24 bg-gray-100 m-8 rounded-3xl ">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FF8A00] mb-4">
            {t("courses.title")}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed">
            {t("courses.subtitle")}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex items-start gap-5 hover:transform hover:scale-[1.02] transition-all duration-300 border border-gray-50"
              >
                <div className="bg-orange-50 p-4 rounded-xl text-3xl">{course.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-[#333] mb-2">{course.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{course.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div id="4" className="w-full lg:w-1/2 relative scroll-mt-24">
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
              <img src={chef} alt="" className="w-full h-125 object-cover" />
            </div>

            <div className="absolute -top-6 -right-6 rounded-full shadow-lg z-20 ">
              <img src={balgariskiy} alt="" />
            </div>
            <div className="absolute top-1/2 -left-8  rounded-2xl shadow-lg z-20 transform -rotate-12">
              <img src={pitsa} alt="" />
            </div>
            <div className="absolute bottom-10 -right-4 rounded-full shadow-lg z-20">
              <img src={qalampir} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
