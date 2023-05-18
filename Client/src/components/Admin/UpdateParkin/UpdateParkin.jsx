import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ChangeParkingDetails } from "../../../redux/features/admin/adminSlice";
import styles from "../UpdateParkin/updateParkin.module.css";
import SelectorParking from "../../SelectorParking/SelectorParking";
import { useNavigate } from "react-router-dom";
export default function UpdateParkin(parking) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  //const id = useState(parking);
  const selectedParkingLot = useSelector(
    (state) => state.parkingSpaces.selectedParkingSpace
  );
  const initialValues = {
    name: "",
    nit: "",
    city: "",
    neighborhood: "",
    address: "",
    fee: "",
    regulation: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("El campo es obligatorio"),
    nit: Yup.string().required("El campo es obligatorio"),
    city: Yup.string().required("El campo es obligatorio"),
    neighborhood: Yup.string().required("El campo es obligatorio"),
    address: Yup.string().required("El campo es obligatorio"),
    fee: Yup.number().required("El campo es obligatorio"),
    regulation: Yup.string().required("El campo es obligatorio"),
  });
  console.log(selectedParkingLot, "EL ELEGIDO");

  const handleSubmit = (values) => {
    const id = selectedParkingLot.id;
    const data = [token, values, id];
    dispatch(ChangeParkingDetails(data))
      .unwrap()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error.message);
      });
    alert("se modifico correctamente");
    navigate("/admin/home");
    console.log(values);
  };

  return (
    <div>
      <SelectorParking />
      {Object.keys(selectedParkingLot).length === 0 ? (
        <div>seleccione un parqueadero...</div>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <div className={styles.updateParkingContainer}>
            <h2 className={styles.updateParkingTitle}>Modificar Parqueadero</h2>
            <Form className={styles.updateParkingForm}>
              <div className={styles.updateParkingLabel}>
                <label htmlFor="name">Nombre del parqueadero:</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className={styles.updateParkingInput}
                />
                <ErrorMessage name="name" component="div" />
              </div>

              <div className={styles.updateParkingLabel}>
                <label htmlFor="nit">NIT:</label>
                <Field
                  type="text"
                  id="nit"
                  name="nit"
                  className={styles.updateParkingInput}
                />
                <ErrorMessage name="nit" component="div" />
              </div>

              <div className={styles.updateParkingLabel}>
                <label htmlFor="city">Ciudad:</label>
                <Field
                  type="text"
                  id="city"
                  name="city"
                  className={styles.updateParkingInput}
                />
                <ErrorMessage name="city" component="div" />
              </div>

              <div className={styles.updateParkingLabel}>
                <label htmlFor="neighborhood">Vecindario:</label>
                <Field
                  type="text"
                  id="neighborhood"
                  name="neighborhood"
                  className={styles.updateParkingInput}
                />
                <ErrorMessage name="neighborhood" component="div" />
              </div>

              <div className={styles.updateParkingLabel}>
                <label htmlFor="address">Dirección:</label>
                <Field
                  type="text"
                  id="address"
                  name="address"
                  className={styles.updateParkingInput}
                />
                <ErrorMessage name="address" component="div" />
              </div>

              <div className={styles.updateParkingLabel}>
                <label htmlFor="fee">Precio por hora de parqueo:</label>
                <Field
                  type="number"
                  id="fee"
                  name="fee"
                  className={styles.updateParkingInput}
                />
                <ErrorMessage name="fee" component="div" />
              </div>

              <div className={styles.updateParkingLabel}>
                <label htmlFor="regulation">Normas del parqueadero:</label>
                <Field
                  type="text"
                  id="regulation"
                  name="regulation"
                  className={styles.updateParkingInput}
                />
                <ErrorMessage name="regulation" component="div" />
              </div>

              <button type="submit" className={styles.updateParkingButton}>
                Guardar Cambios
              </button>
            </Form>
          </div>
        </Formik>
      )}
    </div>
  );
}
