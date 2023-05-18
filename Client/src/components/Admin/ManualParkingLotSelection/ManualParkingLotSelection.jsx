import styles from '../../ParkingLotSelection/ParkingLotSelection.module.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ParkingLotCard from '../../ParkingLotCard/ParkingLotCard';
import { setCurrentUserId } from '../../../redux/features/parkingSpacesReservation/parkingSpacesReservationSlice';

const ManualParkingLotSelection = () => {
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const filteredParkingLots = useSelector(state => state.parkingSpaces.filteredParkingLots);
    const selectedParkingLot = useSelector(state => state.parkingSpaces.selectedParkingLot);

    if (filteredParkingLots.length === 0) {
        return (
            <div className={ styles.parkingLotSelection__error }>
                <div>No hay parqueaderos para mostrar</div>
                <Link to='/home'>
                    <button>Volver a Home</button>
                </Link>
            </div>
        );
    }

    const userId = localStorage.getItem('sub');
    
    useEffect(() => {
        if (userId) {
            dispatch(setCurrentUserId(userId));
        }
    }, [dispatch, userId]);
    
    useEffect(() => {
        if (selectedParkingLot && Object.keys(selectedParkingLot).length > 0) {
            setIsButtonEnabled(true);
        }
    }, [selectedParkingLot]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsButtonEnabled(false);
        navigate('/admin/manual-reserve');
    };

    return (
        <form onSubmit={ handleSubmit } className={ styles.parkingLotSelection__container }>
            <div className={ styles.parkingLotSelection__title }>Parqueaderos</div>
            <div className={ styles.parkingLotSelection__description }>Por favor, seleccionar el parqueadero:</div>
            <div className={ styles.parkingLotSelection__parkingLots }>
                { filteredParkingLots.map(parkingLot => 
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
                        isSelected = { selectedParkingLot && selectedParkingLot.id && parkingLot.id === selectedParkingLot.id }
                    />)
                }
            </div>
            <div className={ styles.parkingLotSelection__notification }>
                { isButtonEnabled ? `Usted eligió el ${ selectedParkingLot.name }` : 'Usted no ha seleccionado un parqueadero' }
            </div>
            <button type='submit' disabled={ !isButtonEnabled }>CONTINUAR</button>
        </form>
    );
}

export default ManualParkingLotSelection;