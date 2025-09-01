import { HashRouter , Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Offer from "./pages/Offer";
import Courses from "./pages/Courses";
import Opinions from "./pages/Opinions";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import PresentSimpleBezSciemy from "./pages/PresentSimpleBezSciemy";
import ForDownload from "./pages/ForDownload";
import FreeEbookIrregularVerbs from "./pages/FreeEbookIrregularVerbs";
import FreeEbook5WaysWords from "./pages/FreeEbook5WaysWords";

function App() {
  return (
    <HashRouter>
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/o-mnie" element={<AboutMe />} />
        <Route path="/oferta" element={<Offer />} />
        <Route path="/kursy" element={<Courses />} />
        <Route path="/do-pobrania" element={<ForDownload />} />
        <Route path="/opinie" element={<Opinions />} />
        <Route path="/cennik" element={<Pricing />} />
        <Route path="/kontakt" element={<Contact />} />

        <Route path="/present-simple-bez-sciemy" element={<PresentSimpleBezSciemy />} />

        <Route path="/darmowy-ebook-czasowniki-nieregularne" element={<FreeEbookIrregularVerbs />} />
        <Route path="/darmowy-ebook-5-sposobow-na-nauke-angielskich-slowek" element={<FreeEbook5WaysWords />} />
      </Routes>
    </HashRouter>
  );
}

export default App;