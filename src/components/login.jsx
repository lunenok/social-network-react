import React from 'react';
import { Formik, Field, Form } from 'formik';

export const Login = (props) => {
    const initialValues = {
        login: '',
        password: '',
        rememberMe: false,
    };

    const validateLogin = (value) => {
        let error;
        if (!value) {
            error = 'Required';
        };
        return error;
    };

    const validatePassword = (value) => {
        let error;
        if (!value) {
            error = 'Required'
        };
        if (value.length < 8 && value) {
            error = 'Should be more than 8 characters'
        };
        return error;
    };

    const onFormSubmit = (values) => {
        console.log(values);
    };

    return (
        <div className='login__wrapper'>
            <h1 className='login__title'>Login</h1>
            <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
                {({errors, touched, isValidating}) => (
                    <Form className='login__input-wrapper'>
                        <div className="login__input-container">
                            <label className='login__label' htmlFor='login'>Login</label>
                            <Field className='login__input' id='login' name='login' type='text' validate={validateLogin} placeholder='login' validate={validateLogin} />
                            {errors.login && touched.login && <div className='login__error'>{errors.login}</div>}
                        </div>
                        <div className="login__input-container">
                            <label className='login__label' htmlFor='password'>Password</label>
                            <Field className='login__input' id='password' name='password' type='text' validate={validatePassword} placeholder='password' />
                            {errors.password && touched.password && <div className='login__error'>{errors.password}</div>}
                        </div>
                        <div className="login__input-container">
                            <label className='login__label login__label--remember' htmlFor='rememberMe'>Remember me</label>
                            <Field className='login__input--remember' id='rememberMe' name='rememberMe' type='checkbox' />
                        </div>
                        <button className='login__button'>Submit</button>
                    </Form>
                )}
            </Formik>

        </div>
    );
};