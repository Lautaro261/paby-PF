import styles from '../../ParkingLotFilter/ParkingLotFilter.module.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
    getAllParkingLots, 
    setCitiesForTheParkingLotFilter, 
    setFilteredParkingLots 
} from '../../../redux/features/parkingSpaces/parkingSpacesSlice';

const ManualParkingLotFilter= () => {
    const [isCountrySelected, setIsCountrySelected] = useState(false);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    const dispatch = useDispatch();
    const allParkingLots = useSelector(state => state.parkingSpaces.allParkingLots);
    const citiesForTheParkingLotFilter = useSelector(state => state.parkingSpaces.citiesForTheParkingLotFilter);
    
    useEffect(() => {
        dispatch(getAllParkingLots());
    }, [dispatch]);

    const handleCountry = (e) => {
        const cities = allParkingLots
            .filter(parkingLot => parkingLot.country === e.target.value)
            .map(parkingLot => parkingLot.city)
            .reduce((acc, city) => {
                if (!acc.includes(city)) {
                    acc.push(city);
                }
                return acc;
            }, []);
        dispatch(setCitiesForTheParkingLotFilter(cities));
        setIsCountrySelected(true);
    }

    const handleCity = (e) => {
        const filteredParkingLotsByCity = allParkingLots
            .filter(parkingLot => parkingLot.city === e.target.value);
        dispatch(setFilteredParkingLots(filteredParkingLotsByCity));
        setIsButtonEnabled(true);
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/admin/manual-parking-lot-selection');
        setIsCountrySelected(false);
        setIsButtonEnabled(false);
    };

    if (!allParkingLots || !allParkingLots.length) {
        
        return (
            <div className={ styles.parkingLotFilter__error }>
                <div>No se pudo cargar la lista de parqueaderos</div>
                <Link to='/admin/home'>
                    <button>Volver a Home</button>
                </Link>
            </div>
        );
    }

    const countries = allParkingLots
    .map(parkingLot => parkingLot.country)
    .filter(country => country.trim() !== '')
    .reduce((acc, country) => {
        if (!acc.includes(country)) {
            acc.push(country);
        }
        return acc;
    }, []);

    return (
        <form onSubmit={ handleSubmit } className={ styles.parkingLotFilter__container }>
            <div className={ styles.parkingLotFilter__title }>Selecciona tu ubicación actual para ver la lista de parqueaderos:</div>
            <div className={ styles.parkingLotFilter__formGroup }>
                <label htmlFor='country' className={ styles.parkingLotFilter__label }>País:</label>
                <select id='country' onChange={ handleCountry } defaultValue=''>
                    <option value=''>Seleccionar país</option>
                    { countries.map(country => (
                        <option key={ country } value={ country }>{ country }</option>
                    )) }
                </select>
            </div>
            <div className={ styles.parkingLotFilter__formGroup }>
                <label htmlFor='city' className={ styles.parkingLotFilter__label }>Ciudad:</label>
                <select id='city' onChange={ handleCity } defaultValue='' disabled={ !isCountrySelected }>
                    <option value=''>Seleccionar ciudad</option>
                    { citiesForTheParkingLotFilter.map(city => (
                        <option key={ city } value={ city }>{ city }</option>
                    )) }
                </select>
            </div>
            <button 
                type='submit' 
                disabled={ !isButtonEnabled } 
            >
                BUSCAR
            </button>
            <div className={ styles.parkingLotFilter__notes }>
                <div className={ styles.parkingLotFilter__note }>
                    Nuestra plataforma se está extendiendo a más países y ciudades gradualmente.
                </div>
                <div className={ styles.parkingLotFilter__note }>
                    Si no estamos disponibles en tu región por el momento, próximamente esperamos estar presente.
                </div>
            </div>
        </form>
    );
}

export default ManualParkingLotFilter;