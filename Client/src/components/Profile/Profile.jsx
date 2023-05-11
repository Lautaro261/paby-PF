import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getProfile } from "../../redux/features/users/usersSlice";
import { Link } from 'react-router-dom';
import styles from './Profile.module.css';

const Profile = () => {
    const {isAuthenticated} = useAuth0();
    const profile = useSelector(state => state.users.userProfile );
    const userSub=localStorage.getItem(`sub`)
    const user = {"sub": localStorage.getItem(`sub`),
                    "name": localStorage.getItem(`name`),
                    "photo":localStorage.getItem(`photo`),
                    "email":localStorage.getItem(`email`),

}
    //const userSub= user.sub 
    const dispatch = useDispatch();
    //const [showProfileCompleteModal, setShowProfileCompleteModal] = useState(false);
   // const [isProfileComplete, setIsProfileComplete] = useState(false);


    if(!user){
        return <div>Cargando... </div>
    }

    useEffect(() => {
        if (userSub) {
            dispatch(getProfile(userSub));
       }
    }, [dispatch, isAuthenticated]);


    const goBack = () => {
        window.history.back();
    }
    /* useEffect(()=>{
        const isProfileComplete = localStorage.getItem(`isProfileComplete_${userSub}`);
        if(!isProfileComplete && isAuthenticated && profile?.profileById){
            //setShowProfileCompleteModal(true);
        }
    },[isAuthenticated, userSub, profile]); */
    
    useEffect(() => {
        if (userSub &&
            profile?.profileById?.phone &&
            profile?.profileById?.country &&
            profile?.profileById?.city &&
            profile?.profileById?.address &&
            profile?.profileById?.neighborhood) {
            localStorage.setItem(`isProfileComplete_${userSub}`, true);
            //setIsProfileComplete(true);
        }
    }, [profile,]);

    return (
        <div className={styles.conteinerPrincial}>
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


