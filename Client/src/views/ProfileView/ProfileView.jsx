import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Dash from "../../components/dashboard/Dash";
import Profile from '../../components/Profile/Profile';
import style from "./Profile.module.css"

const ProfileView = () => {
    return (
        <div>
            <div><Navbar /> </div>

                <div><Dash /></div>
            <div>
                <div className={style.component} ><Profile/></div>
            </div>

            <div><Footer /></div>
        </div>
    )

}

export default ProfileView