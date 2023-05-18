import styles from './ParkingSpaceReservation.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UploadWidget from '../UploadWidget/UploadWidget';
import { 
    setVehiclePhotoForReservationURL, 
    postParkingSpaceReservation 
} from '../../redux/features/parkingSpacesReservation/parkingSpacesReservationSlice';

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
};

const validationSchema = Yup.object({
    vehicleLicensePlateId: Yup.string().required('Debe seleccionar su vehículo'),
    admission_time: Yup.string().required('Debe seleccionar la hora de ingreso'),
    departure_time: Yup.string().test(
        'is-greater',
        'La hora de salida debe ser mayor que la hora de ingreso',
        function(value, context) {
            const admission_time = context.parent.admission_time;
            const departure_time = value;
            if (!admission_time || !departure_time) {
                return true;
            }
            return parseInt(departure_time) - parseInt(admission_time) >= 0;
        }
    ).required('Debe seleccionar la hora de salida'),
    comments: Yup.string().required('Debe indicar algún comentario acerca de su vehículo')
});

const calculateFullReserveValue = (admission_time, departure_time, fee) => {
    if (!admission_time || !departure_time) {
        return '';
    }
    const admissionHour = parseInt(admission_time);
    const departureHour = parseInt(departure_time);
    const diff = departureHour - admissionHour + 1;
    return fee * diff;
}

const ParkingSpaceReservation = () => {
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();

    let hoursCheckIn = [];
    for (let i = 0; i < 24; i++) {
        hoursCheckIn.push(`${ i }:00`);
    }

    let hoursCheckOut = [];
    for (let i = 0; i < 24; i++) {
        hoursCheckOut.push(`${ i }:59`);
    }

    const handleSubmit = (values, { resetForm }) => {
        dispatch(postParkingSpaceReservation(values));
        setShow(true);
        resetForm();
    };

    const handleClose = () => setShow(false);

    const handleBackButton = () => {
        setShow(false);
    };

    return (
        <div>
            <Formik 
                initialValues={ initialValues } 
                validationSchema={ validationSchema }
                onSubmit={ handleSubmit }
            >
                { ( { values, isSubmitting, setFieldValue } ) => {
                    const selectedParkingLot = useSelector(state => state.parkingSpaces.selectedParkingLot);
                    const userSub = useSelector(state => state.parkingSpacesReservation.currentUserId);
                    const selectedParkingSpace = useSelector(state => state.parkingSpaces.selectedParkingSpace);
                    const allVehicles = useSelector(state => state.vehicles.allVehicles);
                    const vehiclePhotoForReservationURL = useSelector(state => state.parkingSpacesReservation.vehiclePhotoForReservationURL);

                    const fee = selectedParkingLot.fee;
                    const filteredVehicles = allVehicles.filter(vehicle => vehicle.vehicle_tipe === selectedParkingSpace.vehicle_type);
                    const { admission_time, departure_time, instant_photo } = values;
                    const full_reserve_value = calculateFullReserveValue(admission_time, departure_time, fee);
                    const total_amount = full_reserve_value;

                    useEffect(() => {
                        dispatch(setVehiclePhotoForReservationURL(''));
                        setShow(false);
                    }, []);

                    useEffect(() => {
                        setFieldValue('userSub', userSub);
                        setFieldValue('zoneId', selectedParkingSpace.id);
                    }, [setFieldValue, userSub, selectedParkingSpace]);

                    useEffect(() => {
                        setFieldValue('full_reserve_value', full_reserve_value);
                        setFieldValue('total_amount', total_amount);
                    }, [setFieldValue, admission_time, departure_time, full_reserve_value, total_amount]);

                    useEffect(() => {
                        setFieldValue('instant_photo', vehiclePhotoForReservationURL);
                    }, [setFieldValue, vehiclePhotoForReservationURL]);

                    return (
                        <Form className={ styles.parkingSpaceReservation__container }>
                            <div className={ styles.parkingSpaceReservation__title }>Formulario de Reservación de Zona</div>
                            <div className={ styles.parkingSpaceReservation__formControl_pair }>
                                <div className={ styles.parkingSpaceReservation__formControl }>
                                    <label htmlFor='vehicleLicensePlateId'>
                                        Vehículo:
                                    </label>
                                    <Field 
                                        as='select'
                                        id='vehicleLicensePlateId' 
                                        name='vehicleLicensePlateId' 
                                        className={ styles.parkingSpaceReservation__Field }
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
                                    </Field>
                                    <ErrorMessage name='vehicleLicensePlateId' />
                                </div>
                                <div className={ styles.parkingSpaceReservation__formControl }>
                                    <label htmlFor='instant_photo'>
                                        Subir foto:
                                    </label>
                                    <UploadWidget />
                                    <br />
                                    <ErrorMessage name='instant_photo' />
                                    { instant_photo && <b>Foto subida exitosamente</b> }
                                </div>
                            </div>
                            <div className={ styles.parkingSpaceReservation__formControl_pair }>
                                <div className={ styles.parkingSpaceReservation__formControl }>
                                    <label htmlFor='admission_time'>
                                        Hora de entrada:
                                    </label>
                                    <Field 
                                        as='select' 
                                        id='admission_time' 
                                        name='admission_time' 
                                        className={ styles.parkingSpaceReservation__Field }
                                    >
                                        <option value='' disabled>Seleccione su hora de entrada</option>
                                        { hoursCheckIn.map(hour => (
                                            <option key={ hour } value={ hour }>{ hour }</option>
                                        )) }
                                    </Field>
                                    <ErrorMessage name='admission_time' />
                                </div>
                                <div className={ styles.parkingSpaceReservation__formControl }>
                                    <label htmlFor='departure_time'>
                                        Hora de salida:
                                    </label>
                                    <Field 
                                        as='select'
                                        id='departure_time' 
                                        name='departure_time' 
                                        className={ styles.parkingSpaceReservation__Field }
                                    >
                                        <option value='' disabled>Seleccione su hora de salida</option>
                                        { hoursCheckOut.map(hour => (
                                            <option key={ hour } value={ hour }>{ hour }</option>
                                        )) }
                                    </Field>
                                    <ErrorMessage name='departure_time' />
                                </div>
                            </div>
                            <div className={ styles.parkingSpaceReservation__formControl }>
                                <label htmlFor='full_reserve_value'>
                                    Total a pagar:
                                </label>
                                <div>
                                    ${ ' ' }
                                    <Field 
                                        as='input'
                                        id='full_reserve_value' 
                                        name='full_reserve_value' 
                                        className={ styles.parkingSpaceReservation__Field }
                                        readOnly
                                    />
                                    { ' ' }COP
                                </div>
                                <ErrorMessage name='full_reserve_value' />
                            </div>
                            <br />
                            <div className={ styles.parkingSpaceReservation__formControl }>
                                <label htmlFor="comments">
                                    Comentarios:
                                </label>
                                <Field 
                                    as='textarea' 
                                    id='comments' 
                                    name='comments' 
                                    rows= { 3 }
                                    cols={ 60 }
                                />
                                <br />
                                <ErrorMessage name='comments' />
                            </div>
                            <button type='submit' disabled={ isSubmitting }>
                                CONTINUAR
                            </button>
                            <Link to='/reservation-panel'>
                                <button type='button'>ATRÁS</button>
                            </Link>
                        </Form>
                    );
                } }
            </Formik>
            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton style={{ backgroundColor: 'aquamarine' }}>
                    <Modal.Title>Selección de zona exitosa</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: 'skyblue' }}>
                    ¡Estás a un solo paso de completar el proceso!
                </Modal.Body>
                <Modal.Footer style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'aquamarine' }}>
                    <Link to='/reservation-panel' onClick={ handleBackButton }>
                        <Button>Hacer otra reserva</Button>
                    </Link>
                    <Link to='/shopping'>
                        <Button>Ir al carrito</Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ParkingSpaceReservation;