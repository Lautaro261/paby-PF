import styles from './ReservationsHistory.module.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../../redux/features/history/historySlice';


const ReservationsHistory = () => {
    const history= useSelector(state=>state.history)
//    const history= useSelector((state)=>state.history)//
    const dispatch=useDispatch()

    useEffect(()=>{
        const dat=fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(json => {dispatch(update(json))})
        .catch((error)=>{console.log(error)})
        
    }, []);
    console.log(history.historial)



    return (
        
            <div>
            {history.historial}
            holaaa
            </div>
  

    );
};

export default ReservationsHistory;