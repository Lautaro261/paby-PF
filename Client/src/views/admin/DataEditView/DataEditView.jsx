import React, { useEffect }from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import AdminDash from "../../../components/Admin/dashboard/AdminDash";
import styles from './DataEditView.module.css';
import UpdateParkin from  "../../../components/Admin/UpdateParkin/UpdateParkin";



const DataEditView = () => {

    return (
        <div className={styles.container}>
            <div><Navbar /> </div>
            <div> <AdminDash /></div>
            <div>
                <div ><UpdateParkin /></div>
            </div>
             <div ><Footer/></div>
        </div>
    )

}
export default DataEditView