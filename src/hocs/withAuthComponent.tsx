import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router';
import { AppStateType } from '../redux/store';

export function withAuthComponent<WCP> (Component: React.FC<WCP>) {
    const RedirectComponent: React.FC<{isAuth: boolean}> = (props) => {
        const {isAuth, ...restProps} = props;

        if (!isAuth) return <Redirect to='/login'/>

        return <Component {...restProps as WCP}/>;
    };

    const mapStateToProps = (state: AppStateType) => {
        return {
            isAuth: state.authData.isAuth
        }
    };

    const connectedWithAuthComponent = connect(mapStateToProps)(RedirectComponent);

    return connectedWithAuthComponent;
};
