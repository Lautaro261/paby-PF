import styles from './ReservationsHistory.module.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Update } from '../../redux/features/history/historySlice';
import {useAuth0} from "@auth0/auth0-react"


const ReservationsHistory = () => {
    const dispatch=useDispatch()
    const { user} = useAuth0()
    useEffect(()=>{dispatch(Update(user.id))}, [dispatch])
    const history= useSelector(state=>state.history)





    console.log(history.historial, "desde componente")
    return (
        <div>
            {history.historial.title}
            Mi historial de Reservas
        </div>
    );
};

export default ReservationsHistory;