import React, { useState, useEffect } from "react";
import { FaPhone, FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope, FaFacebook, FaBuilding } from "react-icons/fa";
import { FiPhone, FiVideo, FiBook, FiFileText, FiUser, FiUsers, FiMic } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { ShoppingCartIcon, InformationCircleIcon, AcademicCapIcon  } from '@heroicons/react/24/solid';

const KursGrupowyOdZeraDlaDoroslych = () => {
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

         <section
           id="present-simple-bez-sciemy"
           className="min-h-screen flex flex-col justify-start items-center bg-gradient-to-r from-blue-500 via-indigo-500 to-[#0C1C8C] text-white text-center px-6 py-12 pt-16"
         >
           {/* Tytuł główny */}
           <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 mt-10">Zajecia grupowe dla dorosłych</h1>
           {/* Podtytuł */}
           <p className="text-lg lg:text-2xl mb-10 lg:mb-2 max-w-2xl">Intensywny kurs języka angielskiego od zera</p>

           <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto gap-4 lg:gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2">
              <div className="bg-white border-3 border-black rounded-2xl shadow-2xl p-6 flex flex-col items-center justify-center text-center h-40 transform hover:scale-105 hover:-translate-y-2 transition-transform">
                <FiVideo className="text-4xl mb-3 text-blue-500" />
                <h3 className="text-lg font-medium leading-snug text-black">
                  Lekcje 60 minutowe
                </h3>
              </div>

              <div className="bg-white border-3 border-black rounded-2xl shadow-2xl p-6 flex flex-col items-center justify-center text-center h-40 transform hover:scale-105 hover:-translate-y-2 transition-transform">
                <FiMic className="text-4xl mb-3 text-indigo-500" />
                <h3 className="text-lg font-medium leading-snug text-black">
                  Skupiamy się na mówieniu
                </h3>
              </div>

              <div className="bg-white border-3 border-black rounded-2xl shadow-2xl p-6 flex flex-col items-center justify-center text-center h-40 transform hover:scale-105 hover:-translate-y-2 transition-transform">
                <FiFileText className="text-4xl mb-3 text-purple-600" />
                <h3 className="text-lg font-medium leading-snug text-black">
                  Wszystkie materiały w cenie
                </h3>
              </div>

              <div className="bg-white border-3 border-black rounded-2xl shadow-2xl p-6 flex flex-col items-center justify-center text-center h-40 transform hover:scale-105 hover:-translate-y-2 transition-transform">
                <FiUsers className="text-4xl mb-3 text-blue-500" />
                <h3 className="text-lg font-medium leading-snug text-black">
                  Małe grupy do 6 osób
                </h3>
              </div>
            </div>

             {/* Obrazek */}
             <img
               src="/images/courses/classes-for-adults.png"
               className="w-160 h-auto"
             />
           </div>

           {/* Przyciski pod ceną */}
           <div className="flex flex-col gap-2 mt-6 items-center lg:items-start">
             {/* Przycisk Kup kurs teraz */}
             <a id="present-simple-direct-buy-button"
               href="#/kontakt"
               className="bg-yellow-400 text-gray-900 w-74 py-3 px-6 rounded-full shadow-lg font-semibold hover:bg-yellow-300 transition duration-300 transform hover:scale-105 hover:translate-y-0.5 flex items-center justify-center gap-2"
             >
               Umów lekcję próbną
             </a>
           </div>
      </section>

      <section
              id="present-simple-bez-sciemy-for-ambitious"
              className="min-h-screen flex flex-col justify-start items-center bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white text-center px-6 py-12 pt-16"
      >
          <h2 className="text-4xl lg:text-5xl font-bold mb-10 lg:mb-10 tracking-wide text-center lg:text-left">Świetny kurs dla dorosłych od zera</h2>

         <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto gap-4 lg:gap-8 mt-8">
           {/* Kontener obrazka */}
           <div className="relative w-full max-w-md overflow-hidden">
             <img
               src="/images/courses/classes-for-adults.png"
               className="w-full h-auto transform scale-180 lg:scale-120 transition-transform duration-500"
               alt="Ćwiczeniowy Power Pack"
             />
           </div>

            {/* Tekst po prawej stronie */}
            <div className="text-left -mt-6 lg:-mt-8 flex flex-col">
              <div className="space-y-4 text-lg lg:text-xl mt-6">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left">Zajęciach dla dorosłych od zera online będzie dobrym wyborem jeśli:</h2>
                <p className="text-base lg:text-lg">
                  •	zaczynacie naukę angielskiego od podstaw i chcecie zrobić to porządnie, w dobrym tempie, bez poczucia zagubienia,<br/>
                  •	zależy Wam przede wszystkim na MÓWIENIU – chcecie jak najszybciej zacząć swobodnie się porozumiewać, a nie tylko znać teorię,<br/>
                  •	wolicie uczyć się w małej grupie (max 6 osób), gdzie każdy ma realną szansę się odezwać i ćwiczyć na żywo,<br/>
                  •	cenicie energię i motywację, jaką daje wspólna nauka z innymi – presja grupy działa na Was mobilizująco, a nie stresująco,<br/>
                  •	szukacie intensywnego kursu (36 lekcji), który da Wam solidne podstawy w skondensowanym czasie,<br/>
                  •	potrzebujecie jasnej struktury i przewodnika – konkretnego planu "od zera do mówienia", zamiast uczenia się po omacku,<br/>
                  •	nie mieliście wcześniej kontaktu z angielskim (albo bardzo dawno temu) i szukacie kursu, który to uwzględnia od pierwszych zajęć,<br/>
                  •	zależy Wam na kursie w rozsądnej cenie, bo koszt dzieli się na całą grupę, a efekty i tak są mierzalne.
                </p>
              </div>
            </div>
          </div>
      </section>

       <section
             id="present-simple-bez-sciemy-most-often-questions"
             className="min-h-screen flex flex-col justify-start items-center bg-gradient-to-r from-orange-400 to-red-600 text-white text-center px-6 py-12 pt-16"
       >
              <h2 className="text-4xl lg:text-5xl font-bold mb-10 lg:mb-10 tracking-wide text-center lg:text-left">Najczęściej zadawane pytania</h2>

              <div className="flex flex-col items-center justify-center max-w-4xl mx-auto gap-6">
                <div className="bg-white border-3 border-black rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center text-center w-full transform hover:scale-105 hover:-translate-y-2 transition-transform">
                  <h3 className="text-2xl font-bold leading-snug text-black mb-2">
                    Ile trwa kurs?
                  </h3>
                  <h3 className="text-lg font-medium leading-snug text-black">
                    Kurs rozłożony jest na 36 lekcji po 60 min każda.
                  </h3>
                </div>

                <div className="bg-white border-3 border-black rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center text-center w-full transform hover:scale-105 hover:-translate-y-2 transition-transform">
                  <h3 className="text-2xl font-bold leading-snug text-black mb-2">
                   Ile kosztuje kurs?
                  </h3>
                  <h3 className="text-lg font-medium leading-snug text-black">
                    Koszt kursu to 1 440zł - czyli 40 zł za jedne zajęcia. Możesz opłacić w całości lub rozłożyć na raty - wybór należy do Ciebie.
                  </h3>
                </div>

                <div className="bg-white border-3 border-black rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center text-center w-full transform hover:scale-105 hover:-translate-y-2 transition-transform">
                   <h3 className="text-2xl font-bold leading-snug text-black mb-2">
                     Co się stanie, jeśli opuszczę zajęcia?
                   </h3>
                   <h3 className="text-lg font-medium leading-snug text-black">
                    Każda lekcja jest nagrywana, dzięki czemu możesz nadrobić zaległości w dogodnym dla Ciebie czasie.
                   </h3>
                </div>

                <div className="bg-white border-3 border-black rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center text-center w-full transform hover:scale-105 hover:-translate-y-2 transition-transform">
                    <h3 className="text-2xl font-bold leading-snug text-black mb-2">
                      Dlaczego ten kurs jest inny?
                    </h3>
                    <h3 className="text-lg font-medium leading-snug text-black">
                      W wielu kursach nacisk kładzie się głównie na gramatykę i podręcznikowe ćwiczenia. <b>Tutaj priorytetem jest MÓWIENIE.</b>
                    </h3>
                </div>

                <div className="bg-white border-3 border-black rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center text-center w-full transform hover:scale-105 hover:-translate-y-2 transition-transform">
                     <h3 className="text-2xl font-bold leading-snug text-black mb-2">
                       Czego się nauczę?
                     </h3>
                     <h3 className="text-lg font-medium leading-snug text-black">
                      <b>Zdobędziesz poziom A1</b> po przejściu całego kursu.
                     </h3>
                </div>

                <div className="bg-white border-3 border-black rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center text-center w-full transform hover:scale-105 hover:-translate-y-2 transition-transform">
                   <h3 className="text-2xl font-bold leading-snug text-black mb-2">
                    Czy lekcje są z polskimi lektorami czy native-speakerami?
                   </h3>
                   <h3 className="text-lg font-medium leading-snug text-black">
                     Zajęcia są zarówno z polskimi jak i native-speakerami.
                   </h3>
                </div>
             </div>
       </section>

      <footer className="text-center p-6 bg-gray-900 text-white">
        <p>&copy; 2026 English Dream - wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
};

export default KursGrupowyOdZeraDlaDoroslych;
