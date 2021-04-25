import {setLogoutThunkCreator} from "../redux/auth-reducer";
import {Header} from "./header";
import {connect} from 'react-redux';
import * as React from "react";

class HeaderComponent extends React.Component {
    render() {
        return (
            <Header
                loginData={this.props.loginData}
                setLogoutThunkCreator={this.props.setLogoutThunkCreator}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loginData: state.authData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLogoutThunkCreator: () => {
            dispatch(setLogoutThunkCreator())
        }
    };
};

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);