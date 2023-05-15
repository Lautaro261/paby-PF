import React from "react";
import styles from './OnlineSupport.module.css'

const OnlineSupport = () => {

    const mensaje = 'Hola quisiera hacer una consulta acerca de ...'

    const redirectToWhatsapp = () => {
        window.open(`https://api.whatsapp.com/send?phone=+5491157808908&text=" + ${mensaje}`)
    };
    return (
        <div className={styles.onlineSupport}>
            <p>Serás atendido rápidamente por nuestro equipo de soporte.</p>           
            <button className={styles.supportButton} onClick={redirectToWhatsapp}>Contactar Soporte por Whatsapp</button>
        </div>
    )
}

export default OnlineSupport
