import styles from './ReservationsHistory.module.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Update } from '../../redux/features/history/historySlice';
import {useAuth0} from "@auth0/auth0-react"



const ReservationsHistory = () => {
    const dispatch=useDispatch()
    const { user, isLoading} = useAuth0()
    const userId = user && user.sub;

    const history= useSelector(state=>state.history)
    // useEffect(()=>{ if (user) {
    //     dispatch(Update(user.sub));
    // }}, [dispatch,user])

     //useEffect(()=>{dispatch(Update(user));
     //}, [dispatch])
     useEffect(() => {
        if (userId) {
            dispatch(Update(userId));
        }
    });


    
    if(isLoading){
        return(<div>cargando...</div>)
    }
      
        console.log(history.historial, "desde componente")
        
        return (
            <div>
                {history.historial.map((elem)=>{
                    return(<div key={elem.id}>{elem.title}</div>)
                })}
            </div>
        );
};

export default ReservationsHistory;
