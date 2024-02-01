import React from "react";
import { useProfile } from "../../contexts/profile.context";
import { useAuth } from "../../contexts/auth.context";
import styles from "./LikeButton.module.scss";
import whiteHeart from "../../assets/images/흰하트.png";
import pinkHeart from "../../assets/images/핑크하트.png";

function LikeButton({ movie }) {
  const { isLoggedIn } = useAuth();

  const { likedMovies, addLikedMovies, deleteLikedMovies } = useProfile();
  const isLiked = likedMovies
    .map((likedMovie) => likedMovie.id)
    .includes(movie.id);

  const handleClickLikedButton = () => {
    if (isLiked) {
      deleteLikedMovies(movie);
    } else {
      addLikedMovies(movie);
    }
  };
  return (
    <div>
      {isLoggedIn ? (
        <button className={styles.likeButton} onClick={handleClickLikedButton}>
          {isLiked ? (
            <img className={styles.heart} src={pinkHeart} alt="핑크 하트" />
          ) : (
            <img className={styles.heart} src={whiteHeart} alt="흰 하트" />
          )}
        </button>
      ) : null}
    </div>
  );
}

export default LikeButton;
