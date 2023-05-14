import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useParams } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import Styles from './vehicleDetails.module.css';

export default function VehicleDetails(props) {
  const license_plate_id = props.license_plate_id;
  const [vehicle, setVehicle] = useState(null);


  const getVehicleDetails = async (license_plate_id) => {

    console.log("Placa del vehiculo: ", license_plate_id)
    const response = await axios.get(`/user/vehicle/${license_plate_id}`)
      .then(response => {
        setVehicle(response.data)
      })
      .catch(error => {
        console.log(error)
      })
      return response
  };
  useEffect(() => {
    getVehicleDetails(license_plate_id);
  }, [license_plate_id]);

  const handleCloseModal = () => {
    props.setShowModal(false);
  }

  if (!vehicle) {
    return <div>Loading...</div>;
  }

  return (
    <Modal show={props.showModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Detalles del Vehículo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={Styles.details}>
          <div><strong>Tipo:</strong> {vehicle.vehicle_tipe}</div>
          <div><strong>Marca:</strong> {vehicle.car_brand}</div>
          <div><strong>Matrícula:</strong> {vehicle.license_plate}</div>
          <div><strong>Modelo:</strong> {vehicle.car_model}</div>
          <div><strong>Año:</strong> {vehicle.car_model_year}</div>
          <div><strong>Color:</strong> {vehicle.car_color}</div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Atras
        </Button>
      </Modal.Footer>
    </Modal>
  );
}


