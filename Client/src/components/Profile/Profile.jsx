import React from "react";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
// import { getProfile } from "../../redux/features/users/usersSlice.js";

const Profile = () => {
    const { user } = useAuth0();
    // const profile = useSelector(state => state.users.userProfile);

    // useEffect(() => {
    //     dispatch(getProfile());
    // }, []);

    const goBack = () => {

        window.history.back();
    }

    return (
        <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>Email:{user.email}</p>
            {/* <p>Apodo: {profile.nickname}</p>
            <p>Telefono: {profile.phone}</p>
            <p>País: {profile.country}</p>
            <p>Ciudad: {profile.city}</p>
            <p>Dirección: {profile.address}</p>
            <p>Vecindario: {profile.neighborhood}</p> */}
            <button onClick={goBack}>Volver</button>
        </div>
    )
}

export default Profile


