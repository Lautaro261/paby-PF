import styles from "./error404.module.css";

const Error404 = () => {
  const goBack = () => {
    // Agrega aquí la lógica para redirigir al usuario a la página anterior
    window.history.back();
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>404</h1>
        <p>Página no encontrada</p>
        <button className={styles.buttonBack} onClick={goBack}>
          Volver
        </button>
      </div>
    </div>
  );
};

export default Error404;
