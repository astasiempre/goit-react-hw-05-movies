import axios from 'axios';

 export const fetchMoviesTrend = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=f326703671c67c1053655f90f4549576`
  );
  
  return data.results;
}



export const fetchMoviebyId = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=f326703671c67c1053655f90f4549576`
  );
  
  return data;
}

export const findMovieCastbyID = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=f326703671c67c1053655f90f4549576`
  );
 
  return data.cast;
}

export const findMovieReviewsbyID = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=f326703671c67c1053655f90f4549576`
  );
  
  return data.results;
}

export const findMovieByQuery = async (query) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=f326703671c67c1053655f90f4549576&query=${query}`
  );
  console.log(data.results)
  return data.results;
}