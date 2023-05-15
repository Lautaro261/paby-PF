import styles from './ParkingLotCard.module.css';
import { useDispatch } from 'react-redux';
import { 
    getParkingLotById,
    getLevelsByParkingLotId,
    getParkingSpacesByParkingLotId
} from '../../redux/features/parkingSpaces/parkingSpacesSlice';

const ParkingLotCard = (props) => {
    const { id, name, nit, country, city, address, neighborhood, floors, fee, photo, regulation, isSelected } = props;
    
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(getParkingLotById(id));
        dispatch(getLevelsByParkingLotId(id));
        dispatch(getParkingSpacesByParkingLotId(id));
    };

    return (
        <button type='button' onClick={ handleClick } className={ isSelected ? styles.parkingLotCard__container_selected : styles.parkingLotCard__container }>
            <div className={ styles.parkingLotCard__property }>
                <div className={ styles.parkingLotCard__property_key }>Nombre:</div><div>{ name }</div>
            </div>
            <div className={ styles.parkingLotCard__property }>
                <div className={ styles.parkingLotCard__property_key }>nit: </div><div>{ nit }</div>
            </div>
            <div className={ styles.parkingLotCard__property }>
                <div className={ styles.parkingLotCard__property_key }>País: </div><div>{ country }</div>
            </div>
            <div className={ styles.parkingLotCard__property }>
                <div className={ styles.parkingLotCard__property_key }>Ciudad: </div><div>{ city }</div>
            </div>
            <div className={ styles.parkingLotCard__property }>
                <div className={ styles.parkingLotCard__property_key }>Dirección: </div><div>{ address }</div>
            </div>
            <div className={ styles.parkingLotCard__property }>
                <div className={ styles.parkingLotCard__property_key }>Barrio: </div><div>{ neighborhood }</div>
            </div>
            <div className={ styles.parkingLotCard__property }>
                <div className={ styles.parkingLotCard__property_key }>Pisos: </div><div>{ floors }</div>
            </div>
            <div className={ styles.parkingLotCard__property }>
                <div className={ styles.parkingLotCard__property_key }>Costo por hora: </div><div>{ fee }</div>
            </div>
            <img src={ photo } alt='Parking lot image' className={ styles.parkingLotCard__image } />
            <div className={ styles.parkingLotCard__regulation }>{ regulation }</div>
        </button>
    );
};

export default ParkingLotCard;