import { useEffect } from "react";

const FreeEbookIrregularVerbs = () => {
  useEffect(() => {
    window.location.href = "https://tinyurl.com/englishdreamebook";
  }, []);

  return <p>Ładowanie...</p>;
};

export default FreeEbookIrregularVerbs;