import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react'
import styles from './Vehicles.module.css';
import UpdateVehicle from '../UpdateVehicle/updateVehicle.jsx';
import VehicleDetails from '../VehicleDetails/vehicleDetails.jsx';
import SearchBar from '../Searchbar/SearchBar';
import { getAllVehicles } from '../../redux/features/vehicles/vehiclesSlice.js';

export default function Vehicles() {
  const dispatch = useDispatch();
  // const history = useNavigate();
  const { isLoading } = useAuth0();
  const user = { sub: localStorage.getItem('sub') };

  // const [vehicles, setVehicles] = useState([]);
  const [showVehicleDetails, setShowVehicleDetails] = useState(false);
  const [showEditVehicle, setShowEditVehicle] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const allVehicles = useSelector(state => state.vehicles.allVehicles);
  // const searchedBrandName = useSelector(state => state.vehicles.searchedBrandName);
  const [vehiclesState, setVehiclesState] = useState(allVehicles);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getAllVehicles(user.sub));
  },[]);
  useEffect(() => {
    if (allVehicles.length > 0) {
      setVehiclesState(allVehicles);
    }
  }, [allVehicles]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

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

  const handleShowVehicleDetails = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowVehicleDetails(true);
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

      {showVehicleDetails && (
        <VehicleDetails license_plate_id={selectedVehicle.license_plate_id}
          onClose={() => setShowVehicleDetails(false)} />
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
            {vehiclesState && vehiclesState.map((vehicle) => (
              <tr key={vehicle.license_plate_id}>
                <td>{vehicle.vehicle_tipe}</td>
                <td>{vehicle.car_brand}</td>
                <td>{vehicle.license_plate}</td>
                <td>
                  {vehicle && vehicle.license_plate_id &&
                    <VehicleDetails license_plate_id={vehicle.license_plate_id}   showModal={showModal}
                    setShowModal={setShowModal}/>}
                  <button onClick={() => setShowModal(true) }>Ver</button>
                  <button onClick={() => handleEditVehicle(vehicle)}>Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.buttons}>
         {/*  <button onClick={handleResetTable}>Actualizar tabla</button> */}
          <Link to="/create-vehicle">
            Crear Vehículo
          </Link>
        </div>
      </div>
    </>
  );
}
