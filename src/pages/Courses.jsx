import React, { useState, useEffect } from "react";
import { FaPhone, FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope, FaFacebook, FaBuilding } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { ShoppingCartIcon, InformationCircleIcon, AcademicCapIcon  } from '@heroicons/react/24/solid';

const Courses = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
   };

  const scrollToSection = (event, id) => {
     event.preventDefault();
     const section = document.querySelector(id);
     if (section) {
       window.scrollTo({
         top: section.offsetTop - 50,
         behavior: "smooth"
       });
     }
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

         <section
           id="kursy-landing-page"
           className="min-h-screen flex flex-col justify-start items-center bg-gradient-to-r from-blue-500 via-indigo-500 to-[#0C1C8C] text-white text-center px-6 py-12 pt-16"
         >
           <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto gap-4 lg:gap-8">
             {/* Obrazek */}
             <img
               src="/images/courses/present-simple-3-in-1.png"
               className="w-160 h-auto"
             />

             {/* Tekst po prawej stronie */}
             <div className="text-left -mt-6 lg:-mt-8 flex flex-col">
               <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-wide text-center lg:text-left">
                 Zacznij swobodnie mówić po angielsku
               </h2>

               <div className="space-y-4 text-lg lg:text-xl">
                 <p className="leading-relaxed">
                   Ty wybierasz formę nauki 1:1, w parach, lub w grupie. My układamy plan, który działa.
                   Zaczynasz mówić po angielsku naturalnie, od pierwszej lekcji.
                 </p>
               </div>
             </div>
           </div>
          <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto gap-4 lg:gap-8 mt-16 lg:mt-0">
             <a
                href="/"
                className="bg-yellow-400 text-gray-900 w-58 py-3 px-6 rounded-full shadow-lg font-semibold hover:bg-yellow-300 transition duration-300 transform hover:scale-105 hover:translate-y-0.5 flex items-center justify-center gap-2"
                onClick={(e) => scrollToSection(e, "#listakursow")}
              >
                <AcademicCapIcon className="w-5 h-5" />
                Poznaj nasze kursy
             </a>
          </div>
         </section>

         <section
            id="listakursow"
            className="min-h-screen flex flex-col justify-start items-center bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white text-center px-6 py-12 pt-16"
          >
            <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto gap-4 lg:gap-8">
              {/* Obrazek */}
              <img
                src="/images/courses/present-simple-single.png"
                className="w-160 h-auto"
              />

              {/* Tekst po prawej stronie */}
              <div className="text-left -mt-6 lg:-mt-8 flex flex-col">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-wide text-center lg:text-left">
                  Zajęcia 1:1
                </h2>

                <div className="space-y-4 text-lg lg:text-xl">
                  <p className="text-lg">
                    Indywidualne zajęcia z języka angielskiego dopasowane do Twojego poziomu, celów i potrzeb.
                    Skupiamy się na praktycznej komunikacji i rozwijaniu umiejętności,
                    które naprawdę przydadzą Ci się w codziennych sytuacjach, pracy lub podróży.
                  </p>
                </div>

                {/* Przyciski pod ceną */}
                <div className="flex flex-col gap-2 mt-6 items-center lg:items-start">
                  {/* Przycisk Dowiedz się więcej */}
                  <a id="present-simple-more-info-second-button"
                    href="/#zajecia-1-do-1"
                    className="bg-yellow-400 text-gray-900 w-58 py-3 px-6 rounded-full shadow-lg font-semibold hover:bg-yellow-300 transition duration-300 transform hover:scale-105 hover:translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <InformationCircleIcon className="w-5 h-5" />
                    Dowiedz się więcej
                  </a>

                  {/* Przycisk Kup kurs teraz */}
                  <a id="present-simple-single-buy-button"
                    href="/#kontakt"
                    className="bg-yellow-400 text-gray-900 w-58 py-3 px-6 rounded-full shadow-lg font-semibold hover:bg-yellow-300 transition duration-300 transform hover:scale-105 hover:translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    Zapisz się teraz
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto gap-4 lg:gap-8">
              {/* Obrazek */}
              <img
                src="/images/courses/present-simple-single.png"
                className="w-160 h-auto"
              />

              {/* Tekst po prawej stronie */}
              <div className="text-left -mt-6 lg:-mt-8 flex flex-col">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-wide text-center lg:text-left">
                  Zajęcia w parach
                </h2>

                <div className="space-y-4 text-lg lg:text-xl">
                  <p className="text-lg">
                    Zajęcia dla dwóch osób na podobnym poziomie, które chcą wspólnie rozwijać swój angielski.
                    Dużo praktycznej komunikacji, ćwiczeń w parze i nauki dopasowanej do Waszych celów oraz potrzeb.
                  </p>
                </div>

                {/* Przyciski pod ceną */}
                <div className="flex flex-col gap-2 mt-6 items-center lg:items-start">
                  {/* Przycisk Dowiedz się więcej */}
                  <a id="present-simple-more-info-second-button"
                    href="/#zajecia-w-parach"
                    className="bg-yellow-400 text-gray-900 w-58 py-3 px-6 rounded-full shadow-lg font-semibold hover:bg-yellow-300 transition duration-300 transform hover:scale-105 hover:translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <InformationCircleIcon className="w-5 h-5" />
                    Dowiedz się więcej
                  </a>

                  {/* Przycisk Kup kurs teraz */}
                  <a id="present-simple-single-buy-button"
                    href="/#kontakt"
                    className="bg-yellow-400 text-gray-900 w-58 py-3 px-6 rounded-full shadow-lg font-semibold hover:bg-yellow-300 transition duration-300 transform hover:scale-105 hover:translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    Zapisz się teraz
                  </a>
                </div>
              </div>
            </div>


             <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto gap-4 lg:gap-8">
              {/* Obrazek */}
              <img
                src="/images/courses/present-simple-single.png"
                className="w-160 h-auto"
              />

              {/* Tekst po prawej stronie */}
              <div className="text-left -mt-6 lg:-mt-8 flex flex-col">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-wide text-center lg:text-left">
                  Kurs grupowy od zera dla dorosłych
                </h2>

                <div className="space-y-4 text-lg lg:text-xl">
                  <p className="text-lg">
                  Kurs dla dorosłych, którzy zaczynają naukę języka angielskiego od zera.
                  W przyjaznej atmosferze krok po kroku poznasz podstawy języka i nauczysz się swobodnie radzić sobie w prostych, codziennych sytuacjach.
                  </p>
                </div>

                {/* Przyciski pod ceną */}
                <div className="flex flex-col gap-2 mt-6 items-center lg:items-start">
                  {/* Przycisk Dowiedz się więcej */}
                  <a id="present-simple-more-info-second-button"
                    href="/#kurs-grupowy-od-zera-dla-doroslych"
                    className="bg-yellow-400 text-gray-900 w-58 py-3 px-6 rounded-full shadow-lg font-semibold hover:bg-yellow-300 transition duration-300 transform hover:scale-105 hover:translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <InformationCircleIcon className="w-5 h-5" />
                    Dowiedz się więcej
                  </a>

                  {/* Przycisk Kup kurs teraz */}
                  <a id="present-simple-single-buy-button"
                    href="/#kontakt"
                    className="bg-yellow-400 text-gray-900 w-58 py-3 px-6 rounded-full shadow-lg font-semibold hover:bg-yellow-300 transition duration-300 transform hover:scale-105 hover:translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    Zapisz się teraz
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto gap-4 lg:gap-8">
              {/* Obrazek */}
              <img
                src="/images/courses/present-simple-single.png"
                className="w-160 h-auto"
              />

              {/* Tekst po prawej stronie */}
              <div className="text-left -mt-6 lg:-mt-8 flex flex-col">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-wide text-center lg:text-left">
                  Kurs grupowy ósmoklasisty
                </h2>

                <div className="space-y-4 text-lg lg:text-xl">
                  <p className="text-lg">
                  Kurs przygotowujący uczniów do egzaminu ósmoklasisty z języka angielskiego.
                  Skupiamy się na najważniejszych zagadnieniach egzaminacyjnych, rozwijaniu wszystkich kluczowych umiejętności
                  oraz skutecznych sposobach radzenia sobie z zadaniami egzaminacyjnymi.
                  </p>
                </div>

                {/* Przyciski pod ceną */}
                <div className="flex flex-col gap-2 mt-6 items-center lg:items-start">
                  {/* Przycisk Dowiedz się więcej */}
                  <a id="present-simple-more-info-second-button"
                    href="/#kurs-grupowy-osmoklasisty"
                    className="bg-yellow-400 text-gray-900 w-58 py-3 px-6 rounded-full shadow-lg font-semibold hover:bg-yellow-300 transition duration-300 transform hover:scale-105 hover:translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <InformationCircleIcon className="w-5 h-5" />
                    Dowiedz się więcej
                  </a>

                  {/* Przycisk Kup kurs teraz */}
                  <a id="present-simple-single-buy-button"
                    href="/#kontakt"
                    className="bg-yellow-400 text-gray-900 w-58 py-3 px-6 rounded-full shadow-lg font-semibold hover:bg-yellow-300 transition duration-300 transform hover:scale-105 hover:translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    Zapisz się teraz
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
