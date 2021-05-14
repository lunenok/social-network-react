import React from 'react';
import {NavLink} from "react-router-dom";
import { AppStateType } from '../redux/store';

type PropsType = {
    loginData: AppStateType['authData'];
    setLogoutThunkCreator: () => void;
};

export const Header: React.FC<PropsType> = ({loginData, setLogoutThunkCreator}) => {

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
                <button className='header__logout-button' onClick={setLogoutThunkCreator}>
                        logout
                    </button>
            </span>
        </header>
    );
};