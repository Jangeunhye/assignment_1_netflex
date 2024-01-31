import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";
import { useProfile } from "../../contexts/profile.context";

function Header() {
  const { isLoggedIn, logOut } = useAuth();
  const { nickName } = useProfile();

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        NETFLEX
      </Link>
      <nav>
        <ul>
          {isLoggedIn ? (
            <li>
              <ul>
                {nickName && <li>{`${nickName}님`}</li>}
                <li>
                  <Link to={"/my-page"}>마이페이지</Link>
                </li>
                <li>
                  <button onClick={logOut}>로그아웃</button>
                </li>
              </ul>
            </li>
          ) : (
            <li>
              <Link to="/sign-in">로그인하기</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
