import React, { useState } from "react";
import RegisterModal from "../RegisterModal/RegisterModal";
import { useDispatch } from "react-redux";
import { clearError } from "../../redux/features/users/usersSlice";

const RegisterOwn = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleRegisterClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        dispatch(clearError())
    };

    return (
        <div>
            <button onClick={handleRegisterClick}>Registrarse</button>
            <RegisterModal isOpen={isModalOpen} onClose={handleCloseModal}/>
        </div>
    )

}


export default RegisterOwn