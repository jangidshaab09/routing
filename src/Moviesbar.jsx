import React, { useState } from 'react';
import axios from 'axios';

function Movie() {
  const [movieName, setMovieName] = useState("");
  const [movie, setMovie] = useState([]);
  const url = 'https://image.tmdb.org/t/p/original';

  function handleSubmit(e) {
    e.preventDefault();

    axios.get(`https://api.themoviedb.org/3/search/movie`, {
      params: {
        query: movieName,
        api_key: 'f421894f784d2d2a138bf8c8a8a77a2e', // Your API key
        include_adult: false,
        language: 'en-US',
        page: 1
      }
    })
    .then((res) => {
      setMovie(res.data.results);
      console.log(res.data.results[0]);
    })
    .catch((error) => {
      console.error("Error fetching movie:", error);
    });
  }

  return (
    <>
      <h1>Search Movies</h1>
      <input type="text" placeholder="Enter a movie name" value={movieName} onChange={(e) => setMovieName(e.target.value)} />
      <button onClick={handleSubmit}>Get Movie</button>
      {movie.length > 0 ? (
        <div>
          <img src={url + movie[0].poster_path} alt={movie[0].title} />
          <h2>{movie[0].title}</h2>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Movie;
