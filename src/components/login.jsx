import React from 'react';
import { Formik, Field, Form } from 'formik';
import {setLoginThunkCreator} from './../redux/auth-reducer';
import {connect} from 'react-redux';
import { Redirect } from 'react-router';

export const LoginComponent = (props) => {
    const initialValues = {
        login: '',
        password: '',
        rememberMe: false,
        captcha: null
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

    const onFormSubmit = (values, {setStatus}) => {
        props.setLoginThunkCreator(values.login, values.password, values.rememberMe, values.captcha, setStatus);
    };

    if (props.isAuth) return <Redirect to={`/profile/`}/> 

    return (
        <div className='login__wrapper'>
            <h1 className='login__title'>Login</h1>
            <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
                {({errors, touched, isValidating, status}) => (
                    <Form className='login__input-wrapper'>
                        <div className="login__input-container">
                            <label className='login__label' htmlFor='login'>Login</label>
                            <Field className='login__input' id='login' name='login' type='text' validate={validateLogin} placeholder='login' />
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

                        {props.captcha && 
                            <div>
                                <img src={props.captcha} alt='captcha'></img>
                                <div className="login__input-container">
                                    <label className='login__label' htmlFor='captcha'>Captcha</label>
                                    <Field className='login__input' id='captcha' name='captcha' type='text' />
                                </div>
                            </div>
                        }

                        {status && <span className='login__error'>{status}</span>}
                        <button className='login__button' type='submit'>Submit</button>

                    </Form>
                )}
            </Formik>

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.authData.isAuth,
        userId: state.authData.id,
        captcha: state.authData.captchaUrl
    }
};

export const Login = connect(mapStateToProps, {setLoginThunkCreator})(LoginComponent);