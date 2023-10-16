import { Suspense, lazy } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { StyledAppContainer } from './App.styled';
import Loader from './Loader/Loader';


const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDatailesPage = lazy(() => import('pages/MovieDatailesPage'));

export const App = () => {
  return (
    <>
      <StyledAppContainer>
        <header>
          <nav>
            <NavLink className="header-link" to="/">
              Home
            </NavLink>
            <NavLink className="header-link" to="/movies">
              Movies
            </NavLink>
          </nav>
        </header>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId/*" element={<MovieDatailesPage />} />
          </Routes>
        </Suspense>
      </StyledAppContainer>
    </>
  );
};
export default App;
