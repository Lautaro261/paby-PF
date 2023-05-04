import React, { useState } from 'react';
import { Link } from "react-router-dom";

import ContactUs from "../ContactUs/ContactUs";
import style from "./Home.module.css";
import logo from '../../imgs/Logopaby.png'

export default function Home() {
    const [showDescription, setShowDescription] = useState(false)

    const toggleDescription = () => {
        setShowDescription(!showDescription)
    };
    return (
        <div className={style.Home}>

            <h1>Bienvenidos a <img src={logo} alt='logoPaby'  className={style.logoPaby} /></h1>
            <p className={style.description}> Paby es la solución perfecta para tus necesidades de estacionamiento. Con nuestra aplicación web, puedes hacer reservas en cualquiera de nuestras sucursales de parqueaderos con tan solo unos clics. Olvídate de preocuparte por encontrar un lugar donde estacionar, con Paby tienes acceso a una red de parqueaderos confiables y seguros en todo momento.


                Además, nuestra plataforma te permite elegir la plaza que más te convenga y el tiempo que necesites, todo desde la comodidad de tu teléfono o computadora. Y no te preocupes por el pago, Paby te ofrece múltiples opciones de pago seguro a través de la aplicación.

                Únete a la comunidad de Paby y disfruta de la mejor experiencia de estacionamiento en línea. ¡Bienvenido a tu nueva forma de estacionar!</p>

            <Link to='/parking-lot-selection'><button>Reservar plaza</button></Link>


            <button onClick={toggleDescription}>Contáctanos</button>
            {
                showDescription && (
                    <ContactUs/>
                )
            }

            <Link to='/about-us'><button>Acerca de nosotros</button></Link>



        </div>
    )
}