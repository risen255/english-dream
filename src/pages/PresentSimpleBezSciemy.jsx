import React, { useState, useEffect } from "react";
import { FaPhone, FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope, FaFacebook, FaBuilding } from "react-icons/fa";
import { FiPhone, FiVideo, FiBook, FiFileText, FiUser } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { ShoppingCartIcon, InformationCircleIcon, AcademicCapIcon  } from '@heroicons/react/24/solid';

const PresentSimpleBezSciemy = () => {
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

         <section
           id="present-simple-bez-sciemy"
           className="min-h-screen flex flex-col justify-start items-center bg-gradient-to-r from-blue-500 via-indigo-500 to-[#0C1C8C] text-white text-center px-6 py-12 pt-16"
         >
           {/* Tytuł główny */}
           <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 mt-10">Present simple bez ściemy</h1>
           {/* Podtytuł */}
           <p className="text-lg lg:text-2xl mb-10 lg:mb-2 max-w-2xl">Praktyczny kurs – nauka, która działa w realnym życiu</p>

           <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto gap-4 lg:gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2">
              <div className="bg-white border-3 border-black rounded-2xl shadow-2xl p-6 flex flex-col items-center justify-center text-center h-40 transform hover:scale-105 hover:-translate-y-2 transition-transform">
                <FiVideo className="text-4xl mb-3 text-blue-500" />
                <h3 className="text-lg font-medium leading-snug text-black">
                  60 minut nagrań z instruktażem
                </h3>
              </div>

              <div className="bg-white border-3 border-black rounded-2xl shadow-2xl p-6 flex flex-col items-center justify-center text-center h-40 transform hover:scale-105 hover:-translate-y-2 transition-transform">
                <FiBook className="text-4xl mb-3 text-indigo-500" />
                <h3 className="text-lg font-medium leading-snug text-black">
                  10 lekcji z praktycznymi ćwiczeniami
                </h3>
              </div>

              <div className="bg-white border-3 border-black rounded-2xl shadow-2xl p-6 flex flex-col items-center justify-center text-center h-40 transform hover:scale-105 hover:-translate-y-2 transition-transform">
                <FiFileText className="text-4xl mb-3 text-purple-600" />
                <h3 className="text-lg font-medium leading-snug text-black">
                  Ćwiczenia w formacie PDF
                </h3>
              </div>

              <div className="bg-white border-3 border-black rounded-2xl shadow-2xl p-6 flex flex-col items-center justify-center text-center h-40 transform hover:scale-105 hover:-translate-y-2 transition-transform">
                <FiUser className="text-4xl mb-3 text-blue-500" />
                <h3 className="text-lg font-medium leading-snug text-black">
                  Słownictwo przygotowane przez native speaker'a
                </h3>
              </div>
            </div>

             {/* Obrazek */}
             <img
               src="/images/courses/present-simple-single.png"
               className="w-160 h-auto"
             />
           </div>

           {/* Div z ceną */}
           <div className="mt-6 text-left space-y-2 text-lg lg:text-xl">
             <p class="text-sm">Cena regularna: <span className="line-through">168 PLN</span></p>
             <p>Aktualna cena: <span className="font-bold text-yellow-400">47 PLN</span></p>
             <p class="text-sm">Najniższa cena w ciągu ostatnich 30 dni: 47 PLN</p>
           </div>

           {/* Przyciski pod ceną */}
           <div className="flex flex-col gap-2 mt-6 items-center lg:items-start">
             {/* Przycisk Kup kurs teraz */}
             <a
               href="https://englishdream.systeme.io/presentsimple"
               className="bg-yellow-400 text-gray-900 w-74 py-3 px-6 rounded-full shadow-lg font-semibold hover:bg-yellow-300 transition duration-300 transform hover:scale-105 hover:translate-y-0.5 flex items-center justify-center gap-2"
             >
               <ShoppingCartIcon className="w-5 h-5" />
               Kup teraz
             </a>
           </div>
      </section>

      <section
          id="present-simple-bez-sciemy-inside"
          className="min-h-screen flex flex-col justify-start items-center bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white text-center px-6 py-12 pt-16"
        >
           <h2 className="text-4xl lg:text-5xl font-bold mb-10 lg:mb-10 tracking-wide text-center lg:text-left">Co znajdziesz w kursie?</h2>

           <div className="flex flex-col items-center justify-center max-w-4xl mx-auto gap-6">
             <div className="bg-white border-3 border-black rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center text-center w-full transform hover:scale-105 hover:-translate-y-2 transition-transform">
               <h3 className="text-2xl font-bold leading-snug text-black mb-2">
                 Podstawy i zasady gramatyczne
               </h3>
               <h3 className="text-lg font-medium leading-snug text-black">
                 Wytłumaczone prosto, bez zbędnych terminów.
               </h3>
             </div>

             <div className="bg-white border-3 border-black rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center text-center w-full transform hover:scale-105 hover:-translate-y-2 transition-transform">
               <h3 className="text-2xl font-bold leading-snug text-black mb-2">
                 Codzienne przykłady
               </h3>
               <h3 className="text-lg font-medium leading-snug text-black">
                 Realne sytuacje, które faktycznie się przydają, a nie sztuczne dialogi z podręczników.
               </h3>
             </div>

             <div className="bg-white border-3 border-black rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center text-center w-full transform hover:scale-105 hover:-translate-y-2 transition-transform">
                <h3 className="text-2xl font-bold leading-snug text-black mb-2">
                  Rozszerzenie słownictwa
                </h3>
                <h3 className="text-lg font-medium leading-snug text-black">
                  Uczysz się nie tylko konstrukcji, ale też nowych, przydatnych słów.
                </h3>
             </div>

             <div className="bg-white border-3 border-black rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center text-center w-full transform hover:scale-105 hover:-translate-y-2 transition-transform">
                 <h3 className="text-2xl font-bold leading-snug text-black mb-2">
                   Ćwiczenia do utrwalania
                 </h3>
                 <h3 className="text-lg font-medium leading-snug text-black">
                   Dostajesz specjalny zeszyt ćwiczeń, który możesz uzupełniać w trakcie kursu.
                 </h3>
             </div>

             <div className="bg-white border-3 border-black rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center text-center w-full transform hover:scale-105 hover:-translate-y-2 transition-transform">
                  <h3 className="text-2xl font-bold leading-snug text-black mb-2">
                    Zadania bonusowe
                  </h3>
                  <h3 className="text-lg font-medium leading-snug text-black">
                    Dla tych, którzy chcą utrwalić materiał jeszcze bardziej.
                  </h3>
             </div>

             <div className="bg-white border-3 border-black rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center text-center w-full transform hover:scale-105 hover:-translate-y-2 transition-transform">
                <h3 className="text-2xl font-bold leading-snug text-black mb-2">
                  Klucz odpowiedzi
                </h3>
                <h3 className="text-lg font-medium leading-snug text-black">
                  Żebyś mógł samodzielnie sprawdzić, czy dobrze ogarniasz.
                </h3>
             </div>
          </div>
    </section>

      <section
              id="present-simple-bez-sciemy-for-ambitious"
              className="min-h-screen flex flex-col justify-start items-center bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white text-center px-6 py-12 pt-16"
      >
          <h2 className="text-4xl lg:text-5xl font-bold mb-10 lg:mb-10 tracking-wide text-center lg:text-left">Świetny dodatek dla ambitnych!</h2>

          <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto gap-4 lg:gap-8">
            {/* Obrazek */}
            <img
              src="/images/courses/present-simple-power-pack.png"
              className="w-160 h-auto transform scale-180 lg:scale-140"
              alt="Ćwiczeniowy Power Pack"
            />

            {/* Tekst po prawej stronie */}
            <div className="text-left -mt-6 lg:-mt-8 flex flex-col">
              <div className="space-y-4 text-lg lg:text-xl mt-6">
                <h2 className="text-3xl font-semibold">Ćwiczeniowy Power Pack</h2>
                <p className="text-base lg:text-lg">
                  Masz ochotę naprawdę przetestować swoją wiedzę i wejść na wyższy
                  poziom? Ten zestaw został stworzony z myślą o osobach, które nie
                  chcą zatrzymać się na podstawach i lubią wyciskać z nauki maksimum.
                  W środku znajdziesz:
                  <br/><br/>
                  <strong>Podsumowanie najważniejszych zasad Present Simple</strong> – szybko
                  odświeżysz teorię, gdy tego potrzebujesz.
                  <br/>
                  <strong>Ponad 100 różnorodnych ćwiczeń</strong> – od prostych po wymagające, byś
                  mógł stopniowo budować pewność w używaniu języka.
                  <br/>
                  <strong>Zdania do tłumaczenia</strong> – świetny sprawdzian Twoich umiejętności w
                  praktyce.
                  <br/>
                  <strong>Klucz odpowiedzi</strong> – zawsze wiesz, czy idziesz w dobrym kierunku.
                  <br/><br/>
                  To nie jest kolejna nudna gramatyka – to praktyczny, intensywny
                  trening, który pozwala Ci mówić i pisać po angielsku pewniej, szybciej i
                  naturalniej.
                </p>
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

export default PresentSimpleBezSciemy;
