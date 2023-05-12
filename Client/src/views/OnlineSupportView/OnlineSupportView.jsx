import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Dash from "../../components/dashboard/Dash";
import Footer from "../../components/Footer/Footer";
import OnlineSupport from "../../components/OnlineSupport/OnlineSupport";

const OnlineSupportView = () => {
    return(
        <div>
            <div><Navbar /></div>
            <div><Dash /></div>
            <div><OnlineSupport /></div>
            <div><Footer /></div>
        </div>
    )
}

export default OnlineSupportView