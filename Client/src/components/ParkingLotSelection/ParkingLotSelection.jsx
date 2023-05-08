import styles from './ParkingLotSelection.module.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import ParkingLotCard from '../ParkingLotCard/ParkingLotCard';
import { getAllParkingLots } from '../../redux/features/parkingSpaces/parkingSpacesSlice';
import { setCurrentUserId } from '../../redux/features/parkingSpacesReservation/parkingSpacesReservationSlice';

const ParkingLotSelection = () => {
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    const dispatch = useDispatch();
    const allParkingLots = useSelector(state => state.parkingSpaces.allParkingLots);
    const parkingLot = useSelector(state => state.parkingSpaces.parkingLot);

    if (allParkingLots.length === 0) {
        return (
            <div className={ styles.parkingLotSelection__error }>
                <div>No hay parqueaderos para mostrar</div>
                <Link to='/home'>
                    <button>Volver a Home</button>
                </Link>
            </div>
        );
    }

    const { user } = useAuth0();
    const userId = user && user.sub;
    useEffect(() => {
        if (userId) {
            dispatch(setCurrentUserId(userId));
        }
    });

    if (!userId) {
        return (
            <div className={ styles.parkingLotSelection__error }>
                <div>Inicie sesión para poder continuar</div>
                <Link to='/home'>
                    <button>Volver a Home</button>
                </Link>
            </div>
        )
    }

    useEffect(() => {
        if (Object.keys(parkingLot).length > 0) {
            setIsButtonEnabled(true);
        }
    }, [parkingLot]);

    useEffect(() => {
        dispatch(getAllParkingLots());
    }, [dispatch]);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsButtonEnabled(false);
        navigate('/reservation-panel');
    };

    return (
        <form onSubmit={ handleSubmit }>
            <div className={ styles.parkingLotSelection__title }>Parqueaderos</div>
            <div className={ styles.parkingLotSelection__description }>Por favor, seleccionar el parqueadero:</div>
            <div className={ styles.parkingLotSelection__parkingLots }>
                { allParkingLots.map(parkingLot => 
                    <ParkingLotCard 
                        key = { parkingLot.id }
                        id = { parkingLot.id }
                        name = { parkingLot.name } 
                        nit = { parkingLot.nit } 
                        country = { parkingLot.country } 
                        city = { parkingLot.city } 
                        address = { parkingLot.address } 
                        neighborhood = { parkingLot.neighborhood } 
                        floors = { parkingLot.floors } 
                        fee = { parkingLot.fee } 
                        photo = { parkingLot.photo } 
                        regulation = { parkingLot.regulation } 
                    />)
                }
            </div>
            <div className={ styles.parkingLotSelection__notification }>
                { isButtonEnabled ? `Usted eligió el ${ parkingLot.name }` : null }
            </div>
            <button type='submit' disabled={ !isButtonEnabled }>CONTINUE</button>
        </form>
    );
}

export default ParkingLotSelection;