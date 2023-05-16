import {Formik, Form, Field, ErrorMessage} from 'formik'


const ManualReserveForm = ()=>{
    const submitHandler = (values)=>{
        alert(JSON.stringify(values))
    }
    const validateHandler= (values)=>{
        const errors={}
        //validaciones
        if(!/^[0-9]*$/.test(values.phone)) errors.phone='solo puede ingresar numeros'
        return errors;
    }

    return(
        <div>
            <Formik
                initialValues={{
                    names:'',
                    surnames:'',
                    email:'',
                    phone:'',
                    photo:'',
                    documentType:'',
                    documentNum:'',
                    parkingTel:'',
                    price:'',
                    totalZones:'',
                    carZones:'',
                    motoZones:'',
                    parkingPhoto:'',
                    rules:'',
                }}
                onSubmit={submitHandler}
                validate={validateHandler}
                >
                    <Form>
                        <Field name="names" type="text"/>
                        <ErrorMessage name='names'/>
                        <Field name="surnames" type="text" />
                        <Field name="email" type="email" />
                        <Field name="phone" type="text" />
                        <ErrorMessage name='phone'/>
                        <Field name="photo" type="text" />
                        <Field name="documentType" type="text" />
                        <Field name="documntNum" type="text" />
                        <Field name="parkingTel" type="text" />
                        <Field name="price" type="text" />
                        <Field name="totalZones" type="text" />
                        <Field name="carZones" type="text" />
                        <Field name="motoZones" type="text" />
                        <Field name="parkingPhoto" type="text" />
                        <Field name="rules" type="text" />
                        <button type='submit'> Guardar </button>
                    </Form>
            </Formik>
        </div>
    )
}

export default ManualReserveForm;