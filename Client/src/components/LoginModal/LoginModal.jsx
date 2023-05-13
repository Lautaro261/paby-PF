import React, { useState } from "react";
import styles from './LoginModal.module.css'
import { useDispatch } from "react-redux";
import { setUserSession } from "../../redux/features/users/usersSlice";

const LoginModal = ({ isOpen, onClose }) => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const userSession = {
            email: email,
            password: password
        }
        try {
            dispatch(setUserSession(userSession))
            localStorage.setItem(`sub`, email);
            localStorage.setItem(`email`,email)
            onClose()
        } catch (error) {
            console.log(error)
        }
        console.log('logueado')
    }

    return isOpen ? (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <button onClick={onClose} className={styles.buttonLoginOnClose}>X</button>
                <h2>Inicio de sesion</h2>
                <form onSubmit={handleLogin}>
                    <label htmlFor='email'>Email:<input
                        type='email'
                        id='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label htmlFor="password">Constraseña:<input
                        type='password'
                        id='password'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button type='submit'>Ingresar</button>
                </form>
            </div>

        </div>
    )
        : null;

}

export default LoginModal