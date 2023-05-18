import React, { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import { clearError } from "../../redux/features/users/usersSlice";
import { useDispatch } from "react-redux";
import styles from "../OwnLogin/ownLogin.module.css";

const OwnLogin = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    dispatch(clearError());
  };

  return (
    <div>
      <button className={styles.loginOwn} onClick={handleLoginClick}>
        Ingresar
      </button>
      <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default OwnLogin;
