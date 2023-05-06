import React from 'react';
import { Link } from "react-router-dom";

import style from "./Home.module.css";
import logo from '../../imgs/Logopaby.png'
import { useAuth0 } from '@auth0/auth0-react'
import JSONPretty from 'react-json-pretty'

export default function Home() {

    const { user, isAuthenticated } = useAuth0()

    return (
        <div className={style.Home}>

            <h1>Bienvenidos a <img src={logo} alt='logoPaby' className={style.logoPaby} /></h1>
            <p className={style.description}> Paby es la solución perfecta para tus necesidades de estacionamiento. Con nuestra aplicación web, puedes hacer reservas en cualquiera de nuestras sucursales de parqueaderos con tan solo unos clics. Olvídate de preocuparte por encontrar un lugar donde estacionar, con Paby tienes acceso a una red de parqueaderos confiables y seguros en todo momento.


                Además, nuestra plataforma te permite elegir la plaza que más te convenga y el tiempo que necesites, todo desde la comodidad de tu teléfono o computadora. Y no te preocupes por el pago, Paby te ofrece múltiples opciones de pago seguro a través de la aplicación.

                Únete a la comunidad de Paby y disfruta de la mejor experiencia de estacionamiento en línea. ¡Bienvenido a tu nueva forma de estacionar!</p>

            <Link to='/parking-lot-filter'><button>Reservar plaza</button></Link>

            {
                isAuthenticated && (
                    <div>
                        <img src={user.picture} alt={user.name} />
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <p>{user.sub}</p>
                        <pre>{JSON.stringify(user)}</pre>
                    </div>
                )
            }


        </div>
    )
}