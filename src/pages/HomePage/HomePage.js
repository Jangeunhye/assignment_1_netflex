import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList";
import styles from "./HomePage.module.scss";
import api from "../../api/api";

function HomePage({ isLoggedIn }) {
  const [movies, setMovies] = useState({ nowPlaying: [], topRated: [] });

  useEffect(() => {
    Promise.all([
      api.movies.getMovies("nowPlaying"),
      api.movies.getMovies("topRated"),
    ]).then(([nowPlaying, topRated]) => setMovies({ nowPlaying, topRated }));
  }, []);
  return (
    <div className={styles.page}>
      <MovieList
        title="현재 상영작"
        movies={movies.nowPlaying}
        isLoggedIn={isLoggedIn}
      />
      <MovieList
        title="평점이 높은 영화"
        movies={movies.topRated}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
}

export default HomePage;
