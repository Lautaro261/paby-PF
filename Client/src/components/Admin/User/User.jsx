import React, { useEffect }from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserBan, getAllUserForAdmin } from "../../../redux/features/admin/adminSlice";
import styles from './User.module.css'

const User = ({sub, name, email, borrado}) => {
    const dispatch = useDispatch();
    const token = localStorage.getItem(`token`) // traigo el token de localStorage
    
    const handleToggleBan = () => {
        console.log('LINEA 12 HANDLER DE USER.JSX', sub, token)
        dispatch(toggleUserBan({sub, token}));   //se dispacha la action que tiene la ruta put 
    }
    
    useEffect(() => {
        console.log(token, "LINEA 13 TRAIGO TODOS LOS USERS. ALLUSERS.JSX"); 
        dispatch(getAllUserForAdmin(token));
    }, [dispatch, token]);
     // si existe un usuario con el sub igual a nuestro        

return ( 
    <div className={styles.userConteiner}>
        <Link to={`/admin/clients/details/${sub}`}>
            <label>Nombre: <p>{name}</p></label>
        </Link>
        
        <label>Email: <p>{email}</p></label>
            
        <p>{ borrado ? 'Baneado' : 'No baneado'}</p>       {/*   // mensaje para saber si esta baneado o no */}
        <button onClick={handleToggleBan}>{ borrado ? 'Desbanear' : 'Banear'}</button> {/* // boton condicional   */}
    </div>                                                                             // segun el estado de ban
)
}

export default User
