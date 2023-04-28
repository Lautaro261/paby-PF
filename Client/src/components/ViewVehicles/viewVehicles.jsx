import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTools } from '@fortawesome/free-solid-svg-icons';
import styles from './viewVehicles.module.css';
import { Link } from 'react-router-dom';


export default function ViewVehicle(){
	return (
		<div className={styles.container}>
			<div className={styles.buildIconContainer}>
				 {/* <FontAwesomeIcon icon={faTools} className={styles.buildIcon} /> */}
			</div>
			<h1 className={`${styles.heading} ${styles.message}`}>Pagina en construcción</h1>
			<Link to="/createvehicle">crear vehiculo</Link>

		</div>
	);
}
