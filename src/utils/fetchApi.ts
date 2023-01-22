import axios from "axios";

type SingleResult = {
  description: string;
  id: string;
  image: string;
  resultType: string;
  title: string;
};

export type MovieData = {
  description: string;
  image: string;
  title: string;
  searchedFor: string;
};

//this api will fetch the data using async await
export const fetchApi = async (
  searchType: string,
  searchTerm: string
): Promise<any> => {
  try {
    const response = await axios.get(
      `https://imdb-api.com/en/API/${searchType}/k_9tpl83qh/${searchTerm}`
    );

    const movie: SingleResult = response.data.results[0];
    //prepare our data that we want to use
    const movieData: MovieData = {
      description: movie.description,
      image: movie.image,
      searchedFor: response.data.expression,
      title: movie.title,
    };
    //response represents a promise that is being returned
    return movieData;
  } catch (error) {
    //even though the catch does not return a promise this is ok for async await
    console.log(error);
    return error;
  }
};
