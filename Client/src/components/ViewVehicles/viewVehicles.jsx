import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './viewVehicles.module.css';
import UpdateVehicle from '../UpdateVehicle/updateVehicle.jsx';
import SearchBar from '../Searchbar/SearchBar';
import { getAllVehicles } from '../../redux/features/vehicleBrand/vehicleBrandSlice.js';

export default function ViewVehicle() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [vehicles, setVehicles] = useState([]);
  const [showEditVehicle, setShowEditVehicle] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(getAllVehicles());
  }, [dispatch]);

  const allVehicles = useSelector(state => state.vehicleBrand.allVehicles);
  const searchedBrandName = useSelector(state => state.vehicleBrand.searchedBrandName);
  const [vehiclesState, setVehiclesState] = useState(allVehicles);

  const handleSearchTermChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    if (newSearchTerm !== '') {
      const filteredVehicles = allVehicles.filter(
        (vehicle) =>
          vehicle.car_brand.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
          vehicle.license_plate.toLowerCase().includes(newSearchTerm.toLowerCase())
      );
      setVehiclesState(filteredVehicles);
    } else {
      setVehiclesState(allVehicles);
    }
  };

  const handleResetTable = () => {
    setVehiclesState(allVehicles);
  };

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
        <SearchBar onSearchTermChange={handleSearchTermChange} />
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
            {vehiclesState.map((vehicle) => (
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
        <button onClick={handleResetTable}>Actualizar tabla</button>
        <Link className={styles.link} to="/create-vehicle">
          Crear Vehículo
        </Link>
      </div>
    </>
  );
}
