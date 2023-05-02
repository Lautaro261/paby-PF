import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Dash from "../../components/dashboard/dash";
import style from "./carsView.module.css"
import ReservationPanel from "../../components/ReservationPanel/ReservationPanel";

const ReservationView=()=>{
    return(
    <div class={style.parent}>
        <div class={style.div1}><Navbar/> </div>
        
        <div class={style.flexcontainer}>
            <div class={style.flexitems}><Dash/></div>
             <div class={style.flexitems}><ReservationPanel/></div>
        </div>

        {/* <div class={style.div4}><Footer></Footer> </div> */}
    </div>
    )

}
export default ReservationView