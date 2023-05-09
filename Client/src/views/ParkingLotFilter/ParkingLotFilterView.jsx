import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Dash from "../../components/dashboard/Dash";
import ParkingLotFilter from "../../components/ParkingLotFilter/ParkingLotFilter";

const ParkingLotFilterView = () => {
    return (
        <div>
            <div><Navbar /> </div>
            <div ><Dash /></div>
            <div ><ParkingLotFilter /></div>
            <div><Footer /></div>
        </div>
    )

}
export default ParkingLotFilterView;