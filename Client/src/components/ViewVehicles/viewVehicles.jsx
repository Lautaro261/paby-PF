import React, { useState, useEffect } from 'react';
import styles from './viewVehicles.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchBar from '../Searchbar/SearchBar';

export default function ViewVehicle(){

	const [vehicles, setVehicles] = useState([]);

    const funcionGetVehicles = async()=>{
        const response = await axios.get('http://localhost:3001/users/vehicle')
        .then(response=>{
            //console.log(response.data.vehicleDB)
            setVehicles(response.data.vehicleDB)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    useEffect(() => {
        funcionGetVehicles()
       }, []);

    const handleVehicleDetails = (licensePlateId) => {
    // Navegar al componente de detalles del vehículo con el ID de la matrícula como parámetro
    	history.push(`/vehicle/${licensePlateId}`);
    }


    /*function deleteVehicle(id) {
    	axios.delete(`/api/vehicles/${id}`)
    	.then(response => {
    		setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
    	})
    	.catch(error => {
    		console.error(error);
    	});
    }*/

	return (
    	<div className={styles.container}>
      		<h1 className={`${styles.heading} ${styles.message}`}>Mis Vehículos</h1>
			<SearchBar/>
      		<table className={styles.table}>
        	<thead>
          		<tr>
            		<th>Tipo</th>
            		<th>Marca</th>
            		<th>Matrícula</th>
            		<th>Gestionar</th>
          		</tr>
        	</thead>
        	<tbody>
          		{vehicles.map((vehicle) => (
            		<tr key={vehicle.license_plate_id}>
              			<td>{vehicle.vehicle_tipe}</td>
              			<td>{vehicle.car_brand}</td>
              			<td>{vehicle.license_plate}</td>
              			<td>
                			<Link to={`/vehicle/${vehicle.license_plate_id}`}>Ver</Link>
                			<button>Eliminar</button>
              			</td>
            		</tr>
          		))}
        	</tbody>
      		</table>
      		<Link className={styles.link} to="/create-vehicle">
        		Crear Vehículo
      		</Link>
    	</div>
  	);
}