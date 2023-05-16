import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const updateAdminSchema = Yup.object().shape({
  nombre: Yup.string().matches(/^[a-zA-Z\s]+$/, 'Solo se permiten letras').required('Campo requerido'),
  documento: Yup.number().integer().max(9999999999, 'No debe superar los 10 dígitos').required('Campo requerido'),
  email: Yup.string().email('Dirección de correo electrónico inválida').required('Campo requerido'),
  telefono: Yup.string().matches(/^[0-9]{10}$/, 'Debe contener 10 dígitos numéricos').required('Campo requerido'),
  telefonoParqueadero: Yup.string().matches(/^[0-9]{10}$/, 'Debe contener 10 dígitos numéricos').required('Campo requerido'),
  zonasAutos: Yup.number().integer().required('Campo requerido'),
  zonasMotos: Yup.number().integer().required('Campo requerido'),
  reglas: Yup.string().required('Campo requerido'),
});

export default function updateAdmin() {
  const initialValues = {
    nombre: '',
    documento: '',
    email: '',
    telefono: '',
    telefonoParqueadero: '',
    zonasAutos: 0,
    zonasMotos: 0,
    reglas: '',
  };

  const handleSubmit = (values) => {
    // Aqui va la logica del put
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={updateAdminSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <Field type="text" id="nombre" name="nombre" />
          <ErrorMessage name="nombre" component="div" />
        </div>

        <div>
          <label htmlFor="documento">Número de documento:</label>
          <Field type="text" id="documento" name="documento" />
          <ErrorMessage name="documento" component="div" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <Field type="text" id="telefono" name="telefono" />
          <ErrorMessage name="telefono" component="div" />
        </div>

        <div>
          <label htmlFor="telefonoParqueadero">Teléfono del parqueadero:</label>
          <Field type="text" id="telefonoParqueadero" name="telefonoParqueadero" />
          <ErrorMessage name="telefonoParqueadero" component="div" />
        </div>

        <div>
          <label htmlFor="zonasAutos">Zonas para autos:</label>
          <Field type="number" id="zonasAutos" name="zonasAutos" />
          <ErrorMessage name="zonasAutos" component="div" />
        </div>

        <div>
          <label htmlFor="zonasMotos">Zonas para motos:</label>
          <Field type="number" id="zonasMotos" name="zonasMotos" />
          <ErrorMessage name="zonasMotos" component="div" />
        </div>

        <div>
          <label htmlFor="totalZonas">Total de zonas:</label>
          <Field
            type="text"
            id="totalZonas"
            name="totalZonas"
            render={({ field }) => (
              <span>{values.zonasAutos + values.zonasMotos}</span>
            )}
          />
        </div>

        <div>
          <label htmlFor="reglas">Reglas o normas del parqueadero:</label>
          <Field as="textarea" id="reglas" name="reglas" />
          <ErrorMessage name="reglas" component="div" />
        </div>

        <button type="submit">Guardar cambios</button>
      </Form>
    </Formik>
  );
};