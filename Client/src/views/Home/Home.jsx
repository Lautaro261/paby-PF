import React, { useState } from "react";
import { Link } from "react-router-dom";
import Team from "./Team";

export default function Home() {
    const [showDescription, setShowDescription] = useState(false)

    const toggleDescription = () => {
        setShowDescription(!showDescription)
    };

    return (
        <div className="Home">
            <h1>Bienvenidos a Paby</h1>
            <p>Paby es la solución perfecta para tus necesidades de estacionamiento. Con nuestra aplicación web, puedes hacer reservas en cualquiera de nuestras sucursales de parqueaderos con tan solo unos clics. Olvídate de preocuparte por encontrar un lugar donde estacionar, con Paby tienes acceso a una red de parqueaderos confiables y seguros en todo momento.

                Además, nuestra plataforma te permite elegir la plaza que más te convenga y el tiempo que necesites, todo desde la comodidad de tu teléfono o computadora. Y no te preocupes por el pago, Paby te ofrece múltiples opciones de pago seguro a través de la aplicación.

                Únete a la comunidad de Paby y disfruta de la mejor experiencia de estacionamiento en línea. ¡Bienvenido a tu nueva forma de estacionar!</p>

            <Link to='/reservation-panel'><button>Reservar plaza</button></Link>

            <div className="Contactanos">
                <h2>Contactanos</h2>
                <p>Puedes contactarnos en Whatsapp al 1121423423</p>
            </div>

            <button onClick={toggleDescription}>Acerca de nosotros</button>
            {
                showDescription && (

                    <div className="Acerca de nosotros">
                        <h2>Acerca de nosotros</h2>
                        <p>En Paby, estamos dedicados a proporcionar la mejor experiencia de estacionamiento en línea. Y detrás de nuestra aplicación web, hay un equipo comprometido de ocho compañeros que trabajan arduamente para hacer posible este objetivo.

                            Cada uno de nosotros trae habilidades y experiencias únicas a la mesa, lo que nos permite crear una aplicación web confiable, segura y fácil de usar para nuestros usuarios.

                            En Paby, creemos en la importancia de trabajar en equipo y colaborar para alcanzar nuestras metas. Nos esforzamos por mantener una cultura de trabajo positiva y creativa, en la que todos podemos aportar y aprender de los demás.

                            Gracias por confiar en Paby para todas tus necesidades de estacionamiento en línea. ¡Esperamos que disfrutes nuestra aplicación tanto como nosotros disfrutamos creándola!</p>

                        <h2>Equipo Paby</h2>
                        <Team />
                    </div>
                )
            }


        </div>
    )
}