import SignInForm from "../../components/signInForm/SignInForm";
import styles from "./SignIn.module.css";

function SignIn() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <SignInForm />
      </div>
    </div>
  );
}

export default SignIn;
