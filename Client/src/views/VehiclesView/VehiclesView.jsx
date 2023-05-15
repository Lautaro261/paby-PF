import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Dash from "../../components/dashboard/Dash";
import Vehicles from '../../components/Vehicles/Vehicles'

const VehiclesView = () => {
    return (
        <div>
            <div><Navbar /> </div>

                <div><Dash /></div>
            <div>
                <div><Vehicles /></div>
            </div>

            <div><Footer /></div>
        </div>
    )

}
export default VehiclesView;