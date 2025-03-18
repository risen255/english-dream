import React, { useState, useEffect } from "react";
import { FaPhone, FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope, FaFacebook, FaBuilding } from "react-icons/fa";

const App = () => {
  const [headline, setHeadline] = useState("");
  const [fade, setFade] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [transparentHeader, setTransparentHeader] = useState(true);

  const headlines = [

    "Ucz się angielskiego z najlepszymi!",
    "Rozwijaj swoje umiejętności językowe!",
    "Zostań mistrzem języka angielskiego!"
  ];
  let index = 0;

  useEffect(() => {
    let index = 0;
    setHeadline(headlines[index]);
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        index = (index + 1) % headlines.length;
        setHeadline(headlines[index]);
        setFade(false);
      }, 800);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("englishdream");
      if (homeSection) {
        const { top, bottom } = homeSection.getBoundingClientRect();
        setTransparentHeader(top <= 0 && bottom > 50);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const [isOpen, setIsOpen] = useState(false);
    const [bgOpacity, setBgOpacity] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const onasSection = document.getElementById("onas");
        if (onasSection) {
          const onasTop = onasSection.getBoundingClientRect().top;
          const onasBottom = onasSection.getBoundingClientRect().bottom;

          if (onasTop < 50 && onasBottom > 50) {
            setBgOpacity(1);
          } else if (onasTop > 50) {
            setBgOpacity(0);
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const closeMenu = (e, id) => {
      e.preventDefault();
      const section = document.querySelector(`#${id}`);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      }
      setIsOpen(false);
    };

  return (
    <div className="font-sans text-gray-900">
     <header
           className="fixed top-0 w-full p-4 z-50 shadow-xl backdrop-blur-md transition-all duration-[700ms]"
           style={{ backgroundColor: `rgba(12, 28, 140, ${bgOpacity})` }}
         >
           <div className="flex justify-end items-center px-4">
             <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
               {isOpen ? "✖" : "☰"}
             </button>
           </div>

           <nav
             className={`md:flex md:justify-center md:space-x-8 text-lg font-semibold text-white ${
               isOpen ? "block bg-gradient-to-r from-[#0C1C8C] via-[#1A2A6C] to-[#6A0DAD]" : "hidden"
             } md:block absolute md:relative top-full left-0 w-full md:w-auto p-4 md:p-0`}
           >
             {[
               "English Dream",
               "O nas",
               "Oferta",
               "Współpraca",
               "Opinie",
               "Cennik",
               "Kontakt",
             ].map((text, index) => {
               const id = text.toLowerCase().replace(/ /g, "");
               return (
                 <a
                   key={index}
                   href={`#${id}`}
                   onClick={(e) => closeMenu(e, id)}
                   className="block md:inline relative transition duration-300 group py-2 md:py-0"
                 >
                   {text}
                   <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full group-hover:-translate-x-1/2 group-hover:max-w-full"></span>
                 </a>
               );
             })}
           </nav>
         </header>

      <section id="englishdream" className="h-screen flex flex-col justify-center items-center text-white text-center px-6 bg-cover bg-center relative bg-gradient-to-b from-[#0C1C8C] to-transparent" style={{ backgroundImage: "url('https://i.ibb.co/Q31nQW88/transparent3.jpg')" }}>
        <div className="absolute inset-0 backdrop-brightness-75"></div>
        <div className="relative z-10 flex flex-col items-center">
        <h1 className={`text-5xl font-extrabold transition-all duration-1000 ease-in-out transform ${fade ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>{headline}</h1>
        <p className="text-xl mt-4 max-w-2xl min-h-[60px]">Dołącz do mojej szkoły i rozwijaj swoje umiejętności językowe w nowoczesny sposób.</p>
        <a href="#kontakt" onClick={(e) => scrollToSection(e, "#kontakt")} className="mt-6 bg-yellow-400 text-gray-900 px-8 py-4 rounded-full shadow-lg font-semibold hover:bg-yellow-300 transition duration-300 transform hover:scale-105 hover:translate-y-0.5">Zacznij już teraz!</a>
      </div>
      </section>

      <section id="onas" className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-gray-200 via-gray-50 to-white px-6 md:px-12 py-12 md:py-24 animate-shimmer text-center md:text-left">
    	<img src="https://i.ibb.co/Y74z0Jz8/20250310-152632.jpg" alt="O mnie" className="w-2/3 md:w-1/3 max-w-xl rounded-2xl shadow-2xl mb-6 md:mb-0 md:mr-8 transition-all duration-300 hover:scale-105" />

    	<div className="w-full md:w-1/2">
    	  <h2 className="text-4xl font-bold text-gray-800">O mnie</h2>
    	  <p className="text-lg mt-4 max-w-xl mx-auto md:mx-0">
    		Cześć! Nazywam się Ewa i jestem lektorką języka angielskiego. Od dwóch lat pomagam moim uczniom przełamywać bariery językowe, rozwijać płynność i nabierać pewności siebie w mówieniu.
    	  </p>
    	  <p className="text-lg mt-4 max-w-xl mx-auto md:mx-0">
    		Choć od czterech lat mieszkam w Polsce, całe swoje życie spędziłam w Wielkiej Brytanii – to tam dorastałam, studiowałam i zdobywałam pierwsze doświadczenia zawodowe. Z wykształcenia jestem architektem, ale to właśnie nauczanie języka angielskiego stało się moją prawdziwą pasją i powołaniem.
    	  </p>
    	  <p className="text-lg mt-4 max-w-xl mx-auto md:mx-0">
    		W swojej pracy kładę duży nacisk na praktyczną komunikację i naturalne użycie języka. Wiem, jak ważne jest, aby nauka była nie tylko skuteczna, ale także przyjemna, dlatego staram się dostosować zajęcia do indywidualnych potrzeb moich uczniów.
    	  </p>
    	  <p className="text-lg mt-4 max-w-xl mx-auto md:mx-0 font-semibold">
    		Zapraszam do wspólnej nauki! 😊
    	  </p>
    	</div>
      </section>

      <section id="oferta" className="min-h-[180vh] flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white text-center px-6 py-12">
        <h2 className="text-4xl font-bold mb-6">Dlaczego warto uczyć się ze mną?</h2>
        <div className="flex flex-col space-y-6 max-w-3xl w-full items-center">
          <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg text-center transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-indigo-700">📝 Indywidualne plany nauki</h3>
            <p className="text-gray-700 mt-2">Dostosowuję materiały i program nauki do Twoich indywidualnych potrzeb, celów oraz poziomu.</p>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg text-center transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-indigo-700">📈 Szybkie efekty</h3>
            <p className="text-gray-700 mt-2">Dzięki sprawdzonym metodom nauki osiągniesz szybkie postępy w płynności językowej i zrozumieniu angielskiego.</p>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg text-center transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-indigo-700">🎭 Interaktywne lekcje</h3>
            <p className="text-gray-700 mt-2">Stosuję nowoczesne techniki, gry edukacyjne i scenariusze sytuacyjne, aby nauka była angażująca i skuteczna.</p>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg text-center transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-indigo-700">🎓 Przygotowanie do egzaminów</h3>
            <p className="text-gray-700 mt-2">Pomagam w przygotowaniach do matury, certyfikatów językowych oraz egzaminów akademickich i zawodowych.</p>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg text-center transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-indigo-700">🌐 Angielski w realnym świecie</h3>
            <p className="text-gray-700 mt-2">Uczę praktycznych umiejętności językowych, które ułatwią Ci podróże, rozmowy kwalifikacyjne i codzienną komunikację.</p>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg text-center transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-indigo-700">🎯 Indywidualne podejście</h3>
            <p className="text-gray-700 mt-2">Dostosowuję naukę do Twoich potrzeb, tempa i celów, abyś osiągnął najlepsze rezultaty.</p>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg text-center transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-indigo-700">💡 Mentoring i wsparcie</h3>
            <p className="text-gray-700 mt-2">Zapewniam pełne wsparcie w nauce, motywuję do systematycznej pracy i pomagam w budowaniu pewności siebie w mówieniu.</p>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg text-center transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-indigo-700">🗣️ Płynność mówienia</h3>
            <p className="text-gray-700 mt-2">Pomagam przełamać bariery językowe i uczyć się poprzez praktykę rozmów w różnych sytuacjach.</p>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg text-center transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-indigo-700">📚 Pomoc w nauce szkolnej</h3>
            <p className="text-gray-700 mt-2">Wspieram uczniów w zrozumieniu materiału szkolnego i przygotowaniu do egzaminów.</p>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg text-center transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-indigo-700">👦 Nauka dla dzieci</h3>
            <p className="text-gray-700 mt-2">Tworzę angażujące i interaktywne zajęcia, dostosowane do najmłodszych uczniów.</p>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg text-center transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-indigo-700">💼 Język angielski w biznesie</h3>
            <p className="text-gray-700 mt-2">Pomagam profesjonalistom rozwijać umiejętności językowe potrzebne w środowisku pracy.</p>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg text-center transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-indigo-700">🌍 Angielski do podróży</h3>
            <p className="text-gray-700 mt-2">Nauczysz się przydatnych zwrotów i komunikacji w podróży bez stresu.</p>
          </div>
          <a href="#kontakt" onClick={(e) => scrollToSection(e, "#kontakt")} className="mt-6 bg-yellow-400 text-gray-900 px-8 py-4 rounded-full shadow-lg font-semibold hover:bg-yellow-300 transition duration-300 transform hover:scale-105 hover:translate-y-0.5">Chcę uczyć się już od zaraz!</a>
        </div>
      </section>

      <section id="współpraca" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-indigo-500 to-[#0C1C8C] text-white text-center px-6 py-12">
        <h2 className="text-4xl font-bold mb-6">Współpraca</h2>
        <p className="text-lg mt-4 max-w-2xl">Współpracuję zarówno z klientami indywidualnymi, jak i firmami, oferując szkolenia językowe dostosowane do ich specyficznych potrzeb. Organizuję kursy językowe dla branż takich jak IT, marketing oraz kierunki techniczne.</p>
        <p className="text-lg mt-4 max-w-2xl">Współpracuję również ze szkołami, dostarczając skuteczne metody nauczania oraz wspierając nauczycieli i uczniów w rozwijaniu umiejętności językowych.</p>
        <p className="text-lg mt-4 max-w-2xl">Jeśli interesuje Cię współpraca, skontaktuj się ze mną! Razem ustalimy najlepszą formę współpracy oraz elastyczne warunki wynagrodzenia dostosowane do Twoich potrzeb.</p>
        <p className="text-lg mt-4 max-w-2xl">Gwarantuję wysoką jakość nauczania oraz podejście dopasowane do unikalnych wymagań każdego klienta. Moje szkolenia są skoncentrowane na praktycznych umiejętnościach językowych, które można natychmiast zastosować w codziennej pracy i życiu.</p>
        <p className="text-lg mt-4 max-w-2xl">Dzięki mojemu doświadczeniu i nowoczesnym metodom nauczania pomogę Ci lub Twojemu zespołowi osiągnąć językową pewność siebie w każdej sytuacji – zarówno w kontaktach biznesowych, jak i codziennej komunikacji.</p>
        <p className="text-lg mt-4 max-w-2xl font-semibold">Skontaktuj się ze mną już dziś, aby wspólnie zaplanować skuteczny i elastyczny program nauki!</p>
        <a href="#kontakt" onClick={(e) => scrollToSection(e, "#kontakt")} className="mt-6 bg-yellow-400 text-gray-900 px-8 py-4 rounded-full shadow-lg font-semibold hover:bg-yellow-300 transition duration-300 transform hover:scale-105 hover:translate-y-0.5">Chcę rozpocząć współpracę!</a>
      </section>

      <section id="opinie" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white text-center px-6 py-12">
        <h2 className="text-4xl font-bold mb-6">Opinie</h2>
        <p className="text-lg mt-4 max-w-2xl">Przeczytaj, co nasi kursanci mówią o swoich doświadczeniach z nauką angielskiego w naszej szkole!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full max-w-6xl">
          {[{name: 'Anna Kowalska', opinion: 'Świetne zajęcia! Bardzo profesjonalne podejście i indywidualne podejście do ucznia.', rating: 5},
            {name: 'Piotr Nowak', opinion: 'Dzięki tym lekcjom w końcu czuję się pewnie mówiąc po angielsku!', rating: 5},
            {name: 'Magdalena Wiśniewska', opinion: 'Lekcje są ciekawe i dynamiczne. Polecam każdemu!', rating: 5},
            {name: 'Kamil Dąbrowski', opinion: 'Najlepsza nauczycielka angielskiego, jaką miałem!', rating: 5},
            {name: 'Ewelina Mazur', opinion: 'Wspaniała atmosfera na lekcjach, nauka jest przyjemnością.', rating: 5},
            {name: 'Tomasz Lis', opinion: 'Bardzo dobre materiały dydaktyczne i świetne podejście.', rating: 5},
            {name: 'Karolina Wójcik', opinion: 'Szybkie postępy i dużo praktycznych ćwiczeń.', rating: 5},
            {name: 'Grzegorz Zawadzki', opinion: 'Doskonałe przygotowanie do egzaminów językowych!', rating: 5},
            {name: 'Natalia Czerwińska', opinion: 'Zajęcia dostosowane do moich potrzeb, elastyczne terminy.', rating: 5},
            {name: 'Mateusz Kwiatkowski', opinion: 'Bardzo dobra inwestycja w naukę języka. Polecam!', rating: 5},
            {name: 'Milena Kowalska', opinion: 'Super, mój język angielski polepszył się niesamowicie!', rating: 5},
            {name: 'Adam Fijał', opinion: 'Lepszej nauczycielki nie spotkałem!', rating: 5}].map((review, index) => (
            <div key={index} className="bg-white text-gray-900 p-6 rounded-xl shadow-lg text-center transition-all hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-indigo-700">{review.name}</h3>
              <p className="text-gray-700 mt-2">"{review.opinion}"</p>
              <div className="flex justify-center mt-2 text-yellow-400">
                {'★'.repeat(review.rating)}
              </div>
            </div>
          ))}
        </div>
         <a href="#kontakt" onClick={(e) => scrollToSection(e, "#kontakt")} className="mt-6 bg-yellow-400 text-gray-900 px-8 py-4 rounded-full shadow-lg font-semibold hover:bg-yellow-300 transition duration-300 transform hover:scale-105 hover:translate-y-0.5">Ja też chcę polepszyć swój angielski!</a>
      </section>

      <section id="cennik" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#0C1C8C] via-[#1A2A6C] to-[#6A0DAD] text-white text-center px-6 py-12">
        <h2 className="text-4xl font-bold mb-6">Cennik</h2>
        <p className="text-lg mt-4 max-w-2xl">Zapoznaj się z naszymi atrakcyjnymi cenami kursów. Oferujemy konkurencyjne stawki i elastyczne opcje płatności.</p>
        
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full max-w-5xl">
          <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl text-center border border-gray-200 transition-all hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800">Nauka Online</h3>
            <p className="text-4xl font-bold text-blue-600 mt-2">80 zł</p>
            <p className="text-sm text-gray-600 mt-2">za godzinę</p>
            <ul className="mt-4 text-gray-700">
              <li className="py-1 border-b">Lekcje 1 na 1</li>
              <li className="py-1 border-b">Interaktywne materiały</li>
              <li className="py-1">Dostęp do nagrań</li>
            </ul>
            <button className="mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">Zapisz się</button>
          </div>

          <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl text-center border border-blue-500 transition-all hover:scale-110 hover:shadow-3xl">
            <h3 className="text-2xl font-bold text-gray-800">Nauka Stacjonarna</h3>
            <p className="text-4xl font-bold text-blue-600 mt-2">90 zł</p>
            <p className="text-sm text-gray-600 mt-2">za godzinę</p>
            <ul className="mt-4 text-gray-700">
              <li className="py-1 border-b">Indywidualne spotkania</li>
              <li className="py-1 border-b">Materiały drukowane</li>
              <li className="py-1">Komfortowe miejsce nauki</li>
            </ul>
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">Zapisz się</button>
          </div>

          <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl text-center border border-gray-200 transition-all hover:scale-105 hover:shadow-3xl">
            <h3 className="text-2xl font-bold text-gray-800">Dojazd do Klienta</h3>
            <p className="text-4xl font-bold text-blue-600 mt-2">100 zł</p>
            <p className="text-sm text-gray-600 mt-2">za godzinę</p>
            <ul className="mt-4 text-gray-700">
              <li className="py-1 border-b">Lekcje w Twoim domu</li>
              <li className="py-1 border-b">Indywidualne podejście</li>
              <li className="py-1">Elastyczny grafik</li>
            </ul>
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">Zapisz się</button>
          </div>
        </div>
        
      </section>

      <section id="kontakt" className="min-h-[120vh] flex flex-col justify-center items-center bg-gradient-to-r from-gray-200 via-gray-50 to-white px-6 py-12 text-center animate-fadeIn">
      <h3 className="text-4xl font-extrabold text-gray-900 mb-8">Skontaktuj się ze mną</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        
        <div className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
          <FaPhone className="text-blue-500 text-3xl" />
          <a href="tel:+48507396383" className="text-lg text-gray-800 font-medium hover:text-blue-600">+48 507 396 383</a>
        </div>

        <div className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
          <FaEnvelope className="text-red-500 text-3xl" />
          <a href="mailto:englishdream@gmail.com" className="text-lg text-gray-800 font-medium hover:text-red-600">englishdream@gmail.com</a>
        </div>
        
        <div className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
          <FaWhatsapp className="text-green-500 text-3xl" />
          <a href="https://wa.me/48507396383" className="text-lg text-gray-800 font-medium hover:text-green-600">+48 507 396 383</a>
        </div>
        
        <div className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
          <FaInstagram className="text-pink-500 text-3xl" />
          <a href="https://www.instagram.com/instTestAccount" className="text-lg text-gray-800 font-medium hover:text-pink-600">@instTestAccount</a>
        </div>

        <div className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
          <FaFacebook className="text-blue-700 text-3xl" />
          <a href="https://www.facebook.com/testFacebookAccount" className="text-lg text-gray-800 font-medium hover:text-blue-700">testFacebookAccount</a>
        </div>
        
        <div className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
          <FaTiktok className="text-black text-3xl" />
          <a href="https://www.tiktok.com/@tikToktestAccount" className="text-lg text-gray-800 font-medium hover:text-black">@tikToktestAccount</a>
        </div>
      </div>

      {/* Informacje o firmie */}
      <div className="mt-10 w-full max-w-lg bg-white p-6 rounded-2xl shadow-lg text-left flex flex-col items-center transform transition duration-300 hover:scale-105">
        <FaBuilding className="text-gray-700 text-4xl mb-3" />
        <h4 className="text-2xl font-semibold text-gray-900 mb-4">Dane firmy</h4>
        <p className="text-lg text-gray-800 font-medium"><span className="font-semibold">English Dream Ewa Sieńko</span></p>
        <p className="text-lg text-gray-800 font-medium">NIP: <span className="font-semibold">12345678</span></p>
        <p className="text-lg text-gray-800 font-medium">REGON: <span className="font-semibold">66699999</span></p>
      </div>
        
        {/* Formularz kontaktowy */}
      <div className="mt-10 w-full max-w-lg bg-white p-6 rounded-2xl shadow-lg">
        <h4 className="text-2xl font-semibold text-gray-900 mb-4">Formularz Kontaktowy</h4>
        <form className="space-y-4" action="mailto:risen255@gmail.com" method="post" encType="text/plain">
          <input type="text" placeholder="Twoje imię" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input type="email" placeholder="Twój email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <textarea placeholder="Twoja wiadomość" rows="4" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">Wyślij wiadomość</button>
        </form>
      </div>
    </section>

      <footer className="text-center p-6 bg-gray-900 text-white">
        <p>&copy; 2025 Szkoła Języka Angielskiego. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
};

export default App;
