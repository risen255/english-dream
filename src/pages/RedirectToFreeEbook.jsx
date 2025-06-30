import { useEffect } from "react";

const RedirectToFreeEbook = () => {
  useEffect(() => {
    window.location.href = "https://tinyurl.com/englishdreamebook";
  }, []);

  return <p>Ładowanie...</p>;
};

export default RedirectToFreeEbook;