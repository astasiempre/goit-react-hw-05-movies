import { NavLink, Routes, Route, useLocation, Link } from 'react-router-dom';
import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviebyId } from '../services/movies';
import { StyledMovieDetContainer } from './MovieDetailedPage.styled';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
const CastPage = lazy(() => import('pages/CastPage'));
const ReviewsPage = lazy(() => import('pages/ReviewsPage'));
const MovieDetailsPage = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  const [movieDetailse, setMovieDetailse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const movieData = await fetchMoviebyId(movieId);
        setMovieDetailse(movieData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetailse) {
    return <Loader />;
  }
  const releaseYear = movieDetailse.release_date.split('-')[0];
  const genreNames = movieDetailse.genres.map(genre => genre.name).join(', ');
  return (
    <>
      <Link to={backLinkHref.current}>
        <button type="button">Go back</button>
      </Link>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {movieDetailse !== null && (
        <StyledMovieDetContainer>
          <img
            className="movieImg"
            src={`https://image.tmdb.org/t/p/w300${movieDetailse.poster_path}`}
            alt={movieDetailse.title}
          />
          <div>
            <h1>{`${movieDetailse.title} (${releaseYear})`}</h1>
            <p>User score: {Math.round(movieDetailse.vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{movieDetailse.overview}</p>
            <h3>Genres</h3>
            <p>{genreNames}</p>
          </div>
        </StyledMovieDetContainer>
      )}

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
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
