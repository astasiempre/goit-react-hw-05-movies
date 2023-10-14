
import { NavLink, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviebyId } from '../services/movies';
import { StyledMovieDetContainer } from './MovieDetailedPage.styled';
import CastPage from './CastPage';
import Reviews from './ReviewsPage';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetails = await fetchMoviebyId(movieId);
        setMovie(movieDetails);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        // Handle error (e.g., display an error message to the user)
      }
    };

    if (movieId) {
      fetchMovieDetails();
    }
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>; // You can display a loading indicator while fetching data
  }
  const releaseYear = movie.release_date.split('-')[0];
  const genreNames = movie.genres.map(genre => genre.name).join(', ');
  return (
    <>
      <StyledMovieDetContainer>
        <img
          className="movieImg"
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <h1>{`${movie.title} (${releaseYear})`}</h1>
          <p>User score: {Math.round(movie.vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{genreNames}</p>
        </div>
      </StyledMovieDetContainer>
      <p>Additional information</p>
      <div>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="cast" element={<CastPage />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};

export default MovieDetailsPage;