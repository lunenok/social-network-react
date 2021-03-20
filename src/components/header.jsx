import React from 'react';
import {NavLink} from "react-router-dom";

export const Header = (props) => {

    const renderLoginButton = () => {
        if (props.loginData.isAuth) {
            return (
                <span>{props.loginData.login}</span>
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
            </span>
        </header>
    );
};