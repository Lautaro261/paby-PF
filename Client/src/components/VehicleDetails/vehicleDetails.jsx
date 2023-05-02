import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Styles from './vehicleDetails.module.css';

export default function VehicleDetails() {
  const { license_plate_id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  const getVehicleDetails = async (license_plate_id) => {

    console.log(license_plate_id)
    const response = await axios.get(`http://localhost:3001/users/vehicle/${license_plate_id}`)
      .then(response => {
        console.log(response.data)
        setVehicle(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  };
  useEffect(() => {
    getVehicleDetails(license_plate_id);
  }, [license_plate_id]);

  if (!vehicle) {
    return <div>Loading...</div>;
  }

  return (
    <div className={Styles.container}>
      <h1>Detalles del Vehículo</h1>
      <div className={Styles.details}>
        <div><strong>Tipo:</strong> {vehicle.vehicle_tipe}</div>
        <div><strong>Marca:</strong> {vehicle.car_brand}</div>
        <div><strong>Matrícula:</strong> {vehicle.license_plate}</div>
        <div><strong>Modelo:</strong> {vehicle.car_model}</div>
        <div><strong>Año:</strong> {vehicle.car_model_year}</div>
        <div><strong>Color:</strong> {vehicle.car_color}</div>
      </div>
      <Link to="/vehicles" className={Styles.back}>Atras</Link>
    </div>
  );
}
