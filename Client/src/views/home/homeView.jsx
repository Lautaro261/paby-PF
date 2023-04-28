import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Dash from "../../components/dashboard/dash";
import Home from "../../components/Home/Home";
import style from "./home.module.css"

const HomeView=()=>{
    return(
    <div class={style.parent}>
        <div class={style.div1}><Navbar/> </div>
        
        <div class={style.flexcontainer}>
            <div class={style.flexitems}><Dash/></div>
             <div class={style.flexitems}><Home/></div>
        </div>

        <div class={style.div4}><Footer></Footer> </div>
    </div>
    )

}
export default HomeView