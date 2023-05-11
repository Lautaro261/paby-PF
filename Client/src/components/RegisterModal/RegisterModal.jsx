import React, { useState } from "react";
import styles from '../LoginModal/LoginModal.module.css'

const RegisterModal = ({ isOpen, onClose }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleLogin = async () => {
        console.log('se supone que estoy logueado');
    }

    return isOpen ? (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <h2>Inicio de sesion</h2>
                <form>
                    <label htmlFor='name'>Nombre:<input
                     type='text'
                     id='name' 
                     name='name' 
                     value={name} 
                     onChange={(e) => setName(e.target.value)} />
                     </label>
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
                <button onClick={onClose}>Cerrar</button>
            </div>

        </div>
    )
        : null;

}

export default RegisterModal