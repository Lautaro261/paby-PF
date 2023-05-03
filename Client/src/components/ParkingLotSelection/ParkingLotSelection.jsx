import styles from './ParkingLotSelection.module.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ParkingLotCard from '../ParkingLotCard/ParkingLotCard';

const ParkingLotSelection = () => {
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    const filteredParkingLots = useSelector(state => state.parkingSpaces.filteredParkingLots);
    const parkingLot = useSelector(state => state.parkingSpaces.parkingLot);

    useEffect(() => {
        if (Object.keys(parkingLot).length > 0) {
            setIsButtonEnabled(true);
        }
    }, [parkingLot]);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsButtonEnabled(false);
        navigate('/reservation-panel');
    };

    if (filteredParkingLots.length === 0) {
        return (
            <div className={ styles.parkingLotSelection__error }>
                <div>No hay parqueaderos para mostrar.</div>
                <div>Seleccione su ciudad primero.</div>
                <Link to='/parking-lot-filter'>
                    <button>Ir a seleccionar ciudad</button>
                </Link>
            </div>
        );
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div className={ styles.parkingLotSelection__title }>Parqueaderos</div>
            <div className={ styles.parkingLotSelection__description }>Por favor, seleccionar un parqueadero:</div>
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