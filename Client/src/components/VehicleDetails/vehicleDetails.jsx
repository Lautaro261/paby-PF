import React, { useState, useEffect } from 'react';
//import styles from './vehiclesDetails.module.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function VehicleDetails(){
	const { license_plate_id } = useParams();
  	const [vehicle, setVehicle] = useState(null);

  	const getVehicleDetails = async () => {
    	try {
      		const response = await axios.get(`http://localhost:3001/users/vehicle/${license_plate_id}`);
      		setVehicle(response.data.vehicleDB);
      		//console.log(response.data.vehicleDB);
   		 } catch (error) {
      		console.log(error);
    	}
  	};
  	useEffect(() => {
  		getVehicleDetails();
  	}, [license_plate_id]);
  	if (!vehicle) {
  		return <div>Loading...</div>;
  	}

  	 return (
    	<div className={styles.container}>
    		<h1 className={`${styles.heading} ${styles.message}`}>Detalles del Vehículo</h1>
      		<div className={styles.details}>
        		<div><strong>Tipo:</strong> {vehicle.vehicle_tipe}</div>
        		<div><strong>Marca:</strong> {vehicle.car_brand}</div>
        		<div><strong>Matrícula:</strong> {vehicle.license_plate}</div>
        		<div><strong>Modelo:</strong> {vehicle.car_model}</div>
        		<div><strong>Año:</strong> {vehicle.year}</div>
        		<div><strong>Color:</strong> {vehicle.color}</div>
      		</div>
    	</div>
  	);
}