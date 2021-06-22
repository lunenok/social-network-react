import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setLogoutThunkCreator} from "../redux/auth-reducer";
import {NavLink} from "react-router-dom";
import { AppStateType } from '../redux/store';
import {Button, Col, PageHeader, Row} from 'antd';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';

export const Header: React.FC = () => {

    const loginData = useSelector((state: AppStateType) => {
        return state.authData;
    });

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(setLogoutThunkCreator());
    };

    return (
        <PageHeader style={{background: 'white', padding: '16px', marginBottom: '1px'}}>
            <Row align='middle'>
                <Col span='15'>
                    <Title>My social media with React</Title>
                </Col>
                <Col span='5'>
                    {loginData.isAuth ? <Text style={{float: 'right'}}>{loginData.login}</Text> : (<NavLink to="/login" style={{float: 'right'}}><Button type='primary'>Login</Button></NavLink>)}
                </Col>
                <Col span='4'>
                    <Button type='primary' style={{float: 'right'}} onClick={logout} disabled={(!loginData.isAuth)}>Logout</Button>
                </Col>
            </Row>
        </PageHeader>

    );
};