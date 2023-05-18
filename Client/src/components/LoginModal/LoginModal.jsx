import React, { useState } from "react";
import LoginButton from "../../components/LoginButton/LoginButton";
import { useDispatch, useSelector } from "react-redux";
import styles from "./LoginModal.module.css";
import {
  setUserSession,
  loginUser,
} from "../../redux/features/users/usersSlice";
import { loginAdmin } from "../../redux/features/admin/adminSlice";

const LoginModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector((state) => state.users.error);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "armandoAdmin@gmail.com" && password === "pabyelmejor") {
      const sub = email;
      const userAdmin = {
        sub: sub,
        email: email,
        password: password,
      };
      dispatch(loginAdmin(userAdmin));
      dispatch(setUserSession(userAdmin));
      localStorage.setItem(`sub`, email);
      localStorage.setItem(`email`, email);
      localStorage.setItem(`isLoggedIn`, true);
      onClose();
    } else {
      const sub = email;
      const userSession = {
        sub: sub,
        email: email,
        password: password,
      };
      dispatch(loginUser(userSession)).then((response) => {
        if (response.payload && response.payload.success) {
          dispatch(setUserSession(userSession));
          localStorage.setItem(`sub`, email);
          localStorage.setItem(`email`, email);
          localStorage.setItem(`isLoggedIn`, true);
          onClose();
        }
      });
    }
  };

  return isOpen ? (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.buttonLoginOnClose}>
          X
        </button>
        <h2>Inicio de sesión</h2>
        <form onSubmit={handleLogin} className={styles.formLoginOwn}>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            Contraseña:
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className={styles.buttonLoginIn} type="submit">
            Ingresar
          </button>
          {error && (
            <p>
              ¡Algo salio mal! Verifica que tu email y contraseña sean
              correctas.
            </p>
          )}
        </form>
        <hr />
        <div className={styles.modalElements}>
          <LoginButton />
        </div>
      </div>
    </div>
  ) : null;
};

export default LoginModal;
