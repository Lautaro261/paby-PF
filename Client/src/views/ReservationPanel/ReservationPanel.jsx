import styles from './ReservationPanel.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ParkingSpaceCard from '../../components/ParkingSpaceCard/ParkingSpaceCard';
import { setCurrentPage } from '../../redux/features/parkingSpacesPagination/parkingSpacesPaginationSlice';
import { getParkingLotById,
    getLevelsByParkingLotId,
    getParkingSpacesByParkingLotId
} from '../../redux/features/parkingSpaces/parkingSpacesSlice';

const ReservationPanel = () => {
    const dispatch = useDispatch();
    const parking_lot = useSelector(state => state.parkingSpaces.parkingLot);
    const levels = useSelector(state => state.parkingSpaces.levelsForThisParkingLot);
    const parking_spaces = useSelector(state => state.parkingSpaces.parkingSpacesForThisParkingLot);

    const initialLevel = levels[0];
    const [isParkingSpaceSelected, setIsParkingSpaceSelected] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState(initialLevel);

    const parkingSpacesInThisLevel = parking_spaces.filter(pS => pS.floorId === selectedLevel.id);
    const [filteredParkingSpaces, setfilteredParkingSpaces] = useState(parkingSpacesInThisLevel);

    const availableParkingSpaces = parkingSpacesInThisLevel.filter(pS => pS.zone_status === 'available');
    const occupiedParkingSpaces = parkingSpacesInThisLevel.filter(pS => pS.zone_status === 'occupied');
    const reservedParkingSpaces = parkingSpacesInThisLevel.filter(pS => pS.zone_status === 'reserved');

    const currentPage = useSelector(state => state.parkingSpacesPagination.currentPage);
    const itemsPerPage = useSelector(state => state.parkingSpacesPagination.itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentFilteredParkingSpaces = filteredParkingSpaces.slice(startIndex, endIndex);

    let selectedParkingSpace = useSelector(state => state.parkingSpaces.selectedParkingSpace);
    useEffect(() => {
        dispatch(getParkingLotById());
        dispatch(getLevelsByParkingLotId());
        dispatch(getParkingSpacesByParkingLotId());

        if (Object.keys(selectedParkingSpace) !== 0) {
            setIsParkingSpaceSelected(true);
            console.log(isParkingSpaceSelected);
            // Falta corregir la actualización del atributo disabled del botón CONTINUAR
        } else {
            setIsParkingSpaceSelected(false);
        }
    }, [dispatch, selectedParkingSpace]);

    const handleLevelSelection = (e) => {
        const selectedLevel = levels.find(level => level.name === e.target.textContent);
        setSelectedLevel(selectedLevel);
        const parkingSpacesInSelectedLevel = parking_spaces.filter(pS => pS.floorId === selectedLevel.id);
        setfilteredParkingSpaces(parkingSpacesInSelectedLevel);
        document.getElementById('parkingSpaceStatusFilter').value = '';
        document.getElementById('vehicleTypeFilter').value = '';
        dispatch(setCurrentPage(1));
    };

    const filterParkingSpaceByStatus = (e) => {
        setfilteredParkingSpaces(parkingSpacesInThisLevel.filter(pSSForThisLevel => 
            pSSForThisLevel.zone_status === e.target.value));
        document.getElementById('vehicleTypeFilter').value = '';
        dispatch(setCurrentPage(1));
    };

    const filterByVehicleType = (e) => {
        setfilteredParkingSpaces(parkingSpacesInThisLevel.filter(pSSForThisLevel => 
            pSSForThisLevel.vehicle_type === e.target.value));
        document.getElementById('parkingSpaceStatusFilter').value = '';
        dispatch(setCurrentPage(1));
    };

    const removeFilters = () => {
        setfilteredParkingSpaces(parkingSpacesInThisLevel);
        document.getElementById('parkingSpaceStatusFilter').value = '';
        document.getElementById('vehicleTypeFilter').value = '';
        dispatch(setCurrentPage(1));
    };

    const handlePreviousPage = () => {
        dispatch(setCurrentPage(currentPage - 1));
    };

    const handleNextPage = () => {
        dispatch(setCurrentPage(currentPage + 1));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Se envió a actualizar al backend la zona con id ${ selectedParkingSpace.id }`);
    };

    return (
        <div>
            <form onSubmit={ handleSubmit } className={ styles.reservationPanel__formContainer }>
                <div>Panel de Reservación</div>
                <div>Total de Zonas: { selectedLevel.amount }</div>
                <div className={ styles.reservationPanel__parkingSpaces_statuses }>
                    <div>Disponibles: { availableParkingSpaces.length }</div>
                    <div>Ocupados: { occupiedParkingSpaces.length }</div>
                    <div>Reservados: { reservedParkingSpaces.length }</div>
                </div>
                <div className={ styles.reservationPanel__parkingSpaces_filters }>
                    <div className={ styles.reservationPanel__parkingSpaces_filter }>
                        <label htmlFor='parkingSpaceStatusFilter'>Estatus de la zona:</label>
                        <select id='parkingSpaceStatusFilter' onChange={ filterParkingSpaceByStatus } defaultValue=''>
                            <option value='' disabled>Estatus</option>
                            <option value='available'>Disponibles</option>
                            <option value='occupied'>Ocupados</option>
                            <option value='reserved'>Reservados</option>
                        </select>
                    </div>
                    <div className={ styles.reservationPanel__parkingSpaces_filter }>
                        <label htmlFor='vehicleTypeFilter'>Zona para estacionar:</label>
                        <select id='vehicleTypeFilter' onChange={ filterByVehicleType } defaultValue=''>
                            <option value='' disabled>Tipo de vehículo</option>
                            <option value='car'>carro</option>
                            <option value='motorcycle'>motocicleta</option>
                        </select>
                    </div>
                    <button type='button' onClick={ removeFilters }>Eliminar filtros</button>
                </div>
                <div className={ styles.reservationPanel__levelsContainer }>
                    <div>Piso:</div>
                    <div className={ styles.reservationPanel__levels }>
                        { levels.map(level => (
                            <button 
                                key={ level.id }
                                type='button'
                                onClick={ handleLevelSelection }
                            >
                                { level.name }
                            </button>
                        )) }
                    </div>
                </div>
                <div className={ styles.reservationPanel__parkingSpaces_description }>
					{ currentFilteredParkingSpaces.map(p_s => 
				    	<ParkingSpaceCard 
				    	    key={ p_s.id }
                            parking_space_id={ p_s.id }
				    	    parking_space_label={ p_s.zone_number }
				    	    vehicle_type={ p_s.vehicle_type }
				    	    parking_space_status={ p_s.zone_status.charAt(0).toUpperCase() + 
				    	        p_s.zone_status.slice(1) }
				    	/>
				    )}
				</div>
                <div className={ styles.reservationPanel__pagination__buttons }>
                    <button
                        onClick={ handlePreviousPage } 
                        disabled={ currentPage === 1 }
                        className={ styles.reservationPanel__pagination__button }
                    >
                        { '<<<' } Previous
                    </button>
                    <div className={ styles.reservationPanel__pagination__page}>
                        { currentPage } out of {' '}
                        { filteredParkingSpaces.length > 0 ? 
                        Math.ceil(filteredParkingSpaces.length/itemsPerPage) : 
                        1 } 
                    </div>
                    <button 
                        onClick={ handleNextPage }
                        disabled={ endIndex >= filteredParkingSpaces.length } 
                        className={ styles.reservationPanel__pagination__button }
                    >
                        Next { '>>>' }
                    </button>
                </div>
                <div>Tarifa por hora: { parking_lot.fee }</div>
				<div>No dejar pertenencias en el auto. No nos hacemos responsables.</div>
				<button type='submit' disabled={!isParkingSpaceSelected}>
                    CONTINUAR
                </button>
            </form>
        </div>
    );
};

export default ReservationPanel;