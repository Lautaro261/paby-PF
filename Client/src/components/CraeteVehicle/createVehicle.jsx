import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './createVehicle.module.css';
import { Form as BSForm, FormGroup, FormLabel, FormControl, FormSelect, Button } from 'react-bootstrap';

export default function CreateVehicle() {
	const initialValues = {  
		vehicle_tipe:'auto',
		type_of_service: 'particular',
		car_brand: '',
		car_model: '',
		car_model_year: '',
		car_color:'',
		license_plate: '',
		photo: '',
	};

	//Esquema de validacion
	const validationSchema = Yup.object({
		vehicle_tipe: Yup.string().required('El tipo de vehiculo es obligatorio'),
		type_of_service: Yup.string().required('El tipo de servicio es obligatorio'),
		car_brand: Yup.string().required('La marca es obligatoria'),
		car_model: Yup.string().required('El modelo es obligatorio'),
		car_model_year: Yup.string().required('El año del vehiculo es obligatorio'),
		car_color: Yup.string().required('El color del vehiculo es obligatorio'),
		//license_plate: Yup.string().required('La matricula es obligatoria'),
    license_plate: Yup.string()
    .min(1, "La placa debe tener al menos 1 caracter")
    .max(7, "La placa no puede tener más de 7 caracteres")
    .required("La placa es un campo obligatorio"),
		//photo: Yup.mixed().required('Foto obligatoria'),
	});

    // Aquí iría la lógica de enviar los datos al servidor
    const handleSubmit = async (values, { resetForm }) => {
      const requestData = {
        license_plate_id: values.license_plate,
        vehicle_tipe: values.vehicle_tipe,
        type_of_service: values.type_of_service,
        car_brand: values.car_brand,
        car_model: values.car_model,
        car_model_year: values.car_model_year,
        car_color: values.car_color,
        license_plate: values.license_plate,
        photo: values.photo
      };
      

      try {
        const response = await axios.post('http://localhost:3001/users/vehicle', JSON.stringify(requestData), {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };



	return (
    <div className="container">
      <h1 className="my-4">Crear Vehiculo</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >
        {({ setFieldValue, isSubmitting }) => (
        <Form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="vehicle_tipe" className="form-label">Tipo de vehículo</label>
            <Field as="select" id="vehicle_tipe" name="vehicle_tipe" className="form-select">
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
              <option value="bicicleta">Bicicleta</option>
            </Field>
            <ErrorMessage name="vehicle_tipe" className="invalid-feedback" />
          </div>

          <div className="col-md-6">
            <label htmlFor="type_of_service" className="form-label">Tipo de servicio</label>
            <Field as="select" id="type_of_service" name="type_of_service" className="form-select">
              <option value="particular">Particular</option>
              <option value="publico">Público</option>
            </Field>
            <ErrorMessage name="type_of_service" className="invalid-feedback" />
          </div>

          <div className="col-md-6">
            <label htmlFor="car_brand" className="form-label">Marca</label>
            <Field type="text" id="car_brand" name="car_brand" className="form-control" />
            <ErrorMessage name="car_brand" className="invalid-feedback" />
          </div>

          <div className="col-md-6">
            <label htmlFor="car_model" className="form-label">Modelo</label>
            <Field type="text" id="car_model" name="car_model" className="form-control" />
            <ErrorMessage name="car_model" className="invalid-feedback" />
          </div>

          <div className="col-md-6">
            <label htmlFor="car_model_year" className="form-label">Año</label>
            <Field type="text" id="car_model_year" name="car_model_year" className="form-control" />
            <ErrorMessage name="car_model_year" className="invalid-feedback" />
          </div>

          <div className="col-md-6">
            <label htmlFor="car_color" className="form-label">Color</label>
            <Field type="text" id="car_color" name="car_color" className="form-control" />
            <ErrorMessage name="car_color" className="invalid-feedback" />
          </div>

          <div className="col-md-6">
            <label htmlFor="license_plate" className="form-label">Matrícula</label>
            <Field type="text" id="license_plate" name="license_plate" className="form-control" />
            <ErrorMessage name="license_plate" className="invalid-feedback" />
          </div>

          <div className="col-md-6">
            <label htmlFor="photo" className="form-label">Foto</label>
            <Field
              type="file"
              id="photo"
              name="photo"
              className="form-control"
              onChange={(event) => {
                setFieldValue("photo", event.currentTarget.files[0]);
              }}
            />
            {/*<ErrorMessage name="photo" className="invalid-feedback" />*/}
          </div>

          <div className="col-12">   
            <button type="submit" disabled={isSubmitting}>
              Crear
            </button>
          </div>

        </Form>
        )}
      </Formik>
    </div>
  );

}