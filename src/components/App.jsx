

import { NavLink, Routes, Route } from 'react-router-dom';
import { StyledAppContainer } from './App.styled';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';





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

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="movies" element={<MoviesPage />}></Route>
        </Routes>
      </StyledAppContainer>
    </>
  );
};
export default App;
// const fetchMoviesTrend = async () => {
//   try {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/trending/movie/day?api_key=9f7b9f0f2a5f3e9c0b7e6f5d0f9e8a4c`
//     );
//     return response.data.results; // Assuming the movies data is inside the 'results' property
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return [];
//   }
// };