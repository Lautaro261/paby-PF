import React from "react";
import { logOutUser } from "../../redux/features/users/usersSlice";
import { useDispatch } from "react-redux";

const OwnLogout = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logOutUser())
    }
    return (
        <button onClick={handleLogout}>Cerrar sesión</button>
    )
}

export default OwnLogout