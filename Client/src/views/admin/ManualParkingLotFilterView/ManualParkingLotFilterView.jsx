import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import AdminDash from "../../../components/Admin/dashboard/AdminDash";

import ManualParkingLotFilter from "../../../components/Admin/ManualParkingLotFilter/ManualParkingLotFilter";


const ManualParkingLotFilterView = () => {

    return (
        <div >
            <div><Navbar /> </div>
            <div> <AdminDash /></div>
            <div>
                <div ><ManualParkingLotFilter /></div>
            </div>
             <div ><Footer/></div>
        </div>
    )

}
export default ManualParkingLotFilterView;