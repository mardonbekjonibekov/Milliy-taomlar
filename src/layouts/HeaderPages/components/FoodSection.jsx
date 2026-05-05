import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./FoodSection.css";

import Food1 from "../../../assets/Images/Laksa.png";
import Food2 from "../../../assets/Images/lasagna.png";
import Food3 from "../../../assets/Images/pasta.png";
import Food4 from "../../../assets/Images/porcupine.png";
import Food5 from "../../../assets/Images/shorva.png";

export default function FoodSection() {
  const { t } = useTranslation();
  const [selectedFood, setSelectedFood] = useState(null);

  const data = useMemo(
    () => [
      { img: Food1, title: t("food.dish1") },
      { img: Food2, title: t("food.dish2") },
      { img: Food3, title: t("food.dish3") },
      { img: Food4, title: t("food.dish4") },
      { img: Food5, title: t("food.dish5") },
    ],
    [t]
  );

  const tripleData = useMemo(() => [...data, ...data, ...data], [data]);

  return (
    <section id="2" className="food py-16 overflow-hidden bg-white">
      <div className="container mx-auto px-4 mb-10 text-center border-none">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          {t("food.headingBefore")}
          <span className="text-orange-500">{t("food.headingHighlight")}</span>
          {t("food.headingAfter")}
        </h2>
      </div>

      <div className="food_box">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1.5}
          loop={true}
          speed={6000}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4.5 },
          }}
          className="food-swiper"
        >
          {tripleData.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="cursor-pointer overflow-hidden rounded-4xl shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedFood(item)}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedFood && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-9999 flex items-center justify-center p-4"
          onClick={() => setSelectedFood(null)}
        >
          <div
            className="bg-white rounded-[2.5rem] overflow-hidden max-w-lg w-full shadow-2xl animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedFood.img}
              alt={selectedFood.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-8 text-center">
              <h3 className="text-3xl font-bold text-gray-800 mb-3 uppercase tracking-wider">
                {selectedFood.title}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedFood(null)}
                className="bg-orange-500 text-white px-12 py-1.5 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg"
              >
                {t("food.close")}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
