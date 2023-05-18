import React, { useState } from "react";
import RegisterModal from "../RegisterModal/RegisterModal";
import { useDispatch } from "react-redux";
import { clearError } from "../../redux/features/users/usersSlice";
import styles from "../RegisterOwn/registerOwn.module.css";

const RegisterOwn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    dispatch(clearError());
  };

  return (
    <div>
      <button
        className={styles.buttonRegisterOwn}
        onClick={handleRegisterClick}
      >
        Registrarse
      </button>
      <RegisterModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default RegisterOwn;
