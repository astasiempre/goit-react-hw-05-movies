import React, {useState, useEffect } from 'react';
import {Link, useLocation, useSearchParams } from 'react-router-dom';

import { findMovieByQuery } from '../services/movies';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const MoviesPage = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {

      try {
        setIsLoading(true);
        const movieData = await findMovieByQuery(query); ;
console.log(movieData);
        setMovies(movieData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  
   

  }, [query]);
  
  const handleFormSubmit = (event) => {
    
    event.preventDefault();
    
    const searchValue = event.target.searchMovieTitle.value;

    setSearchParams({ query: searchValue });
   
  }

  //  const releaseYear = movie.release_date.split('-')[0];
  //  const genreNames = movie.genres.map(genre => genre.name).join(', ');
  return (
    <>
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          <input type="text" name="searchMovieTitle" required />
          <button type="submit">Search</button>
        </label>
      </form>
    </div>
<section>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
        {movies !== null && movies.map(movie => ( 
      
          <Link state={{ from: location }} to={`/movies/${movie.id}`} key={movie.id}>
          <li>{movie.title}</li>
        </Link>
        )
       
      )}
    </section>
    </>

  );
};

export default MoviesPage;



