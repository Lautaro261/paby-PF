import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './viewVehicles.module.css';
import UpdateVehicle from '../UpdateVehicle/updateVehicle.jsx';

export default function ViewVehicle() {
  const history = useNavigate();
  const [vehicles, setVehicles] = useState([]);
  const [showEditVehicle, setShowEditVehicle] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const funcionGetVehicles = async () => {
    const response = await axios
      .get('http://localhost:3001/users/vehicle')
      .then((response) => {
        setVehicles(response.data.vehicleDB);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    funcionGetVehicles();
  }, []);

  const handleVehicleDetails = (licensePlateId) => {
    // Navega al componente de detalles del vehículo con el licensePlateId como parámetro
    history.push(`/vehicle/${licensePlateId}`);
  };

  const handleEditVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowEditVehicle(true);
  };

  const handleCloseEditVehicle = () => {
    setSelectedVehicle(null);
    setShowEditVehicle(false);
  };

  return (
    <>
      {showEditVehicle && (
        <UpdateVehicle vehicle={selectedVehicle} onClose={handleCloseEditVehicle} />
      )}

      <div className={styles.container}>
        <h1 className={`${styles.heading} ${styles.message}`}>Mis Vehículos</h1>
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
                  <button onClick={() => handleEditVehicle(vehicle)}>Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className={styles.link} to="/create-vehicle">
          Crear Vehículo
        </Link>
      </div>
    </>
  );
}
