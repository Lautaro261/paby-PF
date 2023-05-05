import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Dash from "../../components/dashboard/dash";
import style from "./ParkingLotFilterView.module.css"
import ParkingLotFilter from "../../components/ParkingLotFilter/ParkingLotFilter";

const ParkingLotFilterView=()=>{
    return(
    <div class={style.parent}>
        <div class={style.div1}><Navbar /> </div>
        
        <div class={style.flexcontainer}>
            <div class={style.flexitems}><Dash /></div>
             <div class={style.flexitems}><ParkingLotFilter /></div>
        </div>

        <div class={style.div4}><Footer></Footer> </div>
    </div>
    )

}
export default ParkingLotFilterView;