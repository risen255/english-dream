import React, { useState, useEffect } from "react";
import { FaPhone, FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope, FaFacebook, FaBuilding } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { ShoppingCartIcon, InformationCircleIcon, AcademicCapIcon  } from '@heroicons/react/24/solid';

const Offer = () => {
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

         <section id="oferta" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white text-center px-6 py-12">
            <h2 className="text-4xl font-bold mb-6 pt-12">Dlaczego warto uczyć się ze mną?</h2>
            <div className="flex flex-col space-y-6 max-w-3xl w-full items-center">
              <div className="w-full bg-white text-gray-900 p-6 rounded-xl shadow-lg text-center transition-all hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold text-indigo-700">📝 Indywidualne podejście</h3>
                <p className="text-gray-700 mt-2">Nauka z uwzględnieniem indywidualnych potrzeb i stylu uczenia się.</p>
              </div>
              <div className="w-full bg-white text-gray-900 p-6 rounded-xl shadow-lg text-center transition-all hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold text-indigo-700">📈 Szybkie efekty</h3>
                <p className="text-gray-700 mt-2">Dzięki sprawdzonym metodom nauki osiągniesz szybkie postępy w płynności językowej i zrozumieniu angielskiego.</p>
              </div>
              <div className="w-full bg-white text-gray-900 p-6 rounded-xl shadow-lg text-center transition-all hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold text-indigo-700">🎓 Przygotowanie do egzaminów</h3>
                <p className="text-gray-700 mt-2">Wspieram uczniów w zrozumieniu materiału szkolnego i przygotowaniu do egzaminu ósmoklasisty i matury.</p>
              </div>
              <div className="w-full bg-white text-gray-900 p-6 rounded-xl shadow-lg text-center transition-all hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold text-indigo-700">💡 Ciekawe lekcje</h3>
                <p className="text-gray-700 mt-2">Nowoczesne techniki, gry edukacyjne i scenariusze sytuacyjne, aby nauka była angażująca i skuteczna.</p>
              </div>
              <div className="w-full bg-white text-gray-900 p-6 rounded-xl shadow-lg text-center transition-all hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold text-indigo-700">🗣️ Nacisk na mówienie</h3>
                <p className="text-gray-700 mt-2">Przełamuje bariery językowe i zapewniam pełne wsparcie w nauce.</p>
              </div>
              <div className="w-full bg-white text-gray-900 p-6 rounded-xl shadow-lg text-center transition-all hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold text-indigo-700">🌍 Angielski w realnym świecie</h3>
                <p className="text-gray-700 mt-2">Uczę praktycznych umiejętności językowych przydatnych w codziennym życiu.</p>
              </div>
              <a href="/#kontakt" className="mt-6 bg-yellow-400 text-gray-900 px-8 py-4 rounded-full shadow-lg font-semibold hover:bg-yellow-300 transition duration-300 transform hover:scale-105 hover:translate-y-0.5">Chcę uczyć się już od zaraz!</a>
            </div>
          </section>

      <footer className="text-center p-6 bg-gray-900 text-white">
        <p>&copy; 2025 English Dream - Szkoła Języka Angielskiego. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
};

export default Offer;
