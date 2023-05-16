import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserForAdmin } from "../../redux/features/admin/adminSlice";
import User from "../User/User";

const AllUserAdmin = () => {
    const dispatch = useDispatch()
    const allUsers = useSelector(state => state.admin.allUsers)
    const token = useSelector(state=> state.admin.adminAuth)
    
    useEffect(()=>{
        dispatch(getAllUserForAdmin(token.token))
    },[dispatch])

    return(
        <div>
            {
                allUsers.length ? 
                allUsers.map((user)=>{
                    return(
                        <div key={user.sub}>
                            <User email={user.email} name={user.name} sub={user.sub}/>
                        </div>
                    )
                }):
                <div>
                    <p>Cargando</p>
                </div>
            }
        </div>
    )
}

export default AllUserAdmin  