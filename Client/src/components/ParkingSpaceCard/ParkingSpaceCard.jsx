import styles from './ParkingSpaceCard.module.css';
import { useDispatch } from 'react-redux';
import { setSelectedParkingSpace } from '../../redux/features/parkingSpaces/parkingSpacesSlice';

const ParkingSpaceCard = (props) => {
	const { parking_space_id, parking_space_label, vehicle_type, parking_space_status } = props;
	const dispatch = useDispatch();

	let parkingSpaceCardStatus;
	let buttonAvailability;
	switch (parking_space_status) {
		case 'Available':
			parkingSpaceCardStatus = styles.parkingSpaceCard__status_available;
			buttonAvailability = false;
		break;
		case 'Occupied':
			parkingSpaceCardStatus = styles.parkingSpaceCard__status_occupied;
			buttonAvailability = true;
		break;
		case 'Reserved':
			parkingSpaceCardStatus = styles.parkingSpaceCard__status_reserved;
			buttonAvailability = true;
		break;
		default:
			parkingSpaceCardStatus = '';
	}

	const handleClick = () => {
		const selectedParkingSpace = {
			id: parking_space_id,
			zone_status: 'reserved'
		}
		dispatch(setSelectedParkingSpace(selectedParkingSpace));
	};

	return (
		<div className={ styles.parkingSpaceCard__container }>
		    <div className={ styles.parkingSpaceCard__zoneAndImage }>
		        <div className={ styles.parkingSpaceCard__label }>Zona No.:</div>
		        <div className={ styles.parkingSpaceCard__number }>{ parking_space_label }</div>
		        <img src={ `/images/${ vehicle_type }.png` } alt = 'Vehicle image' className={ styles.parkingSpaceCard__image }/>
		    </div>
		    <button 
			    type='button' 
				className={ `${ parkingSpaceCardStatus }` }
				disabled={ buttonAvailability }
				onClick={ handleClick }
			>
				{ parking_space_status }
		    </button>
		</div>
	);
};

export default ParkingSpaceCard;