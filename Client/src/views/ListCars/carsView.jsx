import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Dash from "../../components/dashboard/Dash";
import style from "./carsView.module.css"
import ViewVehicles from "../../components/ViewVehicles/viewVehicles";
const CarsView=()=>{
    return(
    <div className={style.parent}>
        <div className={style.div1}><Navbar/> </div>
        
        <div className={style.flexcontainer}>
            <div className={style.flexitems}><Dash/></div>
             <div className={style.flexitems}><ViewVehicles/></div>
        </div>

        {/* <div class={style.div4}><Footer></Footer> </div> */}
    </div>
    )

}
export default CarsView