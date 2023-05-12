import React, { useState } from "react";
import styles from './LoginModal.module.css'
// import { loginUser } from "../../redux/features/users/usersSlice";
// import { useDispatch } from "react-redux";

const LoginModal = ({ isOpen, onClose }) => {

    // // const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // const userSession = {
        //     email: email,
        //     password: password
        // }
        // try {
        //     dispatch(loginUser(userSession))
        //     onClose()
        // } catch (error) {
        //     console.log(error)
        // }
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