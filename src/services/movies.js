import axios from 'axios';

 const fetchMoviesTrend = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=f326703671c67c1053655f90f4549576`
  );
  console.log(data.results)
  return data.results;
};
export default fetchMoviesTrend;


const fetchMoviebyId = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=f326703671c67c1053655f90f4549576`
  );
  console.log(data)
  return data;
}

    