import React from "react";

const ProfileCompleteModal = ({onClose}) => {
    return (
        <div>
            <h3>Para poder disfrutar de nuestros servicios, le recomendamos completar su información personal en el perfil haciendo clic en el botón correspondiente. De esta manera, podremos ofrecerle una experiencia más personalizada y adaptada a sus necesidades. ¡Gracias por confiar en nosotros!</h3>
            <button onClick={onClose}>Cerrar</button>
        </div>
    )
}

export default ProfileCompleteModal