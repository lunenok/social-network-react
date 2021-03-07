import {setLoginDataThunkCreator} from "../redux/auth-reducer";
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
    };
};

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);