import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import AdminDash from "../../../components/Admin/dashboard/AdminDash";
import Footer from "../../../components/Footer/Footer";
import ClientDetails from "../../../components/Admin/ClientDetails/ClientDetails";

const ClientDetailsView = () => {

    return(
        <div>
            <div><Navbar/></div>
            <div><AdminDash/></div>
            <div><ClientDetails/></div>
            <div><Footer/></div>
        </div>
    )
}
export default ClientDetailsView