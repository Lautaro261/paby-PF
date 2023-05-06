import React from "react";
import Navbar from "../../components/Navbar/Navbar";
//import Footer from "../../components/Footer/Footer";
import Dash from "../../components/dashboard/Dash";
import Home from "../../components/Home/Home";
import style from "./home.module.css"
const HomeView=()=>{
    return(
    <div className={style.parent}>
        <div className={style.div1}><Navbar/> </div>
        
        <div className={style.flexcontainer}>
            <div className={style.flexitems}><Dash/></div>
             <div className={style.flexitems}><Home/></div>
        </div>

       {/*  <div className={style.div4}><Footer></Footer> </div> */}
    </div>
    )

}
export default HomeView