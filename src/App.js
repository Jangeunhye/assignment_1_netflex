import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import styles from "./App.module.scss";
import MoviesDetailPage from "./pages/MoviesDetailPage";
import { AuthProvider } from "./contexts/auth.context";
import MyPage from "./pages/MyPage";
import { ProfileProvider } from "./contexts/profile.context";

function App() {
  return (
    <AuthProvider>
      <ProfileProvider>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/my-page" element={<MyPage />} />

            <Route path="/movies/:movieId" element={<MoviesDetailPage />} />
          </Route>
        </Routes>
      </ProfileProvider>
    </AuthProvider>
  );
}

export default App;
