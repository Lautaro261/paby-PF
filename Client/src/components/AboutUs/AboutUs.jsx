
import React from "react";
import Team from "../Team/Team";
import logo from '../../imgs/Logopaby.png'
import './AboutUs.css'

export default function AboutUs(){
    const goBack= ()=>{

        window.history.back();
    }

    return(
                    <div className="AboutUs">
                        <h1>Acerca de nosotros </h1>
                        <p>En Paby, estamos dedicados a proporcionar la mejor experiencia de estacionamiento en línea. Y detrás de nuestra aplicación web, hay un equipo comprometido de ocho compañeros que trabajan arduamente para hacer posible este objetivo.

                            Cada uno de nosotros trae habilidades y experiencias únicas a la mesa, lo que nos permite crear una aplicación web confiable, segura y fácil de usar para nuestros usuarios.

                            En Paby, creemos en la importancia de trabajar en equipo y colaborar para alcanzar nuestras metas. Nos esforzamos por mantener una cultura de trabajo positiva y creativa, en la que todos podemos aportar y aprender de los demás.

                            Gracias por confiar en Paby para todas tus necesidades de estacionamiento en línea. ¡Esperamos que disfrutes nuestra aplicación tanto como nosotros disfrutamos creándola!</p>

                        <h2>Equipo <img src={logo} alt='logoPaby' className='logoAbout' /></h2>
                        <Team />
                        <button onClick={goBack} className="buttonGoBack">Volver</button>
                    </div>
    )
}

