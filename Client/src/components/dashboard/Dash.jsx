import React from 'react'
import styles from "./Dash.module.css";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Dash = () => {
  const { isAuthenticated, user } = useAuth0();

  const data = {
    sub: user?.sub,
    name: user?.name,
    email: user?.email,
    photo: user?.picture,
}

const sendDataToBackend = async () => {
    try {
        // const response = await axios.post(`http://localhost:3001/users`, data , {
        //                  headers: {
        //                      'Content-Type': 'application/json'
        //                  }})
        console.log('soy data en sendDataToBack', data)
    } catch (error) {
        console.log(error)
    }
}
  return (
    <div className={styles.panellateral}>

      <ul>
        <li><Link to="/parking-lot-selection" className={styles.textlink}>Hacer reserva</Link></li>
        <li>{isAuthenticated ? <Link to='/profile'><button onClick={ ()=> sendDataToBackend()}>Perfil</button></Link> : false}</li>
        <li><Link to="/vehicles" className={styles.textlink}>Mis Vehiculos</Link></li>
        <li>Métodos de pago</li>
        <li>Soporte  en linea</li>
        <li>Cerrar Sesion</li>
      </ul>
    </div>
  )
}

export default Dash
