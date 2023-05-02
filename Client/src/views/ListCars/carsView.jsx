import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Dash from "../../components/dashboard/dash";
import style from "./carsView.module.css"
import ViewVehicles from "../../components/ViewVehicles/viewVehicles";
const CarsView=()=>{
    return(
    <div class={style.parent}>
        <div class={style.div1}><Navbar/> </div>
        
        <div class={style.flexcontainer}>
            <div class={style.flexitems}><Dash/></div>
             <div class={style.flexitems}><ViewVehicles/></div>
        </div>

        {/* <div class={style.div4}><Footer></Footer> </div> */}
    </div>
    )

}
export default CarsView