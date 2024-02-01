import React from "react";
import styles from "./MovieListItem.module.scss";
import { Link } from "react-router-dom";
import LikeButton from "../LikeButton/LikeButton";

function MovieListItem({ movie }) {
  const origin = "https://image.tmdb.org/t/p/w500";
  return (
    <div className={styles.container}>
      <Link to={`/movies/${movie.id}`} className={styles.link}>
        <img src={`${origin}${movie.backdrop_path}`} alt="movie-img" />
      </Link>
      <div className={styles.titleBox}>
        <h2 className={styles.title}>{movie.title}</h2>
        <LikeButton movie={movie} />
      </div>
    </div>
  );
}

export default MovieListItem;
