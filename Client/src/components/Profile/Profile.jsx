import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getProfile } from "../../redux/features/users/usersSlice.js";
import { Link } from 'react-router-dom';
import styles from './Profile.module.css';

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
        <div className={styles.continerPrincial}>
         <img className={styles.imgProfile} src={profile?.userById?.photo} alt={profile?.userById?.name} />
            <div className={styles.continer2}>
                <h2 className={styles.nombreUsuario}>{profile?.userById?.name}</h2>
                <p className={styles.profileText}>Email:{profile?.userById?.email}</p>
                <p className={styles.profileText}>Apodo: {profile?.profileById?.nickname}</p>
                <p className={styles.profileText}>Telefono: {profile?.profileById?.phone}</p>
                <p className={styles.profileText}>País: {profile?.profileById?.country}</p>
                <p className={styles.profileText}>Ciudad: {profile?.profileById?.city}</p>
                <p className={styles.profileText}>Dirección: {profile?.profileById?.address}</p>
                <p className={styles.profileText}>Vecindario: {profile?.profileById?.neighborhood}</p>
            </div>

            <Link className={styles.editBoton} to="/editprofile">Editar Perfil</Link>
            <button className={styles.Volver} onClick={goBack}>Volver</button>

        </div>
    )
}

export default Profile

