import React from "react";
import styles from "./UserBanError.module.css";

const UserBanError = () => {
  const redirectToWhatsapp = () => {
    const mensaje = "Hola quisiera recibir soporte acerca...";
    window.open(
      `https://api.whatsapp.com/send?phone=+5491157808908&text=" + ${mensaje}`
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Usuario Baneado</h1>
        <p className={styles.description}>
          Lo sentimos, tu cuenta ha sido suspendida temporalmente.
        </p>
        <button onClick={redirectToWhatsapp} className={styles.buttonSupport}>
          Contactar con Soporte
        </button>
      </div>
    </div>
  );
};

export default UserBanError;
