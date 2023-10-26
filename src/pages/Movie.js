import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const movieId = params.id
  
  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(r => r.json())
    .then(movieData => setMovie(movieData))
  }, [movieId])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Movie Time: {movie.time}</p>
        <p>Genres:</p>
        {movie.genres ? (
          movie.genres.map((genre) => (
            <span key={genre}>{genre},</span>
          ))
        )
          : (null)
        }
      </main>
    </>
  );
};

export default Movie;
