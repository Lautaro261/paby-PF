import styles from './FailurePayment.module.css';
import { Link } from 'react-router-dom';

const FailurePayment = () => {
    return (
        <div className={ styles.failurePayment__container }>
            <div className={ styles.failurePayment__notification}>
                ¡Lo siento! Hubo un error al momento de tratar de realizar el pago
            </div>
            <Link to='/parking-lot-filter'>
                <button>Volver a la elección de parqueadero</button>
            </Link>
        </div>
    );
};

export default FailurePayment;