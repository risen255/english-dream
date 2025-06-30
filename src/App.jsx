import { HashRouter , Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

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