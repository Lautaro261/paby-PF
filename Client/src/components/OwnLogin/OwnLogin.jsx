import React, { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";

const OwnLogin = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLoginClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={handleLoginClick}>Ingresar</button>
            <LoginModal isOpen={isModalOpen} onClose={handleCloseModal}/>
        </div>
    )

}

export default OwnLogin
