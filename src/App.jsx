import React, { useState, useEffect } from "react";
import { FaPhone, FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope, FaFacebook, FaBuilding } from "react-icons/fa";
import { CheckCircle, Laptop, BookOpen, User, Home, Globe, Sofa } from "lucide-react";

const App = () => {
  const [headline, setHeadline] = useState("");
  const [fade, setFade] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [transparentHeader, setTransparentHeader] = useState(true);

  const headlines = [

    "Ucz się angielskiego z native speaker!",
    "Rozwijaj swoje umiejętności językowe!",
    "Bądź mistrzem języka angielskiego!"
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
    }, 6000);
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
        const omnieSection = document.getElementById("omnie");
        if (omnieSection) {
          const omnieTop = omnieSection.getBoundingClientRect().top;
          const omnieBottom = omnieSection.getBoundingClientRect().bottom;

          if (omnieTop < 50 && omnieBottom > 50) {
            setBgOpacity(1);
          } else if (omnieTop > 50) {
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
      const header = document.querySelector("header"); // Pobranie nagłówka
      if (section && header) {
        const headerHeight = header.offsetHeight; // Pobranie wysokości nagłówka
        window.scrollTo({
          top: section.offsetTop - headerHeight, // Przewinięcie z korektą
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
             {/* Logo */}
             <img
               src="/images/logo.png"
               alt="Logo"
               className="absolute left-6 top-1/2 transform -translate-y-1/2 h-12 w-auto z-50 cursor-pointer"
               onClick={(e) => scrollToSection(e, "#englishdream")}
             />

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
               {["English Dream", "O mnie", "Oferta", "Współpraca", "Opinie", "Cennik", "Kontakt"].map((text, index) => {
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

      <section
        id="englishdream"
        className="h-screen flex flex-col justify-center items-center text-white text-center px-6 bg-cover bg-center relative bg-gradient-to-b from-[#0C1C8C] to-transparent
          bg-[url('/images/background_mobile.jpg')] md:bg-[url('/images/background_desktop.jpg')]"
      >
        <div className="absolute inset-0 backdrop-brightness-75"></div>

        <div className="relative z-10 flex flex-col items-center">
          <h1
            className={`min-h-[80px] text-5xl font-extrabold transition-all duration-1000 ease-in-out transform ${
              fade ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            {headline}
          </h1>

          <p className="text-xl mt-4 max-w-2xl min-h-[60px]">
            Dołącz do mojej szkoły i rozwijaj swoje umiejętności językowe w nowoczesny sposób.
          </p>

          <a
            href="#kontakt"
            onClick={(e) => scrollToSection(e, "#oferta")}
            className="mt-6 bg-yellow-400 text-gray-900 px-8 py-4 rounded-full shadow-lg font-semibold hover:bg-yellow-300 transition duration-300 transform hover:scale-105 hover:translate-y-0.5"
          >
            Dowiedz się więcej!
          </a>
        </div>
      </section>

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
            zaczyna się w Białymstoku, ale mając 11 lat, przeprowadziłam się do Wielkiej Brytanii. Tam
            skończyłam szkołę, a później studia magisterskie z architektury.
    	  </p>
    	  <p className="text-lg mt-4 max-w-xl mx-auto md:mx-0">
    		Po powrocie do Polski w 2020 roku dzieliłam swój czas między pracę jako architekt i nauczanie
            angielskiego. W końcu pasja do języków wygrała – w 2024 roku zaczęłam uczyć na pełen etat.
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
        <h2 className="text-4xl font-bold mb-6">Współpraca dla firm</h2>
        <p className="text-lg mt-4 max-w-2xl">Współpracuję zarówno z klientami indywidualnymi, jak i firmami, oferując szkolenia językowe dostosowane do ich specyficznych potrzeb. Organizuję kursy językowe dla branż takich jak IT, marketing oraz kierunki techniczne.</p>
        <p className="text-lg mt-4 max-w-2xl">Współpracuję również ze szkołami, dostarczając skuteczne metody nauczania oraz wspierając nauczycieli i uczniów w rozwijaniu umiejętności językowych.</p>
        <p className="text-lg mt-4 max-w-2xl">Jeśli interesuje Cię współpraca, skontaktuj się ze mną! Razem ustalimy najlepszą formę współpracy oraz elastyczne warunki wynagrodzenia dostosowane do Twoich potrzeb.</p>
        <p className="text-lg mt-4 max-w-2xl">Gwarantuję wysoką jakość nauczania oraz podejście dopasowane do unikalnych wymagań każdego klienta. Moje szkolenia są skoncentrowane na praktycznych umiejętnościach językowych, które można natychmiast zastosować w codziennej pracy i życiu.</p>
        <p className="text-lg mt-4 max-w-2xl">Dzięki mojemu doświadczeniu i nowoczesnym metodom nauczania pomogę Ci lub Twojemu zespołowi osiągnąć językową pewność siebie w każdej sytuacji – zarówno w kontaktach biznesowych, jak i codziennej komunikacji.</p>
        <p className="text-lg mt-4 max-w-2xl font-semibold">Skontaktuj się ze mną już dziś, aby wspólnie zaplanować skuteczny i elastyczny program nauki!</p>
        <a href="#kontakt" onClick={(e) => scrollToSection(e, "#kontakt")} className="mt-6 bg-yellow-400 text-gray-900 px-8 py-4 rounded-full shadow-lg font-semibold hover:bg-yellow-300 transition duration-300 transform hover:scale-105 hover:translate-y-0.5">Zapytaj o ofertę</a>
      </section>

      <section id="opinie" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white text-center px-6 py-12">
        <h2 className="text-4xl font-bold mb-6">Opinie</h2>
        <p className="text-lg mt-4 max-w-2xl">Przeczytaj, co moi kursanci mówią o swoich doświadczeniach z nauką angielskiego we współpracy ze mną!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full max-w-6xl">
          {[{name: 'Ewa Dawidowicz', opinion: 'Polecamy z całego serca! Mega efekty! Syn z oceny dostatecznej podciągnięty na bardzo dobrą! Bardzo chętnie uczestniczy w zajęciach :-)', rating: 5},
            {name: 'Paula Kazimierczak', opinion: 'Bardzo polecam zajęcia z Ewą, wprowadza przyjemną atmosferę i nie czujesz się oceniany ☺️ Ma cierpliwość anielską i wszystko tłumaczy aż do zrozumienia ☺️ Bardzo polecam !', rating: 5},
            {name: 'Hania Burzyńska', opinion: 'Widzę u siebie ogromne postępy, jestem bardzo zadowolona z zajęć, które zawsze są w przyjemnej atmosferze. Bardzo polecam!', rating: 5},
            {name: 'Kamila Kropiwnicka', opinion: 'Jesteśmy bardzo zadowoleni z zajęć na które uczęszcza nasz syn. Widać ogromne postępy w nauce. Syn również uważa że zajęcia są bardzo ciekawe i przynoszą mu wiele korzyści. Polecam 😊', rating: 5},
            {name: 'KTS Kluczyk', opinion: 'Syn uczęszcza do Pani Ewy na lekcje j. angielskiego. Widać Jej zaangażowanie oraz wiedzę. Polecam!', rating: 5},
            {name: 'Marta Kow-cka', opinion: 'Polecam z całego serca ❤️ córka bardzo chętnie uczęszcza na zajęcia. Lekcje prowadzone w swobodnej atmosferze, bardzo ciekawie prowadzone. Nacisk położono na komunikacje.', rating: 5}]
            .map((review, index) => (
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
        <p className="text-lg mt-4 max-w-2xl">Zapoznaj się z atrakcyjnymi cenami. Oferuję konkurencyjne stawki i elastyczne godziny. Szukasz innej formy zajęć? Skontaktuj się ze mną!</p>
        
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full max-w-5xl">
          <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl text-center border border-gray-200 transition-all hover:scale-105 hover:shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Nauka Online</h3>
              <p className="text-4xl font-bold text-blue-600 mt-2">80 zł</p>
              <p className="text-sm text-gray-600 mt-2">Długość zajęć 50 min</p>

              <ul className="mt-6 space-y-3 text-left text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  Lekcje 1 na 1
                </li>
                <li className="flex items-center gap-2">
                  <Laptop className="w-5 h-5 text-blue-500" />
                  Interaktywne materiały
                </li>
                <li className="flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-500" />
                  Indywidualne podejście
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-500" />
                  Nauka bez wychodzenia z domu
                </li>
              </ul>
            </div>

            <a href="#kontakt" onClick={(e) => scrollToSection(e, "#kontakt")} className="mt-10 inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">Wybierz</a>
          </div>

          <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl text-center border border-blue-500 transition-all hover:scale-110 hover:shadow-3xl flex flex-col justify-between">
           <div>
             <h3 className="text-2xl font-bold text-gray-800">Nauka Stacjonarna</h3>
             <p className="text-4xl font-bold text-blue-600 mt-2">90 zł</p>
             <p className="text-sm text-gray-600 mt-2">Długość zajęć 50 min</p>

             <ul className="mt-6 space-y-3 text-left text-gray-700">
               <li className="flex items-center gap-2">
                 <CheckCircle className="w-5 h-5 text-blue-500" />
                 Lekcje 1 na 1
               </li>
               <li className="flex items-center gap-2">
                 <BookOpen className="w-5 h-5 text-blue-500" />
                 Materiały drukowane
               </li>
               <li className="flex items-center gap-2">
                 <User className="w-5 h-5 text-blue-500" />
                 Indywidualne podejście
               </li>
               <li className="flex items-center gap-2">
                 <Home className="w-5 h-5 text-blue-500" />
                 Komfortowe miejsce nauki
               </li>
             </ul>
           </div>

           <a href="#kontakt" onClick={(e) => scrollToSection(e, "#kontakt")} className="mt-10 inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">Wybierz</a>
         </div>

          <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl text-center border border-gray-200 transition-all hover:scale-105 hover:shadow-3xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Dojazd do Klienta</h3>
              <p className="text-4xl font-bold text-blue-600 mt-2">100 zł</p>
              <p className="text-sm text-gray-600 mt-2">Długość zajęć 50 min</p>

              <ul className="mt-6 space-y-3 text-left text-gray-700">
                <li className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-blue-500" />
                  Lekcje w Twoim domu
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-500" />
                  Materiały drukowane
                </li>
                <li className="flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-500" />
                  Indywidualne podejście
                </li>
                <li className="flex items-center gap-2">
                  <Sofa className="w-5 h-5 text-blue-500" />
                  Nauka w zaciszu własnego domu
                </li>
              </ul>
            </div>

            <a href="#kontakt" onClick={(e) => scrollToSection(e, "#kontakt")} className="mt-10 inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">Wybierz</a>
          </div>
        </div>
      </section>

      <section id="kontakt" className="min-h-[120vh] flex flex-col justify-center items-center bg-gradient-to-r from-gray-200 via-gray-50 to-white px-6 py-12 text-center animate-fadeIn">
      <h3 className="text-4xl font-extrabold text-gray-900 mb-8">Skontaktuj się ze mną</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        
        <div className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
          <FaPhone className="text-blue-500 text-3xl" />
          <a href="tel:+48508552122" className="text-lg text-gray-800 font-medium hover:text-blue-600">+48 508 552 122</a>
        </div>

        <div className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
          <FaEnvelope className="text-red-500 text-3xl" />
          <a href="mailto:englishdream@gmail.com" className="text-base text-gray-800 font-medium hover:text-red-600">contact.englishdream@gmail.com</a>
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
      <div className="mt-10 w-full max-w-lg bg-white p-6 rounded-2xl shadow-lg text-left flex flex-col items-center transform transition duration-300 hover:scale-105">
        <FaBuilding className="text-gray-700 text-4xl mb-3" />
        <h4 className="text-2xl font-semibold text-gray-900 mb-4">Dane firmy</h4>
        <p className="text-lg text-gray-800 font-medium"><span className="font-semibold">EnglishAcademy Ewa Sieńko Korepetycje</span></p>
        <p className="text-lg text-gray-800 font-medium">NIP: <span className="font-semibold">5423494058</span></p>
        <p className="text-lg text-gray-800 font-medium">REGON: <span className="font-semibold">540475015</span></p>
      </div>
        
        {/* Formularz kontaktowy */}
        {/*
      <div className="mt-10 w-full max-w-lg bg-white p-6 rounded-2xl shadow-lg">
        <h4 className="text-2xl font-semibold text-gray-900 mb-4">Formularz Kontaktowy</h4>
        <form className="space-y-4" action="mailto:risen255@gmail.com" method="post" encType="text/plain">
          <input type="text" placeholder="Twoje imię" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input type="email" placeholder="Twój email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <textarea placeholder="Twoja wiadomość" rows="4" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">Wyślij wiadomość</button>
        </form>
      </div>*/}
    </section>

      <footer className="text-center p-6 bg-gray-900 text-white">
        <p>&copy; 2025 English Dream - Szkoła Języka Angielskiego. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
};

export default App;
