import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Dash from "../../components/dashboard/Dash";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";

const ShoppingCartView=()=>{
    return(
    <div>
        <div ><Navbar/> </div>
        
        <div >
            <div ><Dash/></div>
             <div ><ShoppingCart/></div>
        </div>

        <div><Footer/> </div>
    </div>
    )

}
export default ShoppingCartView