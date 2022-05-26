import SignInForm from "../../components/signInForm/SignInForm";
import * as styles from "./SignIn.module.css";

function SignIn() {
  return (
    <div className={styles.container}>
      <SignInForm />
    </div>
  );
}

export default SignIn;
