import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserForAdmin } from "../../../redux/features/admin/adminSlice"
import User from "../User/User";

const AllUserAdmin = () => {
    const dispatch = useDispatch()
    const allUsers = useSelector(state => state.admin.allUsers)
    const token = localStorage.getItem(`token`)
    const [sortDirection, setSortDirection] = useState('asc')

    useEffect(()=>{
        console.log(token, 'token de allUser')
        dispatch(getAllUserForAdmin(token))
    },[dispatch,token])

    const toggleSortDirection = () => {
        setSortDirection((prevDirection)=>
            prevDirection === 'asc' ? 'desc' : 'asc'
        )
    }

    const sortedUsers = [...allUsers].sort((a, b) => 
    sortDirection === 'asc' ? a.name.localeCompare(b.name): b.name.localeCompare(a.name)
    )

    return(
        <div>
            <h2>Lista de clientes</h2>
            <button onClick={toggleSortDirection}>Cambiar orden</button>
            <div>
            {
               sortedUsers && sortedUsers.length ? 
              sortedUsers.map((user)=>{
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