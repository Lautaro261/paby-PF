import styles from './ReservationsHistory.module.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Update } from '../../redux/features/history/historySlice';
import {useAuth0} from "@auth0/auth0-react"
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';



const ReservationsHistory = () => {
    const dispatch=useDispatch()
    const { user, isLoading} = useAuth0()
    const userId =localStorage.getItem(`sub`);
    console.log(userId, "ANTES DE HISTORY")
    const history= useSelector(state=>state.history.historial)
    // useEffect(()=>{ if (user) {
    //     dispatch(Update(user.sub));
    // }}, [dispatch,user])


     useEffect(() => {
         if (userId) {
            console.log(userId, "DESDE USEFECT")
            dispatch(Update(userId));
            console.log("ok")
        }
    }, [dispatch, userId]);


    
    if(isLoading && !history[1]){
        return(<div><Loader/> </div>)
    }
    if( history[1]===undefined){
        return (<div >
            <div className={styles.title}>Historial de Reservas</div>
            <p className={styles.boxerr}>Vaya... parece ser que aún no tienes reservaciones</p>
            <Link to="/home">Volver</Link>
            </div>)
    }
      
        console.log(history[1], "desde componente")

        return (
            <div key="one" className={styles.cont}>
                <div className={styles.title}>Historial de Reservas</div>
                {history[1].map((elem)=>{
                    return(<div className={styles.box} key={elem.id}>
                        <div key={elem.admission_time}>Hora de entrada: {elem.admission_time} hs</div>
                        <div key={elem.departure_time}>Hora de salida: {elem.departure_time} hs</div>
                        <div key={elem.full_reserve_value}>Monto: ${elem.full_reserve_value}</div>
                        <div key={elem.payment_status}>Estado: {elem.payment_status}</div>
                        <div key={elem.id}>Código de reserva: {elem.id}</div>
                            </div>)
                })}
            </div>
        );
};

export default ReservationsHistory;