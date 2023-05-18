import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserForAdmin } from "../../../redux/features/admin/adminSlice";
import User from "../User/User";
import styles from "../AllUsersAdmin/allUsersAdmin.module.css";
import { useState } from "react";

const AllUserAdmin = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.admin.allUsers); // []
  const token = localStorage.getItem(`token`);
  // const [sortOrder, setSortOrder] = useState("asc");
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    console.log(token, "LINEA 13 TRAIGO TODOS LOS USERS. ALLUSERS.JSX");
    dispatch(getAllUserForAdmin(token));
  }, [dispatch, token]);

  const handleSortChange = () => {
    const newSortDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newSortDirection);
  };

  const sortedUsers =
    allUsers && allUsers.length
      ? allUsers.slice().sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          if (nameA < nameB) return sortDirection === "asc" ? -1 : 1;
          if (nameA > nameB) return sortDirection === "asc" ? 1 : -1;
          return 0;
        })
      : [];

  return (
    <div className={styles.allUsersContainer}>
      <h2 className={styles.allUsersTitle}>Lista de clientes</h2>
      <button className={styles.allUsersButton} onClick={handleSortChange}>
        Cambiar orden
      </button>
      <div className={styles.allUsersList}>
        {sortedUsers && sortedUsers.length ? (
          sortedUsers.map((user) => {
            if (user.email === "armandoAdmin@gmail.com") {
              return true;
            } else {
              return (
                <div className={styles.userCard} key={user.sub}>
                  <User
                    email={user.email}
                    name={user.name}
                    sub={user.sub}
                    borrado={user.borrado}
                  />
                </div>
              );
            }
          })
        ) : (
          <div className={styles.allUsersLoading}>
            <p>Cargando</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUserAdmin;
