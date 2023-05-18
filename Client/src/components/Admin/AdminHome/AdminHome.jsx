import React, { useEffect } from 'react';
import {  useSelector } from 'react-redux';

import style from "./Home.module.css";
import img1 from "../../../imgs/img1.png"
import img2 from "../../../imgs/img2.png"
import img3 from "../../../imgs/img3.png"
import img4 from "../../../imgs/img4.png"
import logo from "../../../imgs/Logopaby.png"
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function AdminHome() {
    const tokenAdmin = useSelector(state => state.admin.adminAuth)
    const token = tokenAdmin?.token
    const isLoggedIn = localStorage.getItem(`isLoggedIn`)
    if(token){
        localStorage.setItem(`token`, token)
        const sub="armandoAdmin@gmail.com"
        localStorage.setItem("sub", sub)
    }


    //animaciones
    useEffect(() => {
        AOS.init();
      }, [])
    //
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
            {  isLoggedIn ?  null : <a href="#nav">iniciar sesión para continuar</a> }              
        </div>
    )
}



