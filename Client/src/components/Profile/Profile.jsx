import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getProfile } from "../../redux/features/users/usersSlice.js";

const Profile = () => {
    const { user } = useAuth0();
    const profile = useSelector(state => state.userProfile);
    const dispatch= useDispatch()

    useEffect(() => {
        dispatch(getProfile(user.sub));
    }, [dispatch, user.sub]);

    const goBack = () => {

        window.history.back();
    }

    return (
        <div>
            <div>
            <img src={user.picture} alt={user.name}/>
            <h2>{user.name}</h2>
            <p>Email:{user.email}</p>
            <p>Apodo: {profile?.profileById?.nickname}</p>
            <p>Telefono: {profile?.profileById?.phone}</p>
            <p>País: {profile?.profileById?.country}</p>
            <p>Ciudad: {profile?.profileById?.city}</p>
            <p>Dirección: {profile?.profileById?.address}</p>
            <p>Vecindario: {profile?.profileById?.neighborhood}</p>
            </div>

            <button onClick={goBack}>Volver</button>
            
        </div>
    )
}

export default Profile


