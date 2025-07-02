import { useEffect } from "react";

const FreeEbookPlaceholder = () => {
  useEffect(() => {
    window.location.href = "https://tinyurl.com/placeholder";
  }, []);

  return <p>Ładowanie...</p>;
};

export default FreeEbookPlaceholder;