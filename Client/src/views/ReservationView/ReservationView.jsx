import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Dash from "../../components/dashboard/Dash";
import style from "./ReservationView.module.css"
import ReservationPanel from "../../components/ReservationPanel/ReservationPanel";

const ReservationView=()=>{
    return(
    <div className={style.parent}>
        <div className={style.div1}><Navbar/> </div>
        
        <div className={style.flexcontainer}>
            <div className={style.flexitems}><Dash/></div>
             <div className={style.flexitems}><ReservationPanel/></div>
        </div>

        <div className={style.div4}><Footer/> </div>
    </div>
    )

}
export default ReservationView