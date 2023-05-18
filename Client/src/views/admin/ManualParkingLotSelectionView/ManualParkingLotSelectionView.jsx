import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import AdminDash from "../../../components/Admin/dashboard/AdminDash";

import ManualParkingLotSelection from "../../../components/Admin/ManualParkingLotSelection/ManualParkingLotSelection";


const ManualParkingLotSelectionView = () => {

    return (
        <div >
            <div><Navbar /> </div>
            <div> <AdminDash /></div>
            <div>
                <div ><ManualParkingLotSelection /></div>
            </div>
             <div ><Footer/></div>
        </div>
    )

}
export default ManualParkingLotSelectionView;