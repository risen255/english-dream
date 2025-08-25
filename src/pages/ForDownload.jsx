import React, { useState, useEffect } from "react";
import { FaPhone, FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope, FaFacebook, FaBuilding } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { CheckCircle, Laptop, BookOpen, User, Home, Globe, Sofa } from "lucide-react";

const ForDownload = () => {
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
                 "Kursy",
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

      <section id="dopobrania" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-orange-400 to-red-600 text-white text-center px-6 py-12 pt-24">
         <h2 className="text-4xl font-bold mb-6">Do pobrania</h2>
         <p className="text-lg mt-4 max-w-2xl">Zapoznaj się z darmowymi e-bookami!</p>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-auto max-w-5xl justify-center mx-auto">
           <div className="flex flex-col items-center">
              <div className="text-gray-900 rounded-2xl shadow-2xl text-center transition-all hover:scale-105 hover:shadow-3xl overflow-hidden w-full max-w-md">
                <img src="/images/free_ebook_irregular_verbs.jpg" className="w-full h-100 object-cover"/>
              </div>
             <a href="/#darmowy-ebook-czasowniki-nieregularne" className="mt-8 inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
               Pobierz darmowego e-booka
             </a>
            </div>
            <div className="flex flex-col items-center">
               <div className="text-gray-900 rounded-2xl shadow-2xl text-center transition-all hover:scale-105 hover:shadow-3xl overflow-hidden w-full max-w-md">
                 <img src="/images/free_ebook_5wayswords.jpg" className="w-full h-100 object-cover"/>
               </div>
              <a href="/#darmowy-ebook-5-sposobow-na-nauke-angielskich-slowek" className="mt-8 inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                Pobierz darmowego e-booka
              </a>
             </div>
         </div>
     </section>

      <footer className="text-center p-6 bg-gray-900 text-white">
        <p>&copy; 2025 English Dream - Szkoła Języka Angielskiego. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
};

export default ForDownload;
