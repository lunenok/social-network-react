import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setLogoutThunkCreator} from "../redux/auth-reducer";
import {NavLink} from "react-router-dom";
import { AppStateType } from '../redux/store';

export const Header: React.FC = () => {

    const loginData = useSelector((state: AppStateType) => {
        return state.authData;
    });

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(setLogoutThunkCreator());
    };

    const renderLoginButton = () => {
        if (loginData.isAuth) {
            return (
                <React.Fragment>
                    <span>{loginData.login}</span>
                </React.Fragment>
            )
        } else {
            return (
                <NavLink to="/login">
                    <span>login</span>
                </NavLink>
            )
        }
    };

    return (
        <header className="header">
            <h1>My social media with React</h1>
            <span className="header__login-info">
                {renderLoginButton()}
                <button className='header__logout-button' onClick={logout}>
                        logout
                    </button>
            </span>
        </header>
    );
};