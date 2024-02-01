import React from "react";
import Movie from "../MovieListItem";
import styles from "./MovieList.module.scss";
import { useAuth } from "../../contexts/auth.context";
import LikeButton from "../LikeButton/LikeButton";

function MovieList({ title, movies }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.movieList}>
        {movies.map((movie) => (
          <li className={styles.bottom} key={movie.id}>
            <Movie movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MovieList;
