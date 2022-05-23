import { useNavigate, useParams } from "react-router-dom";
import ROUTES from "../../config/routes";
import styles from "./UserPage.module.css";

function UserPage() {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <h1>Page for {name.toUpperCase()}</h1>
      <button className={styles.btn} onClick={() => navigate(ROUTES.MAIN)}>Go Back</button>
    </>
  );
}

export default UserPage;