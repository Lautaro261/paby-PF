import React, { useState } from "react";
import RegisterModal from "../RegisterModal/RegisterModal";

const RegisterOwn = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleRegisterClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={handleRegisterClick}>Registrarse</button>
            <RegisterModal isOpen={isModalOpen} onClose={handleCloseModal}/>
        </div>
    )

}


export default RegisterOwn