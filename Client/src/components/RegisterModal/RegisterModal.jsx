import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { sendUserSession, setUserSession } from "../../redux/features/users/usersSlice";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import style from './RegisterModal.module.css';
import { useNavigate } from "react-router-dom";

const RegisterModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const error = useSelector(state => state.users.error)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirmation: '',
            name: ''
        },

        //Esquema de validacion
        validationSchema: Yup.object({
            email: Yup.string().email('Email inválido')
                .required('Campo requerido'),
            password: Yup.string()
                .matches(/^[a-z0-9]{8,16}$/, 'La contraseña debe contener solo letras minúsculas y números y tener entre 8 y 16 caracteres')
                .required('Campo requerido'),
            passwordConfirmation: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
                .required('Campo requerido'),
            name: Yup.string()
                .required('Campo requerido')
        }),

        onSubmit: (values) => {
            const { email, password, name } = values;
            const sub = email;

            const user = {
                sub: sub,
                email: email,
                name: name,
                password: password
            };
            dispatch(sendUserSession(user))
                .then((response) => {
                    console.log('RESPUESTA!!!', response)
                    if (response.meta.arg ) {
                        console.log('ENTRE AL IF GATO!!!', response.meta.arg )
                        dispatch(setUserSession(user))
                        localStorage.setItem(`sub`, email);
                        localStorage.setItem(`name`, name);
                        localStorage.setItem(`email`, email)
                        localStorage.setItem(`isLoggedIn`, true)
                        onClose()
                        navigate('/')
                    }
                })
         

        }
    });

    return isOpen ? (
        <div className={style.modal}>
            <div className={style.modalContent}>
                <button onClick={onClose} className={style.buttonRegisterOnClose}>X</button>
                <h2>Registrarse</h2>

                <form onSubmit={formik.handleSubmit} className={style.formRegisterOwn}>
                    <label htmlFor='name'>Nombre:
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </label>
                    {formik.touched.name && formik.errors.name ? (
                        <div>{formik.errors.name}</div>
                    ) : null}

                    <label htmlFor='email'>Email:
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </label>
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}

                    <label htmlFor="password">Constraseña:
                        <input
                            type='password'
                            id='password'
                            name='password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </label>
                    {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                    ) : null}

                    <label htmlFor="passwordConfirmation">Repetir contraseña:

                        <input
                            type='password'
                            id='passwordConfirmation'
                            name='passwordConfirmation'
                            value={formik.values.passwordConfirmation}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </label>
                    {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (
                        <div>{formik.errors.passwordConfirmation}</div>
                    ) : null}
                    <button type='submit'>Registrarse</button>
                </form>
                    {error && <p>{error.messagge}</p>}

            </div>
        </div>
    )
        : null;
};

export default RegisterModal   