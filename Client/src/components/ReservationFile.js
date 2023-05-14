import styles from './ParkingSpaceReservation.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UploadWidget from '../UploadWidget/UploadWidget';
import { 
    postParkingSpaceReservation, 
    setParkingSpacePaymentLink, 
    setVehiclePhotoForReservationURL
} from '../../redux/features/parkingSpacesReservation/parkingSpacesReservationSlice';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const initialValues = {
    userSub: '',
    zoneId: '',
    vehicleLicensePlateId: '',
    admission_time: '',
    departure_time: '',
    full_reserve_value: '',
    total_amount: '',
    instant_photo: '',
    comments: ''
}

const ParkingSpaceReservation = () => {
    const [inputData, setInputData] = useState(initialValues);
    const [isPriceShown, setIsPriceShown] = useState(false);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();
    
    const selectedParkingLot = useSelector(state => state.parkingSpaces.selectedParkingLot);
    const userSub = useSelector(state => state.parkingSpacesReservation.currentUserId);
    const selectedParkingSpace = useSelector(state => state.parkingSpaces.selectedParkingSpace);
    const selectedParkingSpaceId = useSelector(state => state.parkingSpacesReservation.selectedParkingSpaceId);
    const allVehicles = useSelector(state => state.vehicles.allVehicles);
    const vehiclePhotoForReservationURL = useSelector(state => state.parkingSpacesReservation.vehiclePhotoForReservationURL);
    const parkingSpacePaymentLink = useSelector(state => state.parkingSpacesReservation.parkingSpacePaymentLink);

    if (allVehicles.length === 0) {
        return (
            <div className={ styles.parkingSpaceReservation_error }>
                <div>No hay vehiculos asociados al usuario</div>
                <Link to='/home'>
                    <button>Volver a Home</button>
                </Link>
            </div>
        );
    }

    useEffect(() => {
        if (userSub && selectedParkingSpaceId) {
            setInputData({
                ...inputData,
                userSub,
                zoneId: selectedParkingSpaceId
            });
        }
    }, [userSub, selectedParkingSpaceId]);

    useEffect(() => {
        if (vehiclePhotoForReservationURL.length > 0) {
            setInputData({
                ...inputData,
                instant_photo: vehiclePhotoForReservationURL
            });
        }
    }, [vehiclePhotoForReservationURL]);

    let hoursCheckIn = [];
    for (let i = 0; i < 24; i++) {
        hoursCheckIn.push(`${ i }:00`);
    }

    let hoursCheckOut = [];
    for (let i = 0; i < 24; i++) {
        hoursCheckOut.push(`${ i }:59`);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({
            ...inputData,
            [name]: value
        });
    };

    const handleClose = () => setShow(false);

    const fee = selectedParkingLot.fee;
    const parkingTime = parseInt(inputData.departure_time) - parseInt(inputData.admission_time) + 1;
    const filteredVehicles = allVehicles.filter(vehicle => vehicle.vehicle_tipe === selectedParkingSpace.vehicle_type);

    useEffect(() => {
        if (parkingTime >= 1) {
            const full_reserve_value = parkingTime * fee
            setInputData({
                ...inputData,
                full_reserve_value,
                total_amount: full_reserve_value
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

    useEffect(() => {
        if (parkingSpacePaymentLink) {
            setShow(true);
        }
    }, [parkingSpacePaymentLink]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postParkingSpaceReservation(inputData));
        setInputData({
            ...inputData,
            vehicleLicensePlateId: '',
            admission_time: '',
            departure_time: '',
            full_reserve_value: '',
            total_amount: '',
            instant_photo: '',
            comments: ''
        });
        setIsButtonEnabled(false);
    };

    const handleBackButton = () => {
        dispatch(setVehiclePhotoForReservationURL(''));
        dispatch(setParkingSpacePaymentLink(''));
    };

    console.log(inputData);

    return (
        <form onSubmit={ handleSubmit } className={ styles.parkingSpaceReservation__container }>
            <div className={ styles.parkingSpaceReservation__title }>Formulario de Reservación de Zona</div>
            <div className={ styles.parkingSpaceReservation__formControl }>
                <label htmlFor='vehicleLicensePlateId'>
                    Vehículo
                </label>
                <select 
                    id='vehicleLicensePlateId' 
                    name='vehicleLicensePlateId' 
                    value={ inputData.vehicleLicensePlateId }
                    onChange={ handleChange } 
                >
                    <option value='' disabled>Marca de vehículo</option>
                    { filteredVehicles.map(vehicle => (
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
                <select 
                    id='admission_time' 
                    name='admission_time' 
                    value={ inputData.admission_time }
                    onChange={ handleChange } 
                >
                    <option value='' disabled>Seleccione su hora de entrada</option>
                    { hoursCheckIn.map(hour => (
                        <option key={ hour } value={ hour }>{ hour }</option>
                    )) }
                </select>
            </div>
            <div className={ styles.parkingSpaceReservation__formControl }>
                <label htmlFor='departure_time'>
                    Hora de salida:
                </label>
                <select 
                    id='departure_time' 
                    name='departure_time' 
                    value={ inputData.departure_time }
                    onChange={ handleChange } 
                >
                    <option value='' disabled>Seleccione su hora de salida</option>
                    { hoursCheckOut.map(hour => (
                        <option key={ hour } value={ hour }>{ hour }</option>
                    )) }
                </select>
                { parkingTime < 1 ?
                    <div className={ styles.parkingSpaceReservation__warning }>
                        La hora de entrada no puede ser menor o igual que la hora de salida
                    </div> : ''
                }
            </div>
            <div className={ styles.parkingSpaceReservation__amountToPay } hidden={ !isPriceShown }>
                <b>Total a pagar:</b><br />
                <div>$ { parkingTime * fee } COP</div>
            </div>
            <div className={ styles.parkingSpaceReservation__formControl }>
                <b>Subir foto:</b>
                <br />
                <UploadWidget />
                {
                    vehiclePhotoForReservationURL &&
                    <div className={ styles.parkingSpaceReservation__notification_photo }>
                        Se cargó la foto
                    </div>
                }
            </div>
            <div className={ styles.parkingSpaceReservation__formControl }>
                <label htmlFor="comments">Comentarios:</label>
                <textarea 
                    id='comments' 
                    name='comments' 
                    value={ inputData.comments }
                    rows= { 4 }
                    cols={ 30 }
                    onChange={ handleChange }
                />
            </div>
            <button 
                type='submit' 
                disabled={ !isButtonEnabled } 
            >
                CONTINUAR CON EL PAGO
            </button>
            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton style={{ backgroundColor: 'aquamarine' }}>
                    <Modal.Title>Selección de zona exitosa</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: 'skyblue' }}>
                    ¡Estás a un solo paso de completar el proceso!
                </Modal.Body>
                <Modal.Footer style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'aquamarine' }}>
                    <Link to='/reservation-panel' onClick={ handleBackButton }>
                        <Button>Atrás</Button>
                    </Link>
                    <Link to={ parkingSpacePaymentLink }>
                        <Button>Continuar con el pago</Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </form>
    );
};

export default ParkingSpaceReservation; 