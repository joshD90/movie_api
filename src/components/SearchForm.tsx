import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { fetchApi } from "../utils/fetchApi";

//our type for our props
type Props = {
  setError: (val: string) => void;
};

const SearchForm: React.FC<Props> = ({ setError }) => {
  const [searchTerm, setSearchTerm] = useState<string | null>();
  const navigate = useNavigate();

  //on clicking the search button we fetch data from our api and redirect to a new page passing through the data
  const searchMovie = (e: any): void => {
    e.preventDefault();
    if (!searchTerm) {
      setError("Try typing a movie before searching");
      return;
    }
    //returns a promise so use .then to grab this data
    fetchApi("SearchMovie", searchTerm)
      .then((data) => navigate("/results/movie", { state: data }))
      .catch((err) =>
        setError(
          "There was an error in searching for the movie details" + err.message
        )
      );
  };

  return (
    <>
      <form className="bg-stone-600 rounded-lg w-1/3 min-w-fit">
        <div className="flex flex-col justify-start p-5 ">
          <label htmlFor="search" className="text-stone-200">
            Movie Name
          </label>
          <input
            type="text"
            name="search"
            placeholder="Insert Movie Name Here"
            className="p-2 text-stone-800 rounded-md"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full flex items-center justify-center p-5 pt-0">
          <button
            onClick={searchMovie}
            className="bg-lime-700 p-2 rounded-md hover:bg-lime-600 text-white"
          >
            Search Movie
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchForm;
