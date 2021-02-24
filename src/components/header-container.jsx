import {setLoginDataCreator} from "../redux/auth-reducer";
import {Header} from "./header";
import {connect} from 'react-redux';
import * as axios from "axios";
import * as React from "react";

class HeaderComponent extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then((response) => {
                const {email, id, login} = response.data.data;
                this.props.setLoginData({email, id, login});
            });
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
            dispatch(setLoginDataCreator(data))
        },
    };
};

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);