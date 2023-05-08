import React from 'react'
import styles from "./Dash.module.css";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios'

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
      const response = await axios.post(`http://localhost:3001/users`, data , {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return response 
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.panellateral}>
      <ul>
        <li><Link to="/parking-lot-filter" className={styles.textlink}>Hacer reserva</Link></li>
        {isAuthenticated && (
          <li>
            <Link to='/profile' onClick={sendDataToBackend} className={styles.textlink}>
              Perfil
            </Link>
          </li>
        )}
        <li>{isAuthenticated ? <Link to="/vehicles" className={styles.textlink}>Mis Vehiculos</Link> : false}</li>
        <li>Métodos de pago</li>
        <li>Soporte en linea</li>
      </ul>
    </div>
  )
}

export default Dash