import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router';

export const withAuthComponent = (Component) => {
    
    const RedirectComponent = (props) => {
        const {isAuth, ...restProps} = props;

        if (!isAuth) return <Redirect to='/login'/>;

        return <Component {...restProps}/>
    };

    const mapStateToProps = (state) => {
        return {
            isAuth: state.authData.isAuth,
        };
    };

    const ConnectedWithAuthComponent = connect(mapStateToProps)(RedirectComponent);

    return ConnectedWithAuthComponent;

};
