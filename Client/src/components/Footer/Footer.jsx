import React from 'react';
import styles from './Footer.module.css';
import logo from '../../imgs/Logopaby.png'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <img src={logo} alt="Paby Logo" className={styles.logo} />
        <p>¡Gracias por elegir Paby para tus necesidades de estacionamiento!</p>
      </div>
    </div>
  );
};

export default Footer;

