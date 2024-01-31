import React, { useContext, useState } from "react";
import styles from "./SignInPage.module.scss";
import { useAuth } from "../../contexts/auth.context";
import { useNavigate } from "react-router-dom";

function SignInPage() {
  const navigate = useNavigate();

  const { isLoggedIn, signIn } = useAuth();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleClickSignIn = () => {
    if (!username || !password) {
      return alert("아이디 또는 비밀번호를 입력해주세요");
    }
    if (username === "udemy" && password === "udemy") {
      signIn();
    } else {
      return alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <div className={styles.container}>
      {isLoggedIn ? (
        navigate("/")
      ) : (
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="아이디를 입력해주세요"
            className={styles.input}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해주세요"
            className={styles.input}
          />
          <button className={styles.button} onClick={handleClickSignIn}>
            로그인하기
          </button>
        </form>
      )}
    </div>
  );
}

export default SignInPage;
