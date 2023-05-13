import React from "react";
import { logOutUser } from "../../redux/features/users/usersSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const OwnLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const handleLogout = () => {
        dispatch(logOutUser())
        localStorage.removeItem(`sub`)
        localStorage.removeItem(`email`)
        navigate('/')

    }
    return (
        <button onClick={handleLogout}>Cerrar sesión Local</button>
    )
}

export default OwnLogout