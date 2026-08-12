import React, { useState, useEffect } from "react";
import { FaPhone, FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope, FaFacebook, FaBuilding } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { ShoppingCartIcon, InformationCircleIcon, AcademicCapIcon  } from '@heroicons/react/24/solid';

const AboutMe = () => {
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

        <section id="omnie" className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-gray-200 via-gray-50 to-white px-6 md:px-12 py-12 md:py-24 animate-shimmer text-center md:text-left">
            <img
              src="/images/me.jpg"
              alt="O mnie"
              className="w-5/6 md:w-1/3 max-w-xl rounded-2xl shadow-2xl mb-6 md:mb-0 md:mr-12 transition-all duration-300 hover:scale-105"
            />
            <div className="w-full md:w-1/2 md:ml-12">
              <h2 className="text-4xl font-bold text-gray-800">O mnie</h2>
              <p className="text-lg mt-4 max-w-xl mx-auto md:mx-0">
                Cześć! Nazywam się Ewa i jestem pasjonatką języków oraz kreatywnego nauczania. Moja historia
                zaczęła się w Białymstoku, ale będac małym dzieckiem, przeprowadziłam się do Wielkiej Brytanii. Tam
                ukończyłam szkołę, a później studia magisterskie z architektury.
              </p>
              <p className="text-lg mt-4 max-w-xl mx-auto md:mx-0">
                Po powrocie do Polski w 2020 roku dzieliłam swój czas między pracę jako architekt, a nauczaniem
                języka angielskiego. W końcu pasja do języków wygrała – w 2024 roku zaczęłam uczyć na pełen etat.
              </p>
              <p className="text-lg mt-4 max-w-xl mx-auto md:mx-0">
                W swojej pracy nauczania języka angielskiego kieruję się indywidualnym podejściem do każdego
                ucznia. Skupiam się na jego specyficznych potrzebach i problemach, dostosowując metody nauki do
                jego tempa oraz stylu przyswajania wiedzy. Tłumaczę zagadnienia w sposób prosty i zrozumiały,
                tak by nauka była przyjemnością, a nie stresującym obowiązkiem. Kładę szczególny nacisk na
                konwersacje, bo uważam, że to klucz do pewności siebie w mówieniu i swobodnej komunikacji.
              </p>
              <p className="text-lg mt-4 max-w-xl mx-auto md:mx-0 font-semibold">
                Jeśli chcesz nauczyć się angielskiego w swobodnej i przyjaznej atmosferze, dobrze trafiłeś! 😊
              </p>
            </div>
        </section>

      <footer className="text-center p-6 bg-gray-900 text-white">
        <p>&copy; 2026 English Dream - Szkoła Języka Angielskiego. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
};

export default AboutMe;
