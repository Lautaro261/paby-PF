import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Dash from "../../components/dashboard/Dash";
import ParkingLotSelection from "../../components/ParkingLotSelection/ParkingLotSelection";
import styles from './LotSelectionView.module.css';

const LotSelectionView = () => {
    return (
        <div className={styles.containerLotSelection}>
            <div><Navbar /> </div>
            <div><Dash /></div>
            <div><ParkingLotSelection /></div>
            <div><Footer /></div>
        </div>
    )

}
export default LotSelectionView