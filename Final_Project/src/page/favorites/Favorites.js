import { useContext } from "react";
import FavoriteCard from "../../components/favoriteCard/FavoriteCard";
import Header from "../../components/header";
import { UserContext } from "../../context/UserContext";
import * as styles from "./Favorites.module.css";

function Favorites() {
  const {favorites, setFavorites} = useContext(UserContext)
  function deleteUser(id) {
    setFavorites(favorites.filter((favorite) => favorite.uid !== id));
  }
  return (
    <>
      <Header />
      <div className={styles.container}>
        {favorites.map((favorite) => (
          <FavoriteCard key={favorite.uid} img={favorite.img} username={favorite.username} {...favorite} deleteUser={deleteUser} />
        ))}
      </div>
    </>
  );
}

export default Favorites;
