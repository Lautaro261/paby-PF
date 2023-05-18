import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import AdminDash from "../../../components/Admin/dashboard/AdminDash";

import ManualReserve from "../../../components/Admin/ManualReserve/ManualReserve"


const ManualReserveView = () => {

    return (
        <div >
            <div><Navbar /> </div>
            <div> <AdminDash /></div>
            <div>
                <div ><ManualReserve /></div>
            </div>
             <div ><Footer/></div>
        </div>
    )

}
export default ManualReserveView;