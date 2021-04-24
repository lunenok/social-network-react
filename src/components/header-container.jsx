import {setLoginDataThunkCreator, setLogoutThunkCreator} from "../redux/auth-reducer";
import {Header} from "./header";
import {connect} from 'react-redux';
import * as React from "react";

class HeaderComponent extends React.Component {
    componentDidMount() {
        this.props.setLoginData();
    }

    render() {
        return (
            <Header
                loginData={this.props.loginData}
                setLoginData={this.props.setLoginData}
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
        setLoginData: (data) => {
            dispatch(setLoginDataThunkCreator(data))
        },
        setLogoutThunkCreator: () => {
            dispatch(setLogoutThunkCreator())
        }
    };
};

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);