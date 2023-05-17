import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserForAdmin } from "../../../redux/features/admin/adminSlice"
import User from "../User/User";

const AllUserAdmin = () => {
    const dispatch = useDispatch()
    const allUsers = useSelector(state => state.admin.allUsers)
    const token = localStorage.getItem(`token`)

    useEffect(()=>{
        console.log(token, 'token de allUser')
        dispatch(getAllUserForAdmin(token))
    },[dispatch])

    return(
        <div>
            <h2>Lista de clientes</h2>
            <div>
            {
               allUsers && allUsers.length ? 
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
        </div>
    )
}

export default AllUserAdmin  