import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import ROUTES from "../../config/routes";

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
    <form>
      <label htmlFor="username">
        Username
        <input
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="password">
        Password
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={submitHandler} disabled={!username || !password}>
        Sign In
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate(`/${ROUTES.SIGN_UP}`);
        }}
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignInForm;
