import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import ROUTES from "../../config/routes";
import styles from "./SignInForm.module.css";

function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();
    try {
      await login(username, password);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.center}>Sign In</h1>
        <form>
          <div className={styles.row}>
            <label htmlFor="username">
              Username
              <input
                placeholder="Username"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.row}>
            <label htmlFor="password">
              Password
              <input
                placeholder="Password"
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
        </form>
        <div className={styles.buttonBox}>
          <button
            className={styles.signInBtn}
            onClick={submitHandler}
            disabled={!username || !password}
          >
            Sign In
          </button>
          <button
            className={styles.signInBtn}
            onClick={(e) => {
              e.preventDefault();
              navigate(`/${ROUTES.SIGN_UP}`);
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
