import styles from "./userCard.module.css";
import { Link } from "react-router-dom";
import ROUTES from "../../config/routes";

function UserCard({gitUser}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img
          className={styles.userPhoto}
          src={gitUser.avatar_url}
          alt="user img"
        ></img>
      </div>
      <p>{`Username: ${gitUser.login}`}</p>
      <p>Repositories</p>
      <p>Followers</p>
      <p>Following</p>
      <Link to={ROUTES.USER.replace(":name", `${gitUser.login}`)}>
        <button className={styles.btn}>See More</button>
      </Link>
    </div>
  );
}

export default UserCard;
