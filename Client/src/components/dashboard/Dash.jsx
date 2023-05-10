import React from 'react';
import styles from './Dash.module.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const Dash = () => {
  const { isAuthenticated, user } = useAuth0();

  const data = {
    sub: user?.sub,
    name: user?.name,
    email: user?.email,
    photo: user?.picture,
  };

  const sendDataToBackend = async () => {
    try {
      const response = await axios.post('http://localhost:3001/users',data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
});
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.dash}>
      <ul className={styles.dashList}>
        <li className={styles.dashItem}>
          {isAuthenticated ? (<Link to="/profile" className={styles.dashLink}><button onClick={() => sendDataToBackend()}>Perfil</button></Link>) : null}
        </li>
        <li className={styles.dashItem}>
          {isAuthenticated ? (<Link to="/vehicles" className={styles.dashLink}>Mis Vehiculos</Link>) : null}
        </li>
        <li className={styles.dashItem}>
          {isAuthenticated ? (<Link to="/reservations-history" className={styles.dashLink}>Mis Reservas</Link>) : null}
        </li>
        <li className={styles.dashItem}>
          {isAuthenticated ? (<Link to="/parking-lot-filter" className={styles.dashLink}>Hacer reserva</Link>) : null}
        </li>
        <li className={styles.dashItem}>
          {isAuthenticated ? (<span className={styles.dashLink}>Métodos de pago</span>) : null}
        </li>
        {/* <li className={styles.dashItem}>
          {isAuthenticated ? (<span className={styles.dashLink}>Soporte en línea</span>) : null}
        </li> */}
      </ul>
    </div>
  );
};

export default Dash;

