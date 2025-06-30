import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RedirectToFreeEbook from "./pages/RedirectToFreeEbook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/darmowy-ebook" element={<RedirectToFreeEbook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;