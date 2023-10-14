// import React from 'react';
// import { useState, useEffect } from 'react';
// import { fetchMoviesTrend } from '../services/movies.js';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//  const [movies, setMovies] = useState([]);

//  useEffect(() => {
//    const fetchMovies = async () => {
//      const moviesData = await fetchMoviesTrend();
//      setMovies(moviesData);
//    };

//    fetchMovies();
//  }, []);

//   return (
//     <div>
//       <h1>Tranding today</h1>
//           {movies.map(movie => (
//           <link to={`/movies/${movie.id}`}>
//         <div key={movie.id}>{movie.title}</div>
//               </link>
//       ))}
//     </div>
//   );
// }

// export default HomePage;

import React, { useState, useEffect } from 'react';
import { fetchMoviesTrend }  from '../services/movies';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await fetchMoviesTrend();
      setMovies( moviesData );
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {movies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <div>{movie.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;