import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Dash from "../../components/dashboard/Dash";
import style from "./HistoryView.module.css"
import ReservationsHistory from "../../components/ReservationsHistory/ReservationsHistory";
const HistoryView=()=>{
    return(
    <div className={style.parent}>
        <div className={style.div1}><Navbar/> </div>
        
        <div className={style.flexcontainer}>
            <div className={style.flexitems}><Dash/></div>
             <div className={style.component}><ReservationsHistory/></div>
        </div>

        <div class={style.div4}><Footer/> </div>
    </div>
    )

}
export default HistoryView