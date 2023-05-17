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
        localStorage.removeItem(`name`)
        localStorage.removeItem(`photo`)
        localStorage.removeItem(`token`)
        localStorage.setItem(`isLoggedIn`, false)
        localStorage.removeItem(`isLoggedIn`)
        localStorage.removeItem("rol")
        navigate('/')

    }
    return (
        <button onClick={handleLogout}>Cerrar sesión Local</button>
    )
}

export default OwnLogout