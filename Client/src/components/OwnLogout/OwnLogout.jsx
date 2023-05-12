import React from "react";
// import { logOutUser } from "../../redux/features/users/usersSlice";
// import { useDispatch } from "react-redux";

const OwnLogout = () => {
    // const dispatch = useDispatch();

    const handleLogout = () => {
        // dispatch(logOutUser())
    console.log('cierre de sesión')    
    }
    return (
        <button onClick={handleLogout}>Cerrar sesión Local</button>
    )
}

export default OwnLogout