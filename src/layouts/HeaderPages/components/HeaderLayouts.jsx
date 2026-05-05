import React, { useState } from 'react';
import "./HeaderLayouts.css";
import HeaderLogo from "../components/HeaderLogo";
import HeaderNavbar from "../components/HeaderNavbar";
import HeaderLanguage from "../components/HeaderLanguage";
import HeaderHidden from "./HeaderHidden";
import HeroSection from './HeroSection';
import FoodSection from './FoodSection';
import CoursesSection from "./CoursesSection";
import Carusel from "./CaruselSection";
import HistorySection from "./HistorySection";
import Carusel2 from "./Carusel2Section";
import Carusel3 from "./Carusel3Section";
import AdressSection from './AdressSection';  
import TashkilotchiSection from './TashkilotchiSection';
import  HamkorlarSection from "./HamkorlarSection";
import FooterPages from "../../FooterPages/FooterPages"
export default function HeaderLayouts() {
  const [menuburger, setMenuburger] = useState(false);

  // Menyuni ochish funksiyasi
  function openBurger() {
    setMenuburger(true);
    document.body.style.overflow = "hidden";
  }

  // Menyuni yopish funksiyasi
  function closeBurger() {
    setMenuburger(false);
    document.body.style.overflow = "auto";
  }

  return (
    <>
      <header className="header bg-white w-full sticky top-0 z-50  shadow-sm">
        <div className="container mx-auto flex flex-row justify-between items-center px-6  md:px-12 xl:px-15">
          <HeaderLogo />
          <div className="hidden lg:flex items-center justify-center flex-1">
            <HeaderNavbar />
          </div>
          <HeaderLanguage openBurger={openBurger} />
        </div>
        
        
        <HeaderHidden isOpen={menuburger} closeBurger={closeBurger} />
        

      </header>
      <HeroSection />
      <FoodSection />
      <CoursesSection />
      <Carusel />
      <HistorySection />
      <Carusel2 />
      <Carusel3 />
      <AdressSection />
      <TashkilotchiSection />
      <HamkorlarSection />
      <FooterPages />

    </>
  );
}

