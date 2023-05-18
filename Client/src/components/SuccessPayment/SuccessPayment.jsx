import styles from './SuccessPayment.module.css';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postParkingSpaceReservationNotification } from '../../redux/features/parkingSpacesReservation/parkingSpacesReservationSlice';
import { 
    setSelectedParkingLot, 
    updateParkingSpaceStatus 
} from '../../redux/features/parkingSpaces/parkingSpacesSlice';
import { setCurrentPage } from '../../redux/features/pagination/paginationSlice';

const SuccessPayment = () => {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const { 
        collection_id, 
        collection_status, 
        payment_id, status, 
        external_reference, 
        payment_type, 
        merchant_order_id, 
        preference_id, 
        site_id, 
        processing_mode, 
        merchant_account_id 
    } = Object.fromEntries(params.entries());

    const dispatch = useDispatch();
    const selectedParkingSpace = JSON.parse(localStorage.getItem('selectedParkingSpace'));

    useEffect(() => {
        console.log(selectedParkingSpace, "aqui esta el parkingspace")
        if (selectedParkingSpace) {
            console.log("entré al usefect")
            dispatch(postParkingSpaceReservationNotification(`collection_id=${ collection_id }&preference_id=${ preference_id }&collection_status=${ collection_status }`));
            dispatch(updateParkingSpaceStatus(selectedParkingSpace));
            dispatch(setSelectedParkingLot({}));
            dispatch(setCurrentPage(1));
            localStorage.removeItem('selectedParkingSpace');
        }
    }, [dispatch, selectedParkingSpace]);

    return (
        <div className={ styles.successPayment__container }>
            <div className={ styles.successPayment__notification }>
                !Felicidades! Su pago se realizó con éxito
            </div>
            <div className={ styles.successPayment__information }>
                A continuación el informe de su pago:
            </div>
            <div className={ styles.successPayment__item_description }>
                <b>Collection ID:</b><div>{ collection_id }</div>
            </div>
            <div className={ styles.successPayment__item_description }>
                <b>Collection Status:</b><div>{ collection_status }</div>
            </div>
            <div className={ styles.successPayment__item_description }>
                <b>Payment ID:</b><div>{ payment_id }</div>
            </div>
            <div className={ styles.successPayment__item_description }>
                <b>Status:</b><div>{ status }</div>
            </div>
            <div className={ styles.successPayment__item_description }>
                <b>External Reference:</b><div>{ external_reference }</div>
            </div>
            <div className={ styles.successPayment__item_description }>
                <b>Payment Type:</b><div>{ payment_type }</div>
            </div>
            <div className={ styles.successPayment__item_description }>
                <b>Merchant Order ID:</b><div>{ merchant_order_id }</div>
            </div>
            <div className={ styles.successPayment__item_description }>
                <b>Preference ID:</b><div>{ preference_id }</div>
            </div>
            <div className={ styles.successPayment__item_description }>
                <b>Site ID:</b><div>{ site_id }</div>
            </div>
            <div className={ styles.successPayment__item_description }>
                <b>Processing Mode:</b><div>{ processing_mode }</div>
            </div>
            <div className={ styles.successPayment__item_description }>
                <b>Merchant Account ID:</b><div>{ merchant_account_id }</div>
            </div>
            <Link to='/reservations-history' className={ styles.successPayment__button }>
                <button>Ir al historial de mis reservas</button>
            </Link>
            <br />
            <Link to='/home' className={ styles.successPayment__button }>
                <button>Volver a Home</button>
            </Link>
        </div>
    );
};

export default SuccessPayment;