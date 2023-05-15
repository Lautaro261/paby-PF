import React from "react";
import { useDispatch } from 'react-redux'
import { sendUserSession } from "../../redux/features/users/usersSlice";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import style from './RegisterModal.module.css';

const RegisterModal = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();

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

            try {
                const response = dispatch(sendUserSession(user));
                localStorage.setItem(`sub`, sub);
                localStorage.setItem(`email`, email);
                localStorage.setItem(`name`, name);
            localStorage.setItem('isLoggedIn', true)

                console.log('soy sendUser en RegisterOwn', response);
                onClose();
            } catch (error) {
                console.log(error);
            }
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
              
            </div>
        </div>
    )
        : null;
};

export default RegisterModal   