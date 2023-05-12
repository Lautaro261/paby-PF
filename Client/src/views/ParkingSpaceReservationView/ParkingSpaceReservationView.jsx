import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Dash from "../../components/dashboard/Dash";
import ParkingSpaceReservation from '../../components/ParkingSpaceReservation/ParkingSpaceReservation'

const ParkingSpaceReservationView = () => {
    return (
        <div>
            <div><Navbar /> </div>

            <div><Dash /></div>
            <div>
                <div><ParkingSpaceReservation/></div>
            </div>

            <div><Footer /></div>
        </div>
    )

}

export default ParkingSpaceReservationView