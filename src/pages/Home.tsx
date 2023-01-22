import { useState, useEffect } from "react";

import SearchForm from "../components/SearchForm";

const Home: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  //make the error message disappear after 5seconds
  useEffect(() => {
    if (error === null) return;
    setTimeout(() => {
      setError(null);
    }, 5000);
  }, [error]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-stone-800 text-stone-50">
      <p
        className={`bg-red-800 w-full p-2 text-white absolute top-0 text-center transition:opacity duration-500 ease-in-out ${
          error ? "opacity-100" : "opacity-0"
        }`}
      >
        {error}
      </p>
      <SearchForm setError={setError} />
    </div>
  );
};

export default Home;
