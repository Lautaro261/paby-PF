import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserBan } from "../../../redux/features/admin/adminSlice";
import styles from './User.module.css'

const User = ({sub, name, email}) => {
    const dispatch = useDispatch();
    const bannedUsers = useSelector((state)=> state.admin.bannedUsers) //traigo el estado de baneados de admin
    const token = localStorage.getItem(`token`) // traigo el token de localStorage

    const handleToggleBan = () => {
        console.log('LINEA 12 HANDLER DE USER.JSX', sub, token)
        dispatch(toggleUserBan({sub, token}));   //se dispacha la action que tiene la ruta put 
    }

    const isBanned = bannedUsers.some((user)=> user.sub === sub); // si existe un usuario con el sub igual a nuestro
                                                                
return ( 
    <div className={styles.userConteiner}>
        <Link to={`/admin/clients/details/${sub}`}>
            <label>Nombre: <p>{name}</p></label>
        </Link>
        
        <label>Email: <p>{email}</p></label>
            
        <p>{ isBanned ? 'Baneado' : 'No baneado'}</p>       {/*   // mensaje para saber si esta baneado o no */}
        <button onClick={handleToggleBan}>{ isBanned ? 'Desbanear' : 'Banear'}</button> {/* // boton condicional   */}
    </div>                                                                             // segun el estado de ban
)
}

export default User
