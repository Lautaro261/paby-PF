import React, { useState } from "react";
import LoginButton from '../../components/LoginButton/LoginButton'
import { useDispatch, useSelector } from "react-redux";
import styles from './LoginModal.module.css'
import { setUserSession, loginUser } from "../../redux/features/users/usersSlice";
import { loginAdmin} from '../../redux/features/admin/adminSlice'
import { useNavigate } from "react-router-dom";


const { VITE_EMAIL_ADMIN, VITE_PASS_ADMIN } = import.meta.env;
const LoginModal = ({ isOpen, onClose }) => {
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const error = useSelector(state => state.users.error)
    const {VITE_EMAIL_ADMIN,VITE_PASS_ADMIN } = import.meta.env;

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === VITE_EMAIL_ADMIN && password === VITE_PASS_ADMIN) {
            const sub = email
            const userAdmin = {
                sub: sub,
                email: email,
                password: password,
            }
            localStorage.setItem(`rol`, "admin")
            console.log("Soy el admin");
            dispatch(loginAdmin(userAdmin))
            dispatch(setUserSession(userAdmin))
            localStorage.setItem(`sub`, email)
            localStorage.setItem(`email`, email)
            localStorage.setItem(`isLoggedIn`, true)
            navigate("/admin/home")
            onClose()
        } else {
            const sub = email
            const userSession = {
                sub: sub,
                email: email,
                password: password
            }
            localStorage.setItem(`rol`, "user")
            dispatch(loginUser(userSession))
                .then((response) => {
                    if (response.payload && response.payload.success) {
                        dispatch(setUserSession(userSession))
                        localStorage.setItem(`sub`, email);
                        localStorage.setItem(`email`, email)
                        localStorage.setItem(`isLoggedIn`, true)
                        onClose()
                        navigate('/')
                    }
                })
               
        }
    }

    return isOpen ? (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <button onClick={onClose} className={styles.buttonLoginOnClose}>X</button>
                <h2>Inicio de sesion</h2>
                <form onSubmit={handleLogin} className={styles.formLoginOwn}>
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
                    {error && <p>¡Algo salio mal! verifica que tu email y contraseña sean correctas.</p>}
                </form>
                <div className={styles.modalElements} >
                    <p>ó</p>
                    <LoginButton />
                </div>
            </div>

        </div>
    )
        : null;

}

export default LoginModal