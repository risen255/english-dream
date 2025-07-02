import { HashRouter , Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FreeEbookIrregularVerbs from "./pages/FreeEbookIrregularVerbs";
import FreeEbookPlaceholder from "./pages/FreeEbookPlaceholder";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/darmowy-ebook-czasowniki-nieregularne" element={<FreeEbookIrregularVerbs />} />
        <Route path="/darmowy-ebook-placeholder" element={<FreeEbookPlaceholder />} />
      </Routes>
    </HashRouter>
  );
}

export default App;