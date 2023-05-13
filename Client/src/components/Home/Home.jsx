import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ProfileCompleteModal from '../ProfileCompleteModal/ProfileCompleteModal';
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from 'react-redux';
import { setUserSession, sendUserSession } from '../../redux/features/users/usersSlice'
import style from "./Home.module.css";
import img1 from "../../imgs/img1.png"
import img2 from "../../imgs/img2.png"
import img3 from "../../imgs/img3.png"
import img4 from "../../imgs/img4.png"
import logo from "../../imgs/Logopaby.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
    const dispatch = useDispatch()
    const { user, isAuthenticated } = useAuth0();
    const userSub = user?.sub
    const name=user?.name
    const photo=user?.photo
    const email=user?.email
    const [showProfileCompleteModal, setShowProfileCompleteModal] = useState(false);
    useEffect(() => {
        AOS.init();
      }, [])
    
    useEffect(() => {
        if(user) {
            // dispatch(setUserSession({
            //     sub: user.sub,
            //     name: user.name,
            //     email:user.email,
            //     photo:user.picture
            // }));
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
    
    localStorage.setItem(`sub`, userSub);
    localStorage.setItem(`name`, name);
    localStorage.setItem(`photo`, photo);
    localStorage.setItem(`email`, email);


    return (
        <div className={style.Home}>
            <h1 data-aos="fade-down" data-aos-duration="1000">Bienvenidos a <img src={logo} alt='logoPaby' className={style.logoPaby} /></h1>
                <div className={style.flexcontainer}>
                    <div className={style.flexitems}>
                        <img src={img1} className={style.imgs} data-aos="fade-right" data-aos-duration="3000"/>
                        <p data-aos="fade-right" data-aos-duration="3000">Paby es la solución perfecta para tus necesidades de estacionamiento.</p>
                        <div className={style.scroll} data-aos="fade-right" data-aos-duration="3000">
                            <div className={style.downarrow}></div>
                        </div>
                        </div>



                    <div className={style.flexitems} data-aos="fade-left"  data-aos-duration="3000">
                    <p>Con nuestra aplicación web, puedes hacer reservas en cualquiera de nuestras <br></br>sucursales de parqueaderos con tan solo unos clics.</p>
                    <img src={img2} className={style.imgs}/>
                    </div>

                    <div className={style.flexitems} data-aos="fade-right"  data-aos-duration="3000">
                    <img src={img3} className={style.imgs}/>
                    <p>Olvídate de preocuparte por encontrar un lugar donde estacionar, con Paby tienes acceso <br></br> a una red de parqueaderos confiables y seguros en todo momento.</p>
                    </div>

                    <div className={style.flexitems} data-aos="fade-left"  data-aos-duration="3000">
                    <p>Nuestra plataforma te permite elegir la plaza que más te convenga y el tiempo <br></br> que necesites, todo desde la comodidad de tu teléfono o computadora.</p>
                    <img src={img4} className={style.imgs}/>
                    </div>

                </div>
            { isAuthenticated ?  null : <a href="#nav">iniciar sesión para continuar</a> } 
           { isAuthenticated ?  <Link to='/parking-lot-filter'  ><button> Reservar plaza</button></Link> : null }             
        </div>
    )
}



