import React from 'react'
import styles from "./Dash.module.css";
import { Link } from 'react-router-dom';


const Dash = (props) => {
  return (
    <div className={styles.panellateral}>
        
        <ul>
            <li><Link to="/parking-lot-selection" className={styles.textlink}>Hacer reserva</Link></li>
            <li>Editar perfil</li>
            <li><Link to="/vehicles" className={styles.textlink}>Mis Vehiculos</Link></li>
            <li>Métodos de pago</li>
            <li>Soporte  en linea</li>
            <li>Cerrar Sesion</li>
        </ul>
    </div>
  )
}

export default Dash

