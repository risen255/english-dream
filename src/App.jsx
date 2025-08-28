import { HashRouter , Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Courses from "./pages/Courses";
import PresentSimpleBezSciemy from "./pages/PresentSimpleBezSciemy";
import ForDownload from "./pages/ForDownload";
import FreeEbookIrregularVerbs from "./pages/FreeEbookIrregularVerbs";
import FreeEbook5WaysWords from "./pages/FreeEbook5WaysWords";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/kursy" element={<Courses />} />
        <Route path="/present-simple-bez-sciemy" element={<PresentSimpleBezSciemy />} />

        <Route path="/do-pobrania" element={<ForDownload />} />
        <Route path="/darmowy-ebook-czasowniki-nieregularne" element={<FreeEbookIrregularVerbs />} />
        <Route path="/darmowy-ebook-5-sposobow-na-nauke-angielskich-slowek" element={<FreeEbook5WaysWords />} />
      </Routes>
    </HashRouter>
  );
}

export default App;