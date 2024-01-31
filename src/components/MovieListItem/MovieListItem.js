import React, { useEffect, useState } from "react";
import styles from "./MovieListItem.module.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";
import { useProfile } from "../../contexts/profile.context";
import LikeButton from "../LikeButton/LikeButton";

function MovieListItem({ movie }) {
  const { isLoggedIn } = useAuth();
  const [isLiked, setIsLiked] = useState(false);
  const { likedMovies, addLikedMovies, deleteLikedMovies } = useProfile();

  const origin = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <Link to={`/movies/${movie.id}`} className={styles.link}>
        <img src={`${origin}${movie.backdrop_path}`} alt="movie-img" />
      </Link>
      <div className={styles.titleBox}>
        <h2 className={styles.title}>{movie.title}</h2>
        {/* {isLoggedIn && <LikeButton movie={movie} />} */}
      </div>
    </div>
  );
}

export default MovieListItem;
