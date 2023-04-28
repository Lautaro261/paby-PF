import React, { useState } from "react";


export default function ContactUs() {
    const [showDescription, setShowDescription] = useState(false)

    const toggleDescription = () => {
        setShowDescription(!showDescription)
    };
    return (
        <div className="Contactanos">
            <button onClick={toggleDescription}>Contáctanos</button>
            {
                showDescription && (
                    <div className="contac-us">
                    <h2>Contáctanos</h2>
                    <p>Puedes contactarnos en Whatsapp al 1121423423</p>
                    </div>
                )
            }
        </div>

    )
}