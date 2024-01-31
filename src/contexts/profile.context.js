import { createContext, useContext, useState } from "react";

const initialValue = {
  nickName: "",
  likedMovies: [],
};
const ProfileContext = createContext(initialValue);

export function ProfileProvider({ children }) {
  const [nickName, setNickName] = useState("");
  const [likedMovies, setLikedMovies] = useState([]);

  const updateNickName = (nickName) => setNickName(nickName);

  const addLikedMovies = (movie) => {
    setLikedMovies((current) => [...current, movie]);
  };

  const deleteLikedMovies = (movie) =>
    setLikedMovies((current) =>
      current.filter((likedMovie) => likedMovie.id !== movie.id)
    );

  const value = {
    nickName,
    updateNickName,
    likedMovies,
    addLikedMovies,
    deleteLikedMovies,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

export const useProfile = () => useContext(ProfileContext);

export default ProfileContext;
