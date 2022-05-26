import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../config/routes";
import { createNewUser } from "../../http/auth";
import * as styles from "../signInForm/SignInForm.module.css";

function SignUpForm() {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    password: "",
  });

  const navigate = useNavigate();

  function inputHandler(e) {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function submitHandler(e) {
    e.preventDefault();
    try {
      await createNewUser(user);
      navigate(`/${ROUTES.SIGN_IN}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.center}>Sign Up</h1>
        <form>
          <label htmlFor="username">
            Username
            <input
              name="username"
              id="username"
              value={user.username}
              onChange={inputHandler}
            />
          </label>

          <label htmlFor="firstName">
            First Name
            <input
              name="firstName"
              id="firstName"
              value={user.firstName}
              onChange={inputHandler}
            />
          </label>

          <label htmlFor="lastName">
            Last Name
            <input
              name="lastName"
              id="lastName"
              value={user.lastName}
              onChange={inputHandler}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              name="email"
              id="email"
              type="email"
              value={user.email}
              onChange={inputHandler}
            />
          </label>

          <label htmlFor="password">
            Password
            <input
              name="password"
              id="password"
              type="password"
              value={user.password}
              onChange={inputHandler}
            />
          </label>

          <label htmlFor="birthDate">
            Date of birth
            <input
              name="birthDate"
              id="birthDate"
              type="date"
              value={user.birthDate}
              onChange={inputHandler}
            />
          </label>
          <div className={styles.buttonBox}>
            <button className={styles.signUpBtn} onClick={submitHandler}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
