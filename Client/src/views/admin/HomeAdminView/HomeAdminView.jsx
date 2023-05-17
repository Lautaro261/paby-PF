import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import AdminDash from "../../../components/Admin/dashboard/AdminDash";
import Home from "../../../components/Home/Home";
import Footer from "../../../components/Footer/Footer";

const HomeAdminView = () => {

    return (
        <div>
            <div><Navbar/></div>
            <div><AdminDash/></div>
            <div><Home/></div>
            <div><Footer/></div>
        </div>
    )
}

export default HomeAdminView