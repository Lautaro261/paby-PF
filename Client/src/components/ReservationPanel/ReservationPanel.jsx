import styles from './ReservationPanel.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ParkingSpaceCard from '../ParkingSpaceCard/ParkingSpaceCard';
import { setCurrentPage } from '../../redux/features/parkingSpacesPagination/parkingSpacesPaginationSlice';
import { 
    setParkingSpaceStatusFromFilter, 
    setVehicleTypeFromFilter, 
    updateParkingSpaceStatusById 
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
    const [filteredParkingSpaces, setFilteredParkingSpaces] = useState(parkingSpacesInThisLevel);

    const availableParkingSpaces = parkingSpacesInThisLevel.filter(pS => pS.zone_status === 'Disponible');
    const occupiedParkingSpaces = parkingSpacesInThisLevel.filter(pS => pS.zone_status === 'Ocupado');
    const reservedParkingSpaces = parkingSpacesInThisLevel.filter(pS => pS.zone_status === 'Reservado');

    const currentPage = useSelector(state => state.parkingSpacesPagination.currentPage);
    const itemsPerPage = useSelector(state => state.parkingSpacesPagination.itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentFilteredParkingSpaces = filteredParkingSpaces.slice(startIndex, endIndex);

    let selectedParkingSpace = useSelector(state => state.parkingSpaces.selectedParkingSpace);

    useEffect(() => {
        if (Object.keys(selectedParkingSpace).length > 0) {
            setIsParkingSpaceSelected(true);
        } else {
            setIsParkingSpaceSelected(false);
        }
    }, [selectedParkingSpace]);

    const handleLevelSelection = (e) => {
        const selectedLevel = levels.find(level => level.name === e.target.textContent);
        setSelectedLevel(selectedLevel);
        const parkingSpacesInSelectedLevel = parking_spaces.filter(pS => pS.floorId === selectedLevel.id);
        setFilteredParkingSpaces(parkingSpacesInSelectedLevel);
        document.getElementById('parkingSpaceStatusFilter').value = '';
        document.getElementById('vehicleTypeFilter').value = '';
        dispatch(setCurrentPage(1));
    };

    let vehicleTypeFromFilter = useSelector(state => state.parkingSpaces.vehicleTypeFromFilter);
    let parkingSpaceStatusFromFilter = useSelector(state => state.parkingSpaces.parkingSpaceStatusFromFilter);

    const filterParkingSpaceByStatus = (e) => {
        dispatch(setParkingSpaceStatusFromFilter(e.target.value));
        if (document.getElementById('vehicleTypeFilter').value === '') {
            setFilteredParkingSpaces(parkingSpacesInThisLevel.filter(pSSForThisLevel => 
                pSSForThisLevel.zone_status === e.target.value));
        } else {
            const filteredParkingSpacesByStatus = parkingSpacesInThisLevel.filter(pSSForThisLevel => 
                pSSForThisLevel.vehicle_type === vehicleTypeFromFilter);
            setFilteredParkingSpaces(filteredParkingSpacesByStatus.filter(pSSForThisLevel => 
                pSSForThisLevel.zone_status === e.target.value));
        }
        dispatch(setCurrentPage(1));
    };

    const filterByVehicleType = (e) => {
        dispatch(setVehicleTypeFromFilter(e.target.value));
        if (document.getElementById('parkingSpaceStatusFilter').value === '') {
            setFilteredParkingSpaces(parkingSpacesInThisLevel.filter(pSSForThisLevel => 
                pSSForThisLevel.vehicle_type === e.target.value));
        } else {
            const filteredParkingSpacesByVehicleType = parkingSpacesInThisLevel.filter(pSSForThisLevel => 
                pSSForThisLevel.zone_status === parkingSpaceStatusFromFilter);
            setFilteredParkingSpaces(filteredParkingSpacesByVehicleType.filter(pSSForThisLevel => 
                pSSForThisLevel.vehicle_type === e.target.value));
        }
        dispatch(setCurrentPage(1));
    };

    const removeFilters = () => {
        dispatch(setParkingSpaceStatusFromFilter(''));
        dispatch(setVehicleTypeFromFilter(''));
        setFilteredParkingSpaces(parkingSpacesInThisLevel);
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
        dispatch(updateParkingSpaceStatusById(selectedParkingSpace));
        setIsParkingSpaceSelected(false);
        alert(`Se envió al backend a actualizar la zona No ${ selectedParkingSpace.zone_number } del ${ selectedLevel.name }`);
    };

    if (
        Object.keys(parking_lot).length === 0 || 
        Object.keys(levels).length === 0 ||
        Object.keys(parking_spaces).length === 0
    ) {
        return (
            <div className={ styles.reservationPanel__error }>
                <div className={ styles.reservationPanel__error_message }>
                    Por favor, seleccione primero un parqueadero que cuente con pisos y zonas.
                </div>
                <Link to='/parking-lot-selection'>
                    <button>Ir a seleccionar parqueadero</button>
                </Link>
            </div>
        );
    }

    return (
        <div className={ styles.reservationPanel__pageContainer }>
            <form onSubmit={ handleSubmit } className={ styles.reservationPanel__formContainer }>
                <div className={ styles.reservationPanel__title }>Panel de Reservación</div>
                <div>Total de Zonas del { selectedLevel.name }: { selectedLevel.amount }</div>
                <div className={ styles.reservationPanel__parkingSpaces_statuses }>
                    <div className={ styles.reservationPanel__parkingSpaces_status }>
                        <div className={ styles.reservationPanel__available }></div>
                        <div>Disponibles: { availableParkingSpaces.length }</div>
                    </div>
                    <div className={ styles.reservationPanel__parkingSpaces_status }>
                        <div className={ styles.reservationPanel__occupied }></div>
                        <div>Ocupados: { occupiedParkingSpaces.length }</div>
                    </div>
                    <div className={ styles.reservationPanel__parkingSpaces_status }>
                        <div className={ styles.reservationPanel__reserved }></div>
                        <div>Reservados: { reservedParkingSpaces.length }</div>
                    </div>
                </div>
                <div className={ styles.reservationPanel__parkingSpaces_filters }>
                    <div className={ styles.reservationPanel__parkingSpaces_filter }>
                        <label htmlFor='parkingSpaceStatusFilter'>Estatus de la zona:</label>
                        <select id='parkingSpaceStatusFilter' onChange={ filterParkingSpaceByStatus } defaultValue=''>
                            <option value='' disabled>Estatus</option>
                            <option value='Disponible'>Disponibles</option>
                            <option value='Ocupado'>Ocupados</option>
                            <option value='Reservado'>Reservados</option>
                        </select>
                    </div>
                    <div className={ styles.reservationPanel__parkingSpaces_filter }>
                        <label htmlFor='vehicleTypeFilter'>Zona para estacionar:</label>
                        <select id='vehicleTypeFilter' onChange={ filterByVehicleType } defaultValue=''>
                            <option value='' disabled>Tipo de vehículo</option>
                            <option value='Automovil'>automovil</option>
                            <option value='Motocicleta'>motocicleta</option>
                        </select>
                    </div>
                    <button type='button' onClick={ removeFilters }>Eliminar filtros</button>
                </div>
                <div className={ styles.reservationPanel__levelsContainer }>
                    <div>Pisos:</div>
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
                    <div>Zonas del { selectedLevel.name }:</div>
                </div>
                <div className={ styles.reservationPanel__parkingSpaces_description }>
					{ currentFilteredParkingSpaces.length > 0 ? currentFilteredParkingSpaces.map(p_s => 
				    	<ParkingSpaceCard 
				    	    key={ p_s.id }
                            parking_space_id={ p_s.id }
				    	    parking_space_label={ p_s.zone_number }
				    	    vehicle_type={ p_s.vehicle_type }
				    	    parking_space_status={ p_s.zone_status }
				    	/>
				        ) : 'No hay zonas para mostrar' 
                    }
				</div>
                <div className={ styles.reservationPanel__pagination__buttons }>
                    <button
                        onClick={ handlePreviousPage } 
                        disabled={ currentPage === 1 }
                        className={ styles.reservationPanel__pagination__button }
                    >
                        { '<<<' } Atrás
                    </button>
                    <div className={ styles.reservationPanel__pagination__page }>
                        { currentPage } de {' '}
                        { filteredParkingSpaces.length > 0 ? 
                        Math.ceil(filteredParkingSpaces.length/itemsPerPage) : 
                        1 } 
                    </div>
                    <button 
                        onClick={ handleNextPage }
                        disabled={ endIndex >= filteredParkingSpaces.length } 
                        className={ styles.reservationPanel__pagination__button }
                    >
                        Siguiente { '>>>' }
                    </button>
                </div>
                <div>Tarifa por hora: { parking_lot.fee }</div>
				<div className={ styles.reservationPanel__regulation }>No dejar pertenencias en el auto. No nos hacemos responsables.</div>
                <div className={ styles.reservationPanel__notification }>
                    { isParkingSpaceSelected ? 
                        `Usted seleccionó la zona ${ selectedParkingSpace.zone_number } ` + 
                        `para ${ selectedParkingSpace.vehicle_type }` : 
                        null
                    }
                </div>
				<button type='submit' disabled={ !isParkingSpaceSelected }>
                    CONTINUAR
                </button>
            </form>
        </div>
    );
};

export default ReservationPanel;