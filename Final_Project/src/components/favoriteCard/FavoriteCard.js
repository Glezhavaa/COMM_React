import * as styles from "./FavoriteCard.module.css";

function FavoriteCard({img, username, uid, deleteUser}) {
  return (
    <div className={styles.card}>
      <img
        src={img}
        alt="favorite img"
      ></img>
      <p>Username: {username}</p>
      <button className={styles.btn} onClick={() => deleteUser(uid)}>Remove</button>
    </div>
  );
}

export default FavoriteCard;
