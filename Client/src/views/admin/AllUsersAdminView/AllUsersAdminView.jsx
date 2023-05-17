import React from "react";
import NavBar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import AllUserAdmin from "../../../components/Admin/AllUsersAdmin/AllUserAdmin"
import AdminDash from '../../../components/Admin/dashboard/AdminDash'

const AllUsersAdminView = () =>{
    return (
        <div>
            <div> <NavBar/> </div>
            <div> <AdminDash /></div>
            <div> <AllUserAdmin/></div>
            <div> <Footer/> </div>
        </div>
    )
}

export default AllUsersAdminView