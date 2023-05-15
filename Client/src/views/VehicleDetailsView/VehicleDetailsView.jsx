import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Dash from "../../components/dashboard/Dash";
import VehicleDetails from '../../components/VehicleDetails/vehicleDetails'

const VehicleDetailsView = () => {
    return (
        <div>
            <div><Navbar /> </div>

                <div><Dash /></div>
            <div>
                <div><VehicleDetails/></div>
            </div>

            <div><Footer /></div>
        </div>
    )

}
export default VehicleDetailsView;