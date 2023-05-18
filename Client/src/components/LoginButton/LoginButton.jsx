import { useAuth0 } from "@auth0/auth0-react";
import styles from "../LoginButton/loginButton.module.css";

const LoginButton = () => {
  const { loginWithPopup, loginWithRedirect } = useAuth0();

  return (
    <button
      className={styles.buttonLoginIn}
      onClick={() => loginWithRedirect()}
    >
      Ingresar con Google
    </button>
  );
};

export default LoginButton;
