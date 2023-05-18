import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import AdminDash from "../../../components/Admin/dashboard/AdminDash";

import ManualReserveForm from "../../../components/Admin/ManualReserveForm/ManualReserveForm"


const ManualReserveFormView = () => {

    return (
        <div >
            <div><Navbar /> </div>
            <div> <AdminDash /></div>
            <div>
                <div ><ManualReserveForm/></div>
            </div>
             <div ><Footer/></div>
        </div>
    )

}
export default ManualReserveFormView;