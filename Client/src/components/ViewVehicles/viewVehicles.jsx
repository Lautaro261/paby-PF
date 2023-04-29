import React, { useState, useEffect } from 'react';
import styles from './viewVehicles.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ViewVehicle() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios.get('/users/vehicle')
      .then(response => {
        setVehicles(response.data.vehicleDB);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Vehículos</h1>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.id}>
            <Link to={`/vehicles/${vehicle.id}`}>{vehicle.brand} {vehicle.model}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
