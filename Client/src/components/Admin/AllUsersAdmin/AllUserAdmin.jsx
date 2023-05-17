import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserForAdmin } from "../../../redux/features/admin/adminSlice";
import User from "../User/User";

const AllUserAdmin = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.admin.allUsers); // []
  const token = localStorage.getItem(`token`);
//   const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    console.log(token, "LINEA 13 TRAIGO TODOS LOS USERS. ALLUSERS.JSX"); 
    dispatch(getAllUserForAdmin(token));
  }, [dispatch, token]);


  return (
    <div>
      <h2>Lista de clientes</h2>
      <button >Cambiar orden</button>
      <div>
        { allUsers && allUsers.length ? (
          allUsers.map((user) => {
            return (
              <div key={user.sub}>
                <User email={user.email} name={user.name} sub={user.sub} />
              </div>
            );
          })
        ) : (
          <div>
            <p>Cargando</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUserAdmin;

