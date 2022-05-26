import styles from "./dashboard.module.css";
import UserCard from "../../components/userCard/userCard";
import Header from "../../components/header";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function Dashboard() {
  const { gitUsers, loading, error, perPage, setPerPage } =
    useContext(UserContext);
  
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
              return <UserCard key={gitUser.id} gitUser={gitUser}/>;
            })
          )}
        </div>
        <button
          className={styles.btn}
          onClick={() => {
            setPerPage(perPage + 20);
          }}
        >
          Load More
        </button>
      </main>
    </>
  );
}

export default Dashboard;
