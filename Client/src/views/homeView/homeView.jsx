import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Dash from "../../components/dashboard/Dash";
import Home from "../../components/Home/Home";
import styles from './HomeView.module.css';
import { useAuth0 } from '@auth0/auth0-react';


const HomeView = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <div className={styles.container}>
            <div><Navbar /> </div>
            {isAuthenticated ? <div><Dash /></div>: null}
            <div>
                <div ><Home /></div>
            </div>
             <div ><Footer/></div>
        </div>
    )

}
export default HomeView