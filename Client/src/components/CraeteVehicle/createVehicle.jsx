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
        const response = await axios.post('http://localhost:3001/users/vehicle', JSON.(requestData), {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      console.log(response.data);
      //console.log(JSON.stringify(requestData));
      console.log(requestData);
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };



	return (
    <div class="ContenedorPrimary">
      <h1>Crear Vehiculo</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >
        {({ setFieldValue, isSubmitting }) => (
        <form>
        <div class="selectecontenedor">
          <div class="select-containerS">
            <label htmlFor="vehicle_tipe">Tipo de vehículo</label>
            <Field as="select" id="vehicle_tipe" name="vehicle_tipe" class="select">
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
              <option value="bicicleta">Bicicleta</option>
            </Field>
            <ErrorMessage name="vehicle_tipe" />
          </div>

          <div class="select-containerS">
            <label htmlFor="type_of_service">Tipo de servicio</label>
            <Field as="select" id="type_of_service" name="type_of_service" class="select">
              <option value="particular">Particular</option>
              <option value="publico">Público</option>
            </Field>
            <ErrorMessage name="type_of_service" />
          </div>
        </div>

      <div>
        <label htmlFor="car_brand">Marca</label>
        <Field type="text" id="car_brand" name="car_brand" />
        <ErrorMessage name="car_brand" />
      </div>

      <div>
        <label htmlFor="car_model">Modelo</label>
        <Field type="text" id="car_model" name="car_model" />
        <ErrorMessage name="car_model" />
      </div>

      <div>
        <label htmlFor="car_model_year">Año</label>
        <Field type="text" id="car_model_year" name="car_model_year" />
        <ErrorMessage name="car_model_year" />
      </div>

      <div>
        <label htmlFor="car_color">Color</label>
        <Field type="text" id="car_color" name="car_color" />
        <ErrorMessage name="car_color" />
      </div>

      <div>
        <label htmlFor="license_plate">Matrícula</label>
        <Field type="text" id="license_plate" name="license_plate" />
        <ErrorMessage name="license_plate" />
      </div>

      <div>
        <label htmlFor="photo">Foto</label>
        <Field
          type="file"
          id="photo"
          name="photo"
          onChange={(event) => {
            setFieldValue("photo", event.currentTarget.files[0]);
          }}
        />
      </div>

      <div>   
        <button type="submit" disabled={isSubmitting}>
          Crear Vehiculo
        </button>
      </div>

    </form>
    )}
    </Formik>
  </div>
  );
}