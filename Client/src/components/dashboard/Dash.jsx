import React from 'react'
import styles from "./Dash.module.css";

const Dash = (props) => {
  return (
    <div className={styles.panellateral}>
        
        <ul>
            <li>Hacer Reserva</li>
            <li>Editar perfil</li>
            <li>Mis Vehiculos</li>
            <li>Métodos de pago</li>
            <li>Soporte  en linea</li>
            <li>Cerrar Sesion</li>
        </ul>
    </div>
  )
}

export default Dash

