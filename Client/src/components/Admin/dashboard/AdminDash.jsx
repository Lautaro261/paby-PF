import React from 'react';
import styles from './Dash.module.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const AdminDash = () => {
  const { isAuthenticated } = useAuth0();
  const isLoggedIn = localStorage.getItem(`isLoggedIn`)

  return (
    <div className={styles.dash}>
      <ul className={styles.dashList}>
        <li className={styles.dashItem}>
          {isAuthenticated || isLoggedIn ? (<Link to="/admin/dataedit" className={styles.dashLink}>Editar Parqueadero</Link>) : null}
        </li>
        <li className={styles.dashItem}>
          {isAuthenticated || isLoggedIn ? (<Link to="/admin/manual-parking-lot-filter" className={styles.dashLink}>Modificar Reservas</Link>) : null}
        </li>
        <li className={styles.dashItem}>
          {isAuthenticated || isLoggedIn? (<Link to="/admin/clients" className={styles.dashLink}>Clientes</Link>) : null}
        </li>
       

       
      </ul>
    </div>
  );
};

export default AdminDash;

