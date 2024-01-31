import React, { useEffect, useState } from "react";
import { useProfile } from "../../contexts/profile.context";
import { useAuth } from "../../contexts/auth.context";

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
        <button onClick={handleClickLikedButton}>
          {isLiked ? "취소" : "찜"}
        </button>
      ) : null}
    </div>
  );
}

export default LikeButton;
