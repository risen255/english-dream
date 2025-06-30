import { HashRouter , Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RedirectToFreeEbook from "./pages/RedirectToFreeEbook";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/darmowy-ebook" element={<RedirectToFreeEbook />} />
      </Routes>
    </HashRouter>
  );
}

export default App;