import React, { useState } from 'react';
import axios from 'axios';

export default function UpdateVehicle({ vehicle, onClose }) {
    const [updatedVehicle, setUpdatedVehicle] = useState(vehicle);

    const handleUpdateVehicle = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3001/users/vehicle/${vehicle.license_plate_id}`, updatedVehicle);
            console.log(response.data);
            onClose();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h2>Editar Vehículo</h2>
            <form onSubmit={handleUpdateVehicle}>
                <label>
                    Marca:
                    <input type="text" name="car_brand" value={updatedVehicle.car_brand} 
                    onChange={(e) => setUpdatedVehicle({...updatedVehicle, car_brand: e.target.value})} />
                </label>
                <label>
                    Tipo de servicio:
                    <input type="text" name="type_of_service" value={updatedVehicle.type_of_service} 
                    onChange={(e) => setUpdatedVehicle({...updatedVehicle, type_of_service: e.target.value})} />
                </label>
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
                <button type="submit">Guardar cambios</button>
                <button type="button" onClick={onClose}>Cancelar</button>
            </form>
        </div>
    );
}
