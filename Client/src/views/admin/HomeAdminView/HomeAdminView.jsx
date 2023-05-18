import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import AdminDash from "../../../components/Admin/dashboard/AdminDash";
import AdminHome from "../../../components/Admin/AdminHome/AdminHome";
import Footer from "../../../components/Footer/Footer";

const HomeAdminView = () => {

    return (
        <div>
            <div><Navbar/></div>
            <div><AdminDash/></div>
            <div><AdminHome/></div>
            <div><Footer/></div>
        </div>
    )
}

export default HomeAdminView