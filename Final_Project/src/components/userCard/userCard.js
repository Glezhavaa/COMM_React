import styles from "./userCard.module.css";
import { Link } from "react-router-dom";
import ROUTES from "../../config/routes";

function UserCard(username) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img
          className={styles.userPhoto}
          src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"
          alt="user img"
        ></img>
      </div>
      <p>{`UserName: ${username.username}`}</p>
      <p>Repositories</p>
      <p>Followers</p>
      <p>Following</p>
      <Link to={ROUTES.USER.replace(":name", `${username.username}`)}>
        <button className={styles.btn}>See More</button>
      </Link>
    </div>
  );
}

export default UserCard;
