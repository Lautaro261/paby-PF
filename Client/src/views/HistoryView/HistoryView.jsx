import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Dash from "../../components/dashboard/Dash";
import ReservationsHistory from "../../components/ReservationsHistory/ReservationsHistory";
const HistoryView=()=>{
    return(
    <div>
        <div ><Navbar/> </div>
        
        <div >
            <div ><Dash/></div>
             <div ><ReservationsHistory/></div>
        </div>

        <div><Footer/> </div>
    </div>
    )

}
export default HistoryView