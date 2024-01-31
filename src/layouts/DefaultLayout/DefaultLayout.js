import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import styles from "./DefaultLayout.module.scss";
import { useAuth } from "../../contexts/auth.context";
function DefaultLayout() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
