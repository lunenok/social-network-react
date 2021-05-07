import {setLogoutThunkCreator} from "../redux/auth-reducer";
import {Header} from "./header";
import {connect} from 'react-redux';
import * as React from "react";
import { AppStateType } from "../redux/store";

type PropsType = {
    loginData: AppStateType['authData'],
    setLogoutThunkCreator: () => void
};

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

const mapDispatchToProps = (dispatch: any) => {
    return {
        setLogoutThunkCreator: () => {
            dispatch(setLogoutThunkCreator())
        }
    };
};

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);