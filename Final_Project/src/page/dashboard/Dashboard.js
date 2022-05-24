import styles from "./dashboard.module.css";
import { useState, useEffect } from "react";
import UserCard from "../../components/userCard/userCard";
import Header from "../../components/header";

function Dashboard() {
  const [gitUsers, setGitUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [perPage, setPerPage] = useState(20);
  const GIT_USER_API =
  `https://api.github.com/search/users?q=followers:%3E=1000&per_page=${perPage}`;


  useEffect(() => {
    setLoading(true);
    fetch(GIT_USER_API)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((data) => setGitUsers(data.items))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [perPage]);

  return (
    <>
    <Header />
      <main className={styles.container}>
        <div className={styles.container}>
          {error && <h1>{error}</h1>}
          {loading ? (
            <h1>Loading ... </h1>
          ) : (
            gitUsers.map((gitUser) => {
              return <UserCard key={gitUser.id} gitUser={gitUser} />;
            })
          )}
        </div>
        <button className={styles.btn} onClick={() => {setPerPage(perPage + 20)}}>Load More</button>
      </main>
    </>
  );
}

export default Dashboard;
