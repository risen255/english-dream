import React, { useState, useEffect } from "react";
import { FaPhone, FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope, FaFacebook, FaBuilding } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const Courses = () => {
  const [headline, setHeadline] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

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
                 "Do pobrania",
                 "Współpraca",
                 "Opinie",
                 "Cennik",
                 "Kontakt",
               ].map((text, index) => {
                 const id = text.toLowerCase().replace(/ /g, "");

                  // sprawdzamy, czy to "Kursy" lub "Do pobrania"
                 const specifiedPage = text === "Kursy" ? "/#kursy" : text === "Do pobrania" ? "/#do-pobrania" : "/";

                 return (
                  <a
                      key={index}
                      href={specifiedPage} // jeśli podstrona → /kursy lub /do-pobrania, w innym wypadku #id
                      onClick={(e) => {
                        if (!isSubpage) closeMenu(e, id); // zamykamy menu tylko dla sekcji onepage
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

      <section id="kursy" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-indigo-500 to-[#0C1C8C] text-white text-center px-6 py-12 pt-24">
         <h2 className="text-4xl font-bold mb-6">Kursy</h2>
         <p className="text-lg mt-4 max-w-2xl">🌟 STRONA W BUDOWIE... WORK IN PROGRESS...</p>
         <p className="text-4xl mt-4 max-w-2xl">🌟 Odkryj nasze kursy i naucz się angielskiego szybciej!</p>
         <p className="text-4xl mt-4 max-w-2xl">📘 Zrozumiesz gramatykę i słownictwo w praktyce</p>
         <p className="text-4xl mt-4 max-w-2xl">🚀 Podnieś swoje umiejętności i zacznij mówić pewniej!</p>
         <p className="text-lg mt-4 max-w-3xl">
             🌟 Chcesz swobodnie mówić po angielsku i wreszcie zrozumieć jego tajniki?
             Nasze kursy zostały stworzone z myślą o osobach, które pragną szybciej i skuteczniej przyswajać wiedzę.
             📘 Dzięki praktycznym lekcjom poznasz najważniejsze reguły gramatyki, nauczysz się użytecznych słówek i zwrotów, które od razu zastosujesz w codziennej rozmowie.
             🚀 Każdy kurs to kompleksowy przewodnik, który poprowadzi Cię krok po kroku – od podstaw po zaawansowane struktury językowe.
         </p>

         <p className="text-2xl mt-4 max-w-2xl"><strong>👩‍🎓👨‍🎓 Dla kogo jest kurs?</strong> Dla każdego, kto chce szybko zacząć mówić po angielsku – zarówno początkujących, jak i osób chcących utrwalić swoją wiedzę.</p>
         <p className="text-2xl mt-4 max-w-2xl"><strong>Dlaczego warto?</strong> Bo kurs łączy teorię z praktyką, pozwala uczyć się w dowolnym tempie i daje realne narzędzia do codziennej komunikacji.</p>
         <p className="text-2xl mt-4 max-w-2xl"><strong>⏱ Kiedy widać efekty?</strong> Dzięki regularnej nauce już po kilku tygodniach zauważysz poprawę w rozumieniu i płynności mówienia.</p>
         <p className="text-2xl mt-4 max-w-2xl">Zainwestuj w siebie i rozwijaj swoje umiejętności w przyjazny, interaktywny sposób – nauka angielskiego nigdy nie była tak przyjemna!</p>

        <div className="flex justify-center mt-8 w-full max-w-sm mx-auto">
          <div className="flex flex-col items-center">
            <div className="bg-white text-gray-900 rounded-2xl shadow-2xl text-center overflow-hidden w-96 h-96 p-6 transition-all hover:scale-105 hover:shadow-3xl flex flex-col justify-between">

              {/* Nagłówek kursu */}
              <h3 className="text-2xl font-bold mb-2">Opanuj angielski w 30 dni!</h3>

              {/* Krótki opis */}
              <p className="text-md mb-4">
                Naucz się mówić po angielsku szybciej dzięki naszym praktycznym lekcjom i interaktywnym ćwiczeniom.
              </p>

              {/* Ikony korzyści */}
              <div className="flex justify-around mb-4">
                <span className="flex flex-col items-center">
                  📘
                  <span className="text-sm mt-1">Gramatyka</span>
                </span>
                <span className="flex flex-col items-center">
                  🚀
                  <span className="text-sm mt-1">Szybkie postępy</span>
                </span>
                <span className="flex flex-col items-center">
                  🎤
                  <span className="text-sm mt-1">Praktyka mówienia</span>
                </span>
              </div>

              {/* Przycisk kupna */}
              <a
                href="https://englishdream.systeme.io/presentsimple-a6c63763"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full shadow-lg font-semibold hover:bg-yellow-300 transition duration-300 transform hover:scale-105 hover:translate-y-0.5 flex items-center justify-center gap-2"
              >
                <ShoppingCartIcon className="w-5 h-5" />
                Kup kurs
              </a>

            </div>
          </div>
        </div>
      </section>

      <footer className="text-center p-6 bg-gray-900 text-white">
        <p>&copy; 2025 English Dream - Szkoła Języka Angielskiego. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
};

export default Courses;
