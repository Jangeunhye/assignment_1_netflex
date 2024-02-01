import React, { useEffect, useState } from "react";
import { useProfile } from "../../contexts/profile.context";
import { useAuth } from "../../contexts/auth.context";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./MyPage.module.scss";
function MyPage() {
  const { isLoggedIn } = useAuth();
  const { nickName, updateNickName, likedMovies } = useProfile();
  const [editingNickName, setEditingNickName] = useState(nickName);
  const handleUpdateNickName = () => {
    updateNickName(editingNickName);
  };

  return (
    <div className={styles.wrapper}>
      {isLoggedIn ? (
        <div className={styles.container}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <h2>닉네임 수정</h2>
            <label className={styles.label} htmlFor="nickName">
              닉네임
            </label>
            <input
              id="nickName"
              className={styles.nickName}
              type="text"
              onChange={(e) => setEditingNickName(e.target.value)}
              value={editingNickName}
            />
            <button
              className={styles.updateButton}
              onClick={handleUpdateNickName}
            >
              수정
            </button>
          </form>
          <ul>
            <MovieList title="내가 찜한 목록" movies={likedMovies} />
          </ul>
        </div>
      ) : (
        <div className={styles.logOutResult}>로그아웃 되었습니다.</div>
      )}
    </div>
  );
}

export default MyPage;
