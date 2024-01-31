import React, { useState } from "react";
import { useProfile } from "../../contexts/profile.context";
import { useAuth } from "../../contexts/auth.context";
import LikeButton from "../../components/LikeButton/LikeButton";
import MovieList from "../../components/MovieList/MovieList";

function MyPage() {
  //로그인 여부 따지기
  // const { isLoggedIn } = useAuth();

  const origin = "https://image.tmdb.org/t/p/w500";

  const { updateNickName, likedMovies } = useProfile();
  const [editingNickName, setEditingNickName] = useState("");
  const handleUpdateNickName = () => {
    updateNickName(editingNickName);
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="nickName">닉네임</label>
        <input
          id="nickName"
          type="text"
          onChange={(e) => setEditingNickName(e.target.value)}
          value={editingNickName}
        />
        <button onClick={handleUpdateNickName}>수정</button>
      </form>
      <ul>
        <MovieList title="내가 찜한 목록" movies={likedMovies} />
        {/* // <li key={likedMovie.id}>
          //   <div>{likedMovie.id}</div>
          //   <div>{likedMovie.title}</div>
          //   <img src={`${origin}${likedMovie.poster_path}`} alt="poster" />
          //   <LikeButton movie={likedMovie} />
          // </li> */}
      </ul>
    </div>
  );
}

export default MyPage;
