import UserCard from "../../components/userCard/userCard";
import styles from "./dashboard.module.css";
const data = [
  {
    username: "George",
  },
  {
    username: "Niko",
  },
  {
    username: "George1",
  },
  {
    username: "Niko1",
  }
];

function Dashboard() {
  return (
    <>
      <main className={styles.container}>
        {data.map((dat) => {
          return <UserCard key={dat.username} username={dat.username} />;
        })}
      </main>
    </>
  );
}

export default Dashboard;
