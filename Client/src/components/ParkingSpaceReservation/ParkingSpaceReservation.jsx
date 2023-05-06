import styles from './ParkingSpaceReservation.module.css';
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UploadWidget from '../UploadWidget/UploadWidget';
import { postParkingSpaceReservation } from '../../redux/features/parkingSpacesReservation/parkingSpacesReservationSlice';

const ParkingSpaceReservation = () => {
    const [inputData, setInputData] = useState({
        userId: '22da7b7d-0684-4783-aab9-d48e6a623d5f',
        zoneId: '',
        paymentId: '1',
        admission_time: '',
        departure_time: '',
        full_reserve_value: '',
        reservation_status: "Pendiente",
        total_amount: '150000',
        instant_photo: '',
        comments: ''
    });
    const [isPriceShown, setIsPriceShown] = useState(false);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    const parkingLot = useSelector(state => state.parkingSpaces.parkingLot);
    const { selectedParkingSpaceId } = useParams();
    const allVehicles = useSelector(state => state.vehicleBrand.allVehicles);
    const vehiclePhotoForReservationURL = useSelector(state => state.parkingSpacesReservation.vehiclePhotoForReservationURL);

    if (Object.keys(parkingLot).length === 0 || allVehicles.length === 0) {
        return (
            <div className={ styles.parkingSpaceReservation_error }>
                <div>No seleccionó parqueadero y/o no hay vehiculos asociados al usuario</div>
                <Link to='/home'>
                    <button>Volver a Home</button>
                </Link>
            </div>
        );
    }

    console.log(selectedParkingSpaceId);
    useEffect(() => {
        setInputData({
            ...inputData,
            zoneId: selectedParkingSpaceId
        });
    }, [selectedParkingSpaceId]);

    useEffect(() => {
        if (vehiclePhotoForReservationURL.length > 0) {
            setInputData({
                ...inputData,
                instant_photo: vehiclePhotoForReservationURL
            });
        }
    }, [vehiclePhotoForReservationURL]);

    let hours = [];
    for (let i = 0; i < 24; i++) {
        hours.push(i);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({
            ...inputData,
            [name]: value
        });
    };

    const fee = parkingLot.fee;
    const parkingTime = parseInt(inputData.departure_time) - parseInt(inputData.admission_time);

    useEffect(() => {
        if (parkingTime >= 1) {
            const full_reserve_value = parkingTime * fee
            setInputData({
                ...inputData,
                full_reserve_value
            });
            setIsPriceShown(true);
        }
    }, [parkingTime]);

    useEffect(() => {
        if (Object.values(inputData).every(value => value !== '') && 
            parkingTime >= 1) {
            setIsButtonEnabled(true);
        }
    }, [inputData]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postParkingSpaceReservation(inputData));
        console.log(inputData);
        navigate('/parking-space-payment');
        document.getElementById('vehicleId').value = '';
        document.getElementById('admission_time').value = '';
        document.getElementById('departure_time').value = '';
        document.getElementById('comments').value = '';
        setIsButtonEnabled(false);
    };

    return (
        <form onSubmit={ handleSubmit } className={ styles.parkingSpaceReservation__container }>
            <div className={ styles.parkingSpaceReservation__title }>Formulario de Reservación de Zona</div>
            <div className={ styles.parkingSpaceReservation__formControl }>
                <label htmlFor='vehiculeId'>
                    Vehículo
                </label>
                <select id='vehicleId' name='vehicleId' onChange={ handleChange } defaultValue=''>
                    <option value='' disabled>Marca de vehículo</option>
                    { allVehicles.map(vehicle => (
                        <option 
                            key={ vehicle.license_plate_id } 
                            value={ vehicle.license_plate_id } 
                        >
                            { vehicle.car_brand }
                        </option>
                    )) }
                </select>
            </div>
            <div className={ styles.parkingSpaceReservation__formControl }>
                <label htmlFor='admission_time'>
                    Hora de entrada:
                </label>
                <select id='admission_time' name='admission_time' onChange={ handleChange } defaultValue=''>
                    <option value='' disabled>Seleccione su hora de entrada</option>
                    { hours.map(hour => (
                        <option key={ hour } value={ hour }>{ hour }:00</option>
                    )) }
                </select>
            </div>
            <div className={ styles.parkingSpaceReservation__formControl }>
                <label htmlFor='departure_time'>
                    Hora de salida:
                </label>
                <select id='departure_time' name='departure_time' onChange={ handleChange } defaultValue=''>
                    <option value='' disabled>Seleccione su hora de salida</option>
                    { hours.map(hour => (
                        <option key={ hour } value={ hour }>{ hour }:00</option>
                    )) }
                </select>
                { parkingTime < 1 ?
                    <div className={ styles.parkingSpaceReservation__warning }>
                        La hora de entrada no puede ser menor o igual que la hora de salida
                    </div> : null 
                }
            </div>
            <div className={ styles.parkingSpaceReservation__amountToPay } hidden={ !isPriceShown }>
                <b>Total a pagar:</b><br />
                <div>$ { parkingTime * fee } COP</div>
            </div>
            <div className={ styles.parkingSpaceReservation__formControl }>
                <b>Subir foto:</b><br />
                <UploadWidget />
            </div>
            <div className={ styles.parkingSpaceReservation__formControl }>
                <label htmlFor="comments">Comentarios:</label>
                <textarea 
                    id='comments' 
                    name='comments' 
                    rows= { 4 }
                    cols={ 30 }
                    onChange={ handleChange }
                />
            </div>
            <button type='submit' disabled={ !isButtonEnabled }>CONTINUAR CON EL PAGO</button>
        </form>
    );
};

export default ParkingSpaceReservation;