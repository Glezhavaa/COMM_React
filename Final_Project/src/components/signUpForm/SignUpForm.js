import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../config/routes";
import { createNewUser } from "../../http/auth";
import styles from "./SignUpForm.module.css";

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
    <form className={styles.input}>
      <label htmlFor="username">
        Username
        <br></br>
        <input
          name="username"
          id="username"
          value={user.username}
          onChange={inputHandler}
        />
      </label>
      <br></br>
      <label htmlFor="firstName">
        First Name
        <br></br>
        <input
          name="firstName"
          id="firstName"
          value={user.firstName}
          onChange={inputHandler}
        />
      </label>
      <br></br>
      <label htmlFor="lastName">
        Last Name
        <br></br>
        <input
          name="lastName"
          id="lastName"
          value={user.lastName}
          onChange={inputHandler}
        />
      </label>
      <br></br>
      <label htmlFor="email">
        Email
        <br></br>
        <input
          name="email"
          id="email"
          type="email"
          value={user.email}
          onChange={inputHandler}
        />
      </label>
      <br></br>
      <label htmlFor="password">
        Password
        <br></br>
        <input
          name="password"
          id="password"
          type="password"
          value={user.password}
          onChange={inputHandler}
        />
      </label>
      <br></br>
      <label htmlFor="birthDate">
        Date of birth
        <br></br>
        <input
          name="birthDate"
          id="birthDate"
          type="date"
          value={user.birthDate}
          onChange={inputHandler}
        />
      </label>
      <br />
      <button onClick={submitHandler}>Sign Up</button>
    </form>
  );
}

export default SignUpForm;
