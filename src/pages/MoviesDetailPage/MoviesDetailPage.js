import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./MoviesDetailPage.module.scss";
import api from "../../api/api";
import LikeButton from "../../components/LikeButton/LikeButton";

function MoviesDetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const origin = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    api.movies.getMovie(movieId).then((movie) => setMovie(movie));
  }, [movieId]);

  if (movie === null) return null;

  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={`${origin}${movie.poster_path}`}
        alt="poster"
      />
      <div className={styles.right}>
        <div className={styles.top}>
          <h1 className={styles.title}>{movie.title}</h1>
          <LikeButton movie={movie} />
        </div>

        <div className={styles.middle}>
          <div className={styles.rate}>⭐{movie.vote_average}</div>
          <ul className={styles.genres}>
            {movie.genres.map((genre) => (
              <li className={styles.genre} key={genre.id}>
                {genre.name}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.overview}>{movie.overview}</div>
      </div>
    </div>
  );
}

export default MoviesDetailPage;
