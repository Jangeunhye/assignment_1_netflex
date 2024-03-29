import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";
import { useProfile } from "../../contexts/profile.context";
import profilePath from "../../assets/images/사람아이콘.png";

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
            <li className={styles.nav}>
              {nickName && (
                <div className={styles.nickName}>{`${nickName}님`}</div>
              )}
              <div className={styles.dropdown}>
                <img
                  className={styles.profileIcon}
                  src={profilePath}
                  alt="profile-icon"
                />
                <div className={styles.dropdownContent}>
                  <Link className={styles.myPage} to={"/my-page"}>
                    마이페이지
                  </Link>

                  <button className={styles.logOut} onClick={logOut}>
                    로그아웃
                  </button>
                </div>
              </div>
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
