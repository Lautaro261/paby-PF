import styles from './ParkingSpacePayment.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ParkingSpacePayment = () => {
    const parkingSpacePaymentLink = useSelector(state => state.parkingSpacesReservation.parkingSpacePaymentLink);

    return (
        <div className={ styles.parkingSpacesReservation__container }>
            <div>Presione click para pasar a la pasarela de pago y completar su reservación</div>
            <Link to={ parkingSpacePaymentLink }>
                <button>Proceder a Pagar</button>
            </Link>
        </div>
    );
};

export default ParkingSpacePayment;