import React from 'react';
import {Formik} from 'formik';
import { Input, Checkbox, Form, FormItem } from 'formik-antd';
import {setLoginThunkCreator} from '../redux/auth-reducer';
import {connect} from 'react-redux';
import { Redirect } from 'react-router';
import { AppStateType } from '../redux/store';
import Title from 'antd/lib/typography/Title';
import { Content } from 'antd/lib/layout/layout';
import { Button, Col, Row } from 'antd';

export const LoginComponent: React.FC<PropsType> = ({setLoginThunkCreator, isAuth, captcha}) => {
    const initialValues = {
        login: '',
        password: '',
        rememberMe: false,
        captcha: null as string | null
    };

    type InitialValues = typeof initialValues;

    const validateLogin = (value: string | null) => {
        let error;
        if (!value) {
            error = 'Required';
        };
        return error;
    };

    const validatePassword = (value: string | null) => {
        let error;
        if (!value) {
            error = 'Required'
        } else if (value.length < 8) {
            error = 'Should be more than 8 characters'
        };
        return error;
    };

    const onFormSubmit = (values: InitialValues, {setStatus}: any) => {
        setLoginThunkCreator(values.login, values.password, values.rememberMe, values.captcha, setStatus);
    };

    if (isAuth) return <Redirect to={`/profile/`}/> 

    return (
        <Content style={{background: 'white', padding: '16px'}}>
            <Row>
                <Col span='12' offset='6'>
                    <Title level={3}>Login</Title>
                    <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
                        {({errors, touched, isValidating, status}) => (
                            <Form className='login__input-wrapper'>
                                <FormItem name='login' label='Login' validate={validateLogin}>
                                    <Input name="login" placeholder="login" />
                                </FormItem>
                                <FormItem name='password' label='Password' validate={validatePassword}>
                                    <Input name="password" placeholder="password" />
                                </FormItem>
                                <FormItem name='rememberMe'>
                                    <Checkbox name="rememberMe">Remember me</Checkbox>
                                </FormItem>


                                {captcha && 
                                    <div>
                                        <img src={captcha} alt='captcha'></img>
                                        <FormItem name='captcha'>
                                            <Input name="captcha" placeholder="captcha" />
                                        </FormItem>
                                    </div>
                                }

                                {status && <span className='login__error'>{status}</span>}
                                <Button htmlType='submit' type='primary'>Enter</Button>

                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </Content>
    );
};

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.authData.isAuth,
        userId: state.authData.id,
        captcha: state.authData.captchaUrl
    }
};

export const Login = connect(mapStateToProps, {setLoginThunkCreator})(LoginComponent);

type PropsType = {
    setLoginThunkCreator: (login: string, password: string, rememberMe: boolean, captcha: string | null, setStatus: any) => void;
    isAuth: boolean;
    captcha: string | null;
};

// return (
//     <Content style={{background: 'white', padding: '16px'}}>
//         <Row>
//             <Col span='12' offset='6'>
//                 <Title level={3}>Login</Title>
//                 <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
//                     {({errors, touched, isValidating, status}) => (
//                         <Form className='login__input-wrapper'>
//                             <FormItem name='login' label='Login' validate={validateLogin}>
//                                 <Input name="login" placeholder="login" />
//                             </FormItem>
//                             <FormItem name='password' label='Password' validate={validatePassword}>
//                                 <Input name="password" placeholder="password" />
//                             </FormItem>
//                             <FormItem name='rememberMe'>
//                                 <Checkbox name="rememberMe">Remember me</Checkbox>
//                             </FormItem>


//                             {captcha && 
//                                 <div>
//                                     <img src={captcha} alt='captcha'></img>
//                                     <FormItem name='captcha'>
//                                         <Input name="captcha" placeholder="captcha" />
//                                     </FormItem>
//                                 </div>
//                             }

//                             {status && <span className='login__error'>{status}</span>}
//                             <SubmitButton>Enter</SubmitButton>

//                         </Form>
//                     )}
//                 </Formik>
//             </Col>
//         </Row>
//     </Content>
// );