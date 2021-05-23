import {setLogoutThunkCreator} from "../redux/auth-reducer";
import {Header} from "./header";
import {connect} from 'react-redux';
import * as React from "react";
import { AppStateType } from "../redux/store";

const HeaderComponent: React.FC<PropsType> = ({loginData, setLogoutThunkCreator}) => {
    return (
        <Header
            loginData={loginData}
            setLogoutThunkCreator={setLogoutThunkCreator}
        />
    )
};

const mapStateToProps = (state: AppStateType) => {
    return {
        loginData: state.authData,
    };
};

export const HeaderContainer = connect(mapStateToProps, {setLogoutThunkCreator})(HeaderComponent);

type PropsType = {
    loginData: AppStateType['authData'];
    setLogoutThunkCreator: () => void;
};