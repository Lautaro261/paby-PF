import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  userDetails,
  clearDetails,
} from "../../../redux/features/admin/adminSlice";
import styles from "../ClientDetails/clientDetails.module.css";

const ClientDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.admin.userDetails);
  const { sub } = useParams();

  useEffect(() => {
    console.log("soy useEffect en clientsDetails", sub, token);
    dispatch(userDetails({ sub, token }));
    return function clean() {
      dispatch(clearDetails());
    };
  }, [dispatch, sub]);
  return (
    <div className={styles.clientDetailsContainer}>
      <div>
        <button
          className={styles.clientDetailsButton}
          onClick={() => navigate("/admin/clients")}
        >
          X
        </button>
        <h2 className={styles.clientDetailsTitle}>
          Cliente {user?.userById?.name}
        </h2>
        <p className={styles.clientDetailsItem}>
          Apodo: {user?.profileById?.nickname}
        </p>
        <p className={styles.clientDetailsItem}>
          Email: {user?.userById?.email}
        </p>
        <p className={styles.clientDetailsItem}>
          Telefono: {user?.profikeById?.email}
        </p>
        <p className={styles.clientDetailsItem}>
          País: {user?.profileById?.country}
        </p>
        <p className={styles.clientDetailsItem}>
          Ciudad: {user?.profileById?.city}
        </p>
        <p className={styles.clientDetailsItem}>
          Dirección: {user?.profileById?.address}
        </p>
        <p className={styles.clientDetailsItem}>
          Vecindario: {user?.profileById?.neighborhood}
        </p>
      </div>
    </div>
  );
};

export default ClientDetails;
