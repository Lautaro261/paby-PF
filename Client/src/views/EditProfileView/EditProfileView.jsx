import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Dash from "../../components/dashboard/Dash";
import EditProfile from "../../components/EditProfile/EditProfile";
const EditProfileView = () => {
    return (
        <div>
            <div><Navbar /> </div>

            <div><Dash /></div>
            <div>
                <div><EditProfile /></div>
            </div>

            <div><Footer /></div>
        </div>
    )

}

export default EditProfileView