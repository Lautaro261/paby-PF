import React from "react";
import styles from './Modal.module.css';

const Modal = ({isOpen, children, onClose}) => {

    return isOpen? (
        <div className={styles.modal}>
            <section className={styles.modalMain}>
            {children}
            <button className={styles.close} onClick={onClose}>Cerrar</button>
            </section>
        </div>
    )
    : null
}

export default Modal