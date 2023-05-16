import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function UpdateVehicle({ vehicle, onClose }) {
    const [updatedVehicle, setUpdatedVehicle] = useState(vehicle);

    const handleUpdateVehicle = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`/user/vehicle/edit/${vehicle.license_plate_id}`, updatedVehicle);
            console.log(response.data);
            onClose();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Modal show={true} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Vehículo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleUpdateVehicle}>
                    <label>
                        Marca:
                        <input type="text" name="car_brand" value={updatedVehicle.car_brand} 
                        onChange={(e) => setUpdatedVehicle({...updatedVehicle, car_brand: e.target.value})} />
                    </label>
                    <label>
                        Año:
                        <input type="text" name="car_model_year" value={updatedVehicle.car_model_year} 
                        onChange={(e) => setUpdatedVehicle({...updatedVehicle, car_model_year: e.target.value})} />
                    </label>
                    {/*<label>
                        Tipo de servicio:
                        <input type="text" name="type_of_service" value={updatedVehicle.type_of_service} 
                        onChange={(e) => setUpdatedVehicle({...updatedVehicle, type_of_service: e.target.value})} />
                    </label>*/}
                    <label>
                        Matrícula:
                        <input type="text" name="license_plate" value={updatedVehicle.license_plate} 
                        onChange={(e) => setUpdatedVehicle({...updatedVehicle, license_plate: e.target.value})} />
                    </label>
                    <label>
                        Color:
                        <input type="text" name="car_color" value={updatedVehicle.car_color} 
                        onChange={(e) => setUpdatedVehicle({...updatedVehicle, car_color: e.target.value})} />
                    </label>
                </form>
            </Modal.Body>
            <Modal.Footer>
                {/*<Button variant="secondary" onClick={onClose}>Cerrar</Button>*/}
                <Button variant="primary" onClick={handleUpdateVehicle}>Guardar cambios</Button>
            </Modal.Footer>
        </Modal>
    );
}

