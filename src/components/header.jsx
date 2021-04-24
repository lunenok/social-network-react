import React from 'react';
import {NavLink} from "react-router-dom";

export const Header = (props) => {

    // console.log(props.setLogoutThunkCreator);

    const renderLoginButton = () => {
        if (props.loginData.isAuth) {
            return (
                <React.Fragment className=''>
                    <span>{props.loginData.login}</span>
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
                <button className='header__logout-button' onClick={props.setLogoutThunkCreator}>
                        logout
                    </button>
            </span>
        </header>
    );
};