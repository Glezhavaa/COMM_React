import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/header";
import ROUTES from "../../config/routes";
import styles from "./UserPage.module.css";
import Organizations from "../../components/organizations/Organizations";
import { useEffect, useState } from "react";
import Repositories from "../../components/repositories/Repositories";

const GIT_TOKEN = process.env.REACT_APP_GIT_TOKEN;

function UserPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [orgs, setOrgs] = useState([]);
  const [repos, setRepos] = useState([]);
  const [userLoading, setUserLoading] = useState(false);
  const [userError, setUserError] = useState("");
  const [orgLoading, setOrgLoading] = useState(false);
  const [orgError, setOrgError] = useState("");
  const [repoLoading, setRepoLoading] = useState(false);
  const [repoError, setRepoError] = useState("");

  useEffect(() => {
    setUserLoading(true);
    fetch(`https://api.github.com/users/${name}`, {
      headers: {
        Authorization: `token ${GIT_TOKEN}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("something went wrong");
      })
      .then((data) => setUser(data))
      .catch((error) => setUserError(error.message))
      .finally(() => setUserLoading(false));
  }, []);

  useEffect(() => {
    setOrgLoading(true);
    fetch(`https://api.github.com/users/${name}/orgs?per_page=4`, {
      headers: {
        Authorization: `token ${GIT_TOKEN}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("something went wrong");
      })
      .then((data) => setOrgs(data))
      .catch((error) => setOrgError(error.message))
      .finally(() => setOrgLoading(false));
  }, []);

  useEffect(() => {
    fetch(`https://api.github.com/users/${name}/repos?per_page=4`, {
      headers: {
        Authorization: `token ${GIT_TOKEN}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((data) => setRepos(data))
      .catch((error) => setRepoError(error.message))
      .finally(() => setRepoLoading(false));
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
        {userError && <h1>{userError}</h1>}
        {userLoading ? (
          <h1>Loading ...</h1>
        ) : (
          <>
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
              {orgError && <h5>{orgError}</h5>}
              {orgLoading ? (
                <h5>Loading ...</h5>
              ) : (
                <div className={styles.organisations}>
                  {orgs.map((org) => {
                    return (
                      <Organizations
                        key={org.id}
                        orgImg={org.avatar_url}
                        orgName={org.login}
                      />
                    );
                  })}
                </div>
              )}
            </div>
            {repoError && <h5>{repoError}</h5>}
            {repoLoading ? (
              <h5>Loading ...</h5>
            ) : (
              <div className={styles.repositories}>
                {repos.map((repo) => {
                  return (
                    <Repositories
                      key={repo.id}
                      name={repo.name}
                      fork={repo.forks_count}
                      stars={repo.stargazers_count}
                      url={repo.full_name}
                    />
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default UserPage;
