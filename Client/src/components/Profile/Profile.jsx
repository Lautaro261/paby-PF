import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getProfile } from "../../redux/features/users/usersSlice.js";

const Profile = () => {
    const { user } = useAuth0();
    const profile = useSelector(state => state.users.userProfile);
    const dispatch = useDispatch()
    const [isProfileComplete, setIsProfileComplete] = useState(false);
    const userSub= user.sub

    useEffect(() => {
        dispatch(getProfile(user.sub));
    }, [dispatch, user.sub]);

    const goBack = () => {
        window.history.back();
    }

    useEffect(() => {
        if (profile?.profileById?.phone &&
            profile?.profileById?.country &&
            profile?.profileById?.city &&
            profile?.profileById?.address &&
            profile?.profileById?.neighborhood) {
            localStorage.setItem(`isProfileComplete_${userSub}`, true);
            setIsProfileComplete(true);

        }
    }, [profile]);

    return (
        <div>
            <div>
                <img src={profile?.userById?.photo} alt={profile?.userById?.name} />
                <h2>{profile?.userById?.name}</h2>
                <p>Email:{profile?.userById?.email}</p>
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


