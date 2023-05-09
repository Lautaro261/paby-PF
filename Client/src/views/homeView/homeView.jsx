import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Dash from "../../components/dashboard/Dash";
import Home from "../../components/Home/Home";
import styles from './HomeView.module.css';

const HomeView = () => {
    return (
        <div className={styles.container}>
            <div><Navbar /> </div>
            <div><Dash /></div>
            <div>
                <div><Home /></div>
            </div>
             <div className={styles.footerView}><Footer/></div>
        </div>
    )

}
export default HomeView