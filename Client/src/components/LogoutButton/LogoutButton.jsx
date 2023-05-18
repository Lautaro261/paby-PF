import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "../LogoutButton/logoutButton.module.css";

const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogoutAuth0 = () => {
    logout();
    localStorage.clear();
  };

  return (
    <button className={styles.buttonCloseSesionAO} onClick={handleLogoutAuth0}>
      Cerrar sesión
    </button>
  );
};
export default LogoutButton;
