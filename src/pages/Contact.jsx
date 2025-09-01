import React, { useState, useEffect } from "react";
import { FaPhone, FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope, FaFacebook, FaBuilding } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { ShoppingCartIcon, InformationCircleIcon, AcademicCapIcon  } from '@heroicons/react/24/solid';

const Contact = () => {
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

        <section id="kontakt" className="min-h-[120vh] flex flex-col justify-center items-center bg-gradient-to-r from-gray-200 via-gray-50 to-white px-6 py-12 text-center animate-fadeIn mt-12">
          <h3 className="text-4xl font-extrabold text-gray-900 mb-8">Skontaktuj się ze mną</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">

            <div className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
              <FaPhone className="text-blue-500 text-3xl" />
              <a href="tel:+48508552122" className="text-lg text-gray-800 font-medium hover:text-blue-600">+48 508 552 122</a>
            </div>

            <div className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
              <FaEnvelope className="text-red-500 text-3xl" />
              <a href="mailto:contact@englishdream.pl" className="text-base text-gray-800 font-medium hover:text-red-600">contact@englishdream.pl</a>
            </div>

            <div className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
              <FaWhatsapp className="text-green-500 text-3xl" />
              <a href="https://wa.me/48508552122" className="text-lg text-gray-800 font-medium hover:text-green-600">+48 508 552 122</a>
            </div>

            <div className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
              <FaInstagram className="text-pink-500 text-3xl" />
              <a href="https://www.instagram.com/EnglishDreamXo" className="text-lg text-gray-800 font-medium hover:text-pink-600">@EnglishDreamXo</a>
            </div>

            <div className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
              <FaFacebook className="text-blue-700 text-3xl" />
              <a href="https://www.facebook.com/EnglishDreamXo" className="text-lg text-gray-800 font-medium hover:text-blue-700">@EnglishDreamXo</a>
            </div>

            <div className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
              <FaTiktok className="text-black text-3xl" />
              <a href="https://www.tiktok.com/@EnglishDreamXo" className="text-lg text-gray-800 font-medium hover:text-black">@EnglishDreamXo</a>
            </div>
          </div>

          {/* Informacje o firmie */}
          <div className="mt-10 w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl text-left flex flex-col items-start gap-4 transition-transform duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <FaBuilding className="text-gray-700 text-3xl" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Dane firmy</h4>
                </div>

                <div className="w-full border-t border-gray-200 my-2" />

                <div className="space-y-2 text-gray-800 text-[17px]">
                  <p><span className="font-semibold">Nazwa:</span> EnglishDream Ewa Łomotowska Korepetycje</p>
                  <p><span className="font-semibold">Lokalizacja:</span> Białystok, Polska</p>
                  <p><span className="font-semibold">NIP:</span> 5423494058</p>
                  <p><span className="font-semibold">REGON:</span> 540475015</p>
                </div>
              </div>
        </section>

      <footer className="text-center p-6 bg-gray-900 text-white">
        <p>&copy; 2025 English Dream - Szkoła Języka Angielskiego. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
};

export default Contact;
