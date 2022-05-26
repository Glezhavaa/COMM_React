import styles from "./userCard.module.css";
import { Link } from "react-router-dom";
import ROUTES from "../../config/routes";
import { useEffect, useState } from "react";

const GIT_TOKEN = process.env.REACT_APP_GIT_TOKEN;

function UserCard({ gitUser }) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${gitUser.login}`, {
      headers: {
        Authorization: `token ${GIT_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

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
      <p>{`Repositories: ${user.public_repos}`}</p>
      <p>{`Followers:  ${user.followers}`}</p>
      <p>{`Following: ${user.following}`}</p>
      <Link to={ROUTES.USER.replace(":name", `${gitUser.login}`)}>
        <button className={styles.btn}>See More</button>
      </Link>
    </div>
  );
}

export default UserCard;
