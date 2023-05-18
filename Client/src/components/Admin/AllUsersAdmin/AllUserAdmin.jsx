import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserForAdmin } from "../../../redux/features/admin/adminSlice";
import User from "../User/User";
import styles from "../AllUsersAdmin/allUsersAdmin.module.css";

const AllUserAdmin = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.admin.allUsers);
  const token = localStorage.getItem("token");

  useEffect(() => {
    console.log(token, "LINEA 13 TRAIGO TODOS LOS USERS. ALLUSERS.JSX");
    dispatch(getAllUserForAdmin(token));
  }, [dispatch, token]);

  return (
    <div className={styles.allUsersContainer}>
      <h2 className={styles.allUsersTitle}>Lista de clientes</h2>
      <button className={styles.allUsersButton}>Cambiar orden</button>
      <div className={styles.allUsersList}>
        {allUsers && allUsers.length ? (
          allUsers.map((user) => (
            <div className={styles.userCard} key={user.sub}>
              <User email={user.email} name={user.name} sub={user.sub} />
            </div>
          ))
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
