import { useLocation, useNavigate } from "react-router";

import { MovieData } from "../utils/fetchApi";

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const movie: MovieData | null = location.state;

  if (!movie)
    return (
      <div className="bg-stone-800 w-full h-screen min-h-screen text-stone-50 flex items-center justify-center">
        <h1>There was an issue finding your Search Result</h1>
      </div>
    );

  return (
    <div className="bg-stone-800 w-full min-h-screen text-stone-50 flex flex-col items-center justify-around overflow-auto gap-5">
      <h1>Search Result for "{movie.searchedFor}"</h1>
      <img className="h-96" src={movie.image} />
      <h2>{movie.title}</h2>
      <h3 className="w-4/5 text-center">{movie.description}</h3>
      <button
        className="bg-lime-800 p-2 rounded-md hover:bg-lime-700"
        onClick={() => navigate("/")}
      >
        Return to Search
      </button>
    </div>
  );
};

export default Results;
