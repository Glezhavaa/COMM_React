import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/header";
import ROUTES from "../../config/routes";
import styles from "./UserPage.module.css";
import Organizations from "../../components/organizations/Organizations";
import { useEffect, useState } from "react";

function UserPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [orgs, setOrgs] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${name}`, {
      headers: {
        "Authorization": "token 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",
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  useEffect(() => {
    fetch(`https://api.github.com/users/${name}/orgs`, {
      headers: {
        "Authorization": "token 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",
      },
    })
      .then((response) => response.json())
      .then((data) => setOrgs(data));
  }, []);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <button className={styles.btn} onClick={() => navigate(ROUTES.MAIN)}>
          Go Back
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.user}>
          <div className={styles.userImg}>
            <img src={user.avatar_url} alt="user img" />
          </div>
          <div className={styles.bio}>
            <h3>
              Name: <span>{name.toUpperCase()}</span>
            </h3>
            <h3>
              Bio: <span>{user.bio}</span>
            </h3>
            <h3>
              Followers: <span>{user.followers}</span>
            </h3>
            <h3>
              Following: <span>{user.following}</span>
            </h3>
          </div>

          <div className={styles.organisations}>
            {/* {orgs.map((org) => {
              return (
                <Organizations
                  key={org.id}
                  orgImg={org.avatar_url}
                  orgName={org.login}
                />
              );
            })} */}
          </div>
        </div>
        <div className={styles.repositories}>
          <div className={styles.row}>
            <p>Name</p>
            <p>Stars</p>
            <p>Forks</p>
          </div>
          <div className={styles.row}>
            <p>Name</p>
            <p>Stars</p>
            <p>Forks</p>
          </div>
          <div className={styles.row}>
            <p>Name</p>
            <p>Stars</p>
            <p>Forks</p>
          </div>
          <div className={styles.row}>
            <p>Name</p>
            <p>Stars</p>
            <p>Forks</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserPage;
