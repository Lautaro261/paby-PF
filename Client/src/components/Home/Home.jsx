import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ProfileCompleteModal from '../ProfileCompleteModal/ProfileCompleteModal';
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from 'react-redux';
import { setUserSession, sendUserSession } from '../../redux/features/users/usersSlice'

import style from "./Home.module.css";
import logo from '../../imgs/Logopaby.png'

export default function Home() {
    const dispatch = useDispatch()
    const { user, isAuthenticated } = useAuth0();
    const userSub = user?.sub
    const [showProfileCompleteModal, setShowProfileCompleteModal] = useState(false);

    
    useEffect(() => {
        if(user) {
            dispatch(setUserSession({
                sub: user.sub,
                name: user.name,
                email:user.email,
                photo:user.picture
            }));
            dispatch(sendUserSession({
                sub: user.sub,
                name: user.name,
                email:user.email,
                photo:user.picture
            }));
        }
    },[user, dispatch]);

    useEffect(() => {
        const isProfileComplete = localStorage.getItem(`isProfileComplete_${userSub}`)
        if (!isProfileComplete) {
            setShowProfileCompleteModal(true);
        }
    }, [userSub]);

    const handleCloseModal = () => {
        localStorage.setItem(`isProfileComplete_${userSub}`, true);
        setShowProfileCompleteModal(false)
    }


    return (
        <div className={style.Home}>

            <h1>Bienvenidos a <img src={logo} alt='logoPaby' className={style.logoPaby} /></h1>
            {isAuthenticated && showProfileCompleteModal && (
                <ProfileCompleteModal onClose={handleCloseModal} />
            )}

            <p className={style.description}> Paby es la solución perfecta para tus necesidades de estacionamiento. Con nuestra aplicación web, puedes hacer reservas en cualquiera de nuestras sucursales de parqueaderos con tan solo unos clics. Olvídate de preocuparte por encontrar un lugar donde estacionar, con Paby tienes acceso a una red de parqueaderos confiables y seguros en todo momento.


                Además, nuestra plataforma te permite elegir la plaza que más te convenga y el tiempo que necesites, todo desde la comodidad de tu teléfono o computadora. Y no te preocupes por el pago, Paby te ofrece múltiples opciones de pago seguro a través de la aplicación.

                Únete a la comunidad de Paby y disfruta de la mejor experiencia de estacionamiento en línea. ¡Bienvenido a tu nueva forma de estacionar!</p>

            <Link to='/parking-lot-filter'><button>Reservar plaza</button></Link>
             
        </div>
    )
}