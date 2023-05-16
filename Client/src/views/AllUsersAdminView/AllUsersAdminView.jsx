import React from "react";
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import AllUserAdmin from "../../components/AllUsersAdmin.jsx/AllUserAdmin";

const AllUsersAdminView = () =>{


    return (
        <div>
            <div> <NavBar/> </div>
            <div> <AllUserAdmin/></div>
            <div> <Footer/> </div>
        </div>
    )
}

export default AllUsersAdminView