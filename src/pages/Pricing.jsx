import React, { useState, useEffect } from "react";
import { FaPhone, FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope, FaFacebook, FaBuilding, FaFacebookF } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { ShoppingCartIcon, InformationCircleIcon, AcademicCapIcon  } from '@heroicons/react/24/solid';
import { CheckCircle, Laptop, BookOpen, User, Home, Globe, Sofa } from "lucide-react";

const AboutMe = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
   };

  return (
    <div className="font-sans text-gray-900">
       <header
             className="fixed top-0 w-full p-4 z-50 shadow-xl backdrop-blur-md transition-all duration-[700ms]"
             style={{ backgroundColor: `rgba(12, 28, 140)` }}
           >
             {/* Logo */}
             <img
               src="/images/logo.png"
               alt="Logo"
               className="absolute left-6 top-1/2 transform -translate-y-1/2 h-12 w-auto z-50 cursor-pointer"
               onClick={(e) => scrollToSection(e, "#englishdream")}
             />

             {/* Nawigacja */}
             <nav
               className={`md:flex md:justify-center md:space-x-8 text-lg font-semibold text-white ${
                 isOpen
                   ? "block bg-gradient-to-r from-[#0C1C8C] via-[#1A2A6C] to-[#6A0DAD]"
                   : "hidden"
               } md:block absolute md:relative top-full md:top-0 left-0 w-full md:w-auto p-4 md:p-0`}
             >
               {[
                 "English Dream",
                 "O mnie",
                 "Oferta",
                 "Kursy",
                 "Do pobrania",
                 "Opinie",
                 "Cennik",
                 "Kontakt",
               ].map((text, index) => {
                 const links = {
                       "English Dream": "/",
                       "O mnie": "/#o-mnie",
                       "Oferta": "/#oferta",
                       "Kursy": "/#kursy",
                       "Do pobrania": "/#do-pobrania",
                       "Opinie": "/#opinie",
                       "Cennik": "/#cennik",
                       "Kontakt": "/#kontakt",
                     };

                 const href = links[text] || "/";

                 return (
                  <a
                       key={index}
                       href={href}
                       onClick={(e) => {
                         if (!isSubpage) closeMenu(e, text.toLowerCase().replace(/ /g, ""));
                       }}
                       className="block md:inline relative transition duration-300 group py-2 md:py-0"
                  >
                       {text}
                       <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full group-hover:-translate-x-1/2 group-hover:max-w-full"></span>
                 </a>
                 );
               })}
             </nav>

             {/* Mobile: ikony + hamburger */}
             <div className="flex justify-end items-center px-4 md:hidden space-x-3">
               <a
                 href="https://www.tiktok.com/@EnglishDreamXo"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <FaTiktok className="h-4 w-4 text-white hover:text-[#69C9D0] transition-colors cursor-pointer" />
               </a>
               <a
                 href="https://www.instagram.com/EnglishDreamXo"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <FaInstagram className="h-4 w-4 text-white hover:text-pink-400 transition-colors cursor-pointer" />
               </a>
               <a
                 href="https://www.facebook.com/EnglishDreamXo"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <FaFacebookF className="h-4 w-4 text-white hover:text-blue-500 transition-colors cursor-pointer" />
               </a>
               <FiPhone
                 className="h-4 w-4 text-white hover:text-yellow-300 transition-colors cursor-pointer"
                 onClick={() => window.location.href = "tel:+48508552122"}
               />
               <button className="text-white focus:outline-none" onClick={toggleMenu}>
                 {isOpen ? "✖" : "☰"}
               </button>
             </div>

             {/* Desktop: ikony po prawej stronie */}
             <div className="hidden md:flex items-center space-x-4 absolute right-6 top-1/2 transform -translate-y-1/2 z-50">
               <a
                 href="https://www.tiktok.com/@EnglishDreamXo"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <FaTiktok className="h-5 w-5 text-white hover:text-[#69C9D0] transition-colors cursor-pointer" />
               </a>
               <a
                 href="https://www.instagram.com/EnglishDreamXo"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <FaInstagram className="h-5 w-5 text-white hover:text-pink-400 transition-colors cursor-pointer" />
               </a>
               <a
                 href="https://www.facebook.com/EnglishDreamXo"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <FaFacebookF className="h-5 w-5 text-white hover:text-blue-500 transition-colors cursor-pointer" />
               </a>
               <FiPhone
                 className="h-5 w-5 text-white hover:text-yellow-300 transition-colors cursor-pointer"
                 onClick={() => window.location.href = "tel:+48508552122"}
               />
             </div>
           </header>

        <section id="cennik" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#0C1C8C] via-[#1A2A6C] to-[#6A0DAD] text-white text-center px-6 py-12 mt-12">
            <h2 className="text-4xl font-bold mb-6">Cennik lekcji</h2>
            <p className="text-lg mt-4 max-w-2xl">Zapoznaj się z atrakcyjnymi cenami. Oferuję konkurencyjne stawki i elastyczne godziny. Szukasz innej formy zajęć? Skontaktuj się ze mną!</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full max-w-5xl">
              <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl text-center border border-gray-200 transition-all hover:scale-105 hover:shadow-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Nauka Online</h3>
                  <p className="text-4xl font-bold text-blue-600 mt-2">100 zł</p>
                  <p className="text-sm text-gray-600 mt-2">Długość zajęć 50 min</p>

                  <ul className="mt-6 space-y-3 text-left text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      Lekcje 1 na 1
                    </li>
                    <li className="flex items-center gap-2">
                      <Laptop className="w-5 h-5 text-blue-500" />
                      Interaktywne materiały
                    </li>
                    <li className="flex items-center gap-2">
                      <User className="w-5 h-5 text-blue-500" />
                      Indywidualne podejście
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-blue-500" />
                      Nauka bez wychodzenia z domu
                    </li>
                  </ul>
                </div>

                <a href="/#kontakt" className="mt-10 inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">Wybierz</a>
              </div>

              <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl text-center border border-blue-500 transition-all hover:scale-110 hover:shadow-3xl flex flex-col justify-between">
               <div>
                 <h3 className="text-2xl font-bold text-gray-800">Nauka Stacjonarna</h3>
                 <p className="text-4xl font-bold text-blue-600 mt-2">120 zł</p>
                 <p className="text-sm text-gray-600 mt-2">Długość zajęć 50 min</p>

                 <ul className="mt-6 space-y-3 text-left text-gray-700">
                   <li className="flex items-center gap-2">
                     <CheckCircle className="w-5 h-5 text-blue-500" />
                     Lekcje 1 na 1
                   </li>
                   <li className="flex items-center gap-2">
                     <BookOpen className="w-5 h-5 text-blue-500" />
                     Materiały drukowane
                   </li>
                   <li className="flex items-center gap-2">
                     <User className="w-5 h-5 text-blue-500" />
                     Indywidualne podejście
                   </li>
                   <li className="flex items-center gap-2">
                     <Home className="w-5 h-5 text-blue-500" />
                     Komfortowe miejsce nauki
                   </li>
                 </ul>
               </div>

               <a href="/#kontakt" className="mt-10 inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">Wybierz</a>
             </div>

              <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl text-center border border-gray-200 transition-all hover:scale-105 hover:shadow-3xl flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Dojazd do Klienta</h3>
                  <p className="text-4xl font-bold text-blue-600 mt-2">140 zł</p>
                  <p className="text-sm text-gray-600 mt-2">Długość zajęć 50 min</p>

                  <ul className="mt-6 space-y-3 text-left text-gray-700">
                    <li className="flex items-center gap-2">
                      <Home className="w-5 h-5 text-blue-500" />
                      Lekcje w Twoim domu
                    </li>
                    <li className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-blue-500" />
                      Materiały drukowane
                    </li>
                    <li className="flex items-center gap-2">
                      <User className="w-5 h-5 text-blue-500" />
                      Indywidualne podejście
                    </li>
                    <li className="flex items-center gap-2">
                      <Sofa className="w-5 h-5 text-blue-500" />
                      Nauka w zaciszu własnego domu
                    </li>
                  </ul>
                </div>

                <a href="/#kontakt" className="mt-10 inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">Wybierz</a>
              </div>
            </div>
        </section>

      <footer className="text-center p-6 bg-gray-900 text-white">
        <p>&copy; 2025 English Dream - Szkoła Języka Angielskiego. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
};

export default AboutMe;
