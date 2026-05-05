import React, { useState } from 'react';
import Zarifa_B from "../../../assets/Images/Zarifa_B.png"
import Shaxobbid_A from "../../../assets/Images/Shaxobbid_A.png"
import Kamol_B from "../../../assets/Images/Kamol_B.png"
import Sabina_J from "../../../assets/Images/Sabina_J.png"
import Oybek_K from "../../../assets/Images/Oybek_K.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Swiper stillari
import 'swiper/css';
import 'swiper/css/pagination';

const chefs = [
    { id: 1, name: "Zarifa_B ", role: "Muhandis", img: Zarifa_B, bio: "20 yillik tajribaga ega usta oshpaz." },
    { id: 2, name: "Shaxobbid_A", role: "Oshpaz", img: Shaxobbid_A, bio: "Yevropa taomlari bo'yicha mutaxassis." },
    { id: 3, name: "Kamol_B", role: "Kanditer", img: Kamol_B, bio: "Shirinliklar va desertlar ustasi." },
    { id: 4, name: "Sabina_J", role: "Milliy taomlar", img: Sabina_J, bio: "O'zbek milliy taomlarining haqiqiy bilimdoni." },
    { id: 5, name: "Oybek_K", role: "Povar", img: Oybek_K, bio: "Zamonaviy food-art ustasi." },
    { id: 1, name: "Zarifa_B ", role: "Bosh oshpaz", img: Zarifa_B, bio: "20 yillik tajribaga ega usta oshpaz." },
    { id: 2, name: "Shaxobbid_A", role: "Oshpaz", img: Shaxobbid_A, bio: "Yevropa taomlari bo'yicha mutaxassis." },
    { id: 3, name: "Kamol_B", role: "Kanditer", img: Kamol_B, bio: "Shirinliklar va desertlar ustasi." },
    { id: 4, name: "Sabina_J", role: "Milliy taomlar", img: Sabina_J, bio: "O'zbek milliy taomlarining haqiqiy bilimdoni." },
    { id: 5, name: "Oybek_K", role: "Povar", img: Oybek_K, bio: "Zamonaviy food-art ustasi." },
    { id: 1, name: "Zarifa_B ", role: "Bosh oshpaz", img: Zarifa_B, bio: "20 yillik tajribaga ega usta oshpaz." },
    { id: 2, name: "Shaxobbid_A", role: "Oshpaz", img: Shaxobbid_A, bio: "Yevropa taomlari bo'yicha mutaxassis." },
    { id: 3, name: "Kamol_B", role: "Kanditer", img: Kamol_B, bio: "Shirinliklar va desertlar ustasi." },
    { id: 4, name: "Sabina_J", role: "Milliy taomlar", img: Sabina_J, bio: "O'zbek milliy taomlarining haqiqiy bilimdoni." },
    { id: 5, name: "Oybek_K", role: "Povar", img: Oybek_K, bio: "Zamonaviy food-art ustasi." },
    
];


export default function ChefCarousel() {
    const [selectedChef, setSelectedChef] = useState(null);

    return (
        <div className="w-full max-w-7xl mx-auto py-10 px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold  mb-4">
                   Bizning <span className="text-[#FF8A00]">Raxbarlarimiz</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-xl md:text-xl leading-relaxed">
                    Bizning rahbariyatimiz – tashkilotimizning muvaffaqiyatiga yo'l ko'rsatuvchi, ilhomlantiruvchi va mas'uliyatli yetakchilardir. Ular o'zlarining uzoq yillik tajribasi, donoligi va yuqori professionalligi bilan jamiyatni to'g'ri yo'nalishda boshqarib kelmoqdalar.</p>
            </div>
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                    1280: { slidesPerView: 5 },
                }}
                className="mySwiper pb-12!" // Pagination uchun pastdan joy
            >
                {chefs.map((chef) => (
                    <SwiperSlide key={chef.id}>
                        <div
                            onClick={() => setSelectedChef(chef)}
                            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                        >
                            {/* Rasm qismi - aspect-ratio Tailwind-da bracket ichida yoziladi */}
                            <div className="aspect-3/4  bg-gray-200">
                                <img
                                    src={chef.img}
                                    className="w-full h-full object-cover"
                                    alt={chef.name}
                                />
                            </div>
                            <div className="p-4 text-center border-t bg-white">
                                <h4 className="font-bold text-gray-800 text-lg">{chef.name}</h4>
                                <p className="text-orange-500 font-medium text-sm">{chef.role}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* MODAL QISMI */}
            {selectedChef && (
                <div
                    className="fixed inset-0 z-999 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300"
                    onClick={() => setSelectedChef(null)}
                >
                    <div
                        className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full relative animate-in zoom-in duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10"
                            onClick={() => setSelectedChef(null)}
                        >
                            ✕
                        </button>

                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2 aspect-3/4">
                                <img src={selectedChef.img} className="w-full h-full object-cover" alt={selectedChef.name} />
                            </div>
                            <div className="p-8 md:w-1/2 flex flex-col justify-center">
                                <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">{selectedChef.role}</span>
                                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">{selectedChef.name}</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {selectedChef.bio} Shuningdek, bu oshpazimiz "Oshpaz.uz" jamoasining eng faxriy a'zolaridan biri hisoblanadi.
                                </p>
                                <button
                                    className="mt-8 py-3 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-orange-200"
                                    onClick={() => setSelectedChef(null)}
                                >
                                    Bog'lanish
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}