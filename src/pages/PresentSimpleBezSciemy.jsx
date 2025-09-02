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
             <a id="present-simple-direct-buy-button"
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

         <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto gap-4 lg:gap-8 mt-8">
           {/* Kontener obrazka */}
           <div className="relative w-full max-w-md overflow-hidden">
             <img
               src="/images/courses/present-simple-power-pack.png"
               className="w-full h-auto transform scale-180 lg:scale-180 transition-transform duration-500"
               alt="Ćwiczeniowy Power Pack"
             />
           </div>

            {/* Tekst po prawej stronie */}
            <div className="text-left -mt-6 lg:-mt-8 flex flex-col">
              <div className="space-y-4 text-lg lg:text-xl mt-6">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left">Ćwiczeniowy Power Pack</h2>
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

      <section
         id="present-simple-bez-sciemy-with-package-cheaper"
         className="min-h-screen flex flex-col justify-start items-center bg-gradient-to-r from-[#0C1C8C] via-[#1A2A6C] to-[#6A0DAD] text-white text-center px-6 py-12 pt-16"
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
               W pakiecie taniej!
             </h2>

             <div className="space-y-4 text-lg lg:text-xl">
               <p className="leading-relaxed">
                 Fantastyczny kurs{" "}
                 <span className="font-bold">Present simple bez ściemy</span> i{" "}
                 <span className="font-bold">Ćwiczeniowy Power Pack</span> do
                 utrwalenia wiedzy w atrakcyjnej cenie!
               </p>
             </div>

             {/* Div z ceną */}
             <div className="mt-6 text-left space-y-2 text-lg lg:text-xl">
               <p class="text-sm">Cena regularna: <span className="line-through">198.60 PLN</span></p>
               <p>Aktualna cena: <span className="font-bold text-yellow-400">64 PLN</span></p>
               <p class="text-sm">Najniższa cena w ciągu ostatnich 30 dni: 64 PLN</p>
             </div>

             {/* Przyciski pod ceną */}
             <div className="flex flex-col gap-2 mt-6 items-center lg:items-start">
               {/* Przycisk Kup kurs teraz */}
               <a id="present-simple-in-package-cheaper-button"
                 href="https://englishdream.systeme.io/pakietpresentsimple"
                 className="bg-yellow-400 text-gray-900 w-58 py-3 px-6 rounded-full shadow-lg font-semibold hover:bg-yellow-300 transition duration-300 transform hover:scale-105 hover:translate-y-0.5 flex items-center justify-center gap-2"
               >
                 <ShoppingCartIcon className="w-5 h-5" />
                 Kup teraz
               </a>
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
                    Dla kogo jest ten kurs?
                  </h3>
                  <h3 className="text-lg font-medium leading-snug text-black">
                    Ten kurs jest dla osób, które chcą ogarnąć Present Simple szybko i po ludzku – bez nudnych regułek.
                    Jeśli dopiero zaczynasz albo znasz podstawy, ale ciągle się mylisz, tu nauczysz się mówić tak, jak
                    naprawdę używa się angielskiego na co dzień, na prostych przykładach z życia.
                  </h3>
                </div>

                <div className="bg-white border-3 border-black rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center text-center w-full transform hover:scale-105 hover:-translate-y-2 transition-transform">
                  <h3 className="text-2xl font-bold leading-snug text-black mb-2">
                    Co muszę wiedzieć, aby przejść ten kurs?
                  </h3>
                  <h3 className="text-lg font-medium leading-snug text-black">
                    Aby przejść ten kurs, wystarczy podstawowa znajomość zaimków osobowych – a jeśli ich nie
                    pamiętasz, spokojnie, przerobimy to razem. Nie musisz znać dużo słówek – uczymy się ich przy okazji,
                    używając praktycznego, codziennego słownictwa do tłumaczenia gramatyki.
                  </h3>
                </div>

                <div className="bg-white border-3 border-black rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center text-center w-full transform hover:scale-105 hover:-translate-y-2 transition-transform">
                   <h3 className="text-2xl font-bold leading-snug text-black mb-2">
                     Czy jeśli mam już podstawy angielskiego, to ten kurs jest dla mnie?
                   </h3>
                   <h3 className="text-lg font-medium leading-snug text-black">
                     Jeśli masz już podstawy, ten kurs nadal może być dla Ciebie – zaczynamy od zera, ale w szybkim,
                     konkretnym tempie. To świetna opcja, jeśli chcesz odświeżyć wiedzę, poukładać zasady i
                     przygotować się np. do egzaminu.
                   </h3>
                </div>

                <div className="bg-white border-3 border-black rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center text-center w-full transform hover:scale-105 hover:-translate-y-2 transition-transform">
                    <h3 className="text-2xl font-bold leading-snug text-black mb-2">
                      Jak długo będę mieć dostęp do kursu?
                    </h3>
                    <h3 className="text-lg font-medium leading-snug text-black">
                      Nie ma limitu – dostęp do kursu otrzymujesz od razu po opłaceniu i możesz korzystać z niego bez
                      ograniczeń. Ucz się kiedy chcesz i ile chcesz.
                    </h3>
                </div>

                <div className="bg-white border-3 border-black rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center text-center w-full transform hover:scale-105 hover:-translate-y-2 transition-transform">
                     <h3 className="text-2xl font-bold leading-snug text-black mb-2">
                       Co wyróżnia ten kurs?
                     </h3>
                     <h3 className="text-lg font-medium leading-snug text-black">
                       Ten kurs wyróżnia przede wszystkim praktyczne podejście do nauki. Nie uczę „szkolnymi regułkami”
                       ani suchą teorią – wszystko tłumaczę w prosty, zrozumiały sposób, tak jak naprawdę używa się
                       Present Simple w codziennych rozmowach. Zamiast uczyć się na pamięć, pokazuję przykłady z życia,
                       które pozwalają od razu zastosować wiedzę w praktyce. Dzięki temu uczysz się tak, jak rozumie i
                       mówi native speaker, a nauka staje się naturalna i przyjemna.
                     </h3>
                </div>

                <div className="bg-white border-3 border-black rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center text-center w-full transform hover:scale-105 hover:-translate-y-2 transition-transform">
                   <h3 className="text-2xl font-bold leading-snug text-black mb-2">
                    Jakie są dostępne formy płatności?
                   </h3>
                   <h3 className="text-lg font-medium leading-snug text-black">
                     Dostępne formy płatności to: BLIK, ApplePay, GooglePay, Karta płatnicza, Przelewy24
                   </h3>
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
