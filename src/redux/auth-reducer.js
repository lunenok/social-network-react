import {getAuthInfo, login, logout} from './../api/api';

const SET_LOGIN_DATA = 'SET_LOGIN_DATA';

const initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_DATA:
            return {
                ...state,
                ...action.loginData,
            }
        default:
            return state
    }
};

export const setLoginDataCreator = ({email, id, login, isAuth = true}) => ({
    type: SET_LOGIN_DATA,
    loginData: {email, id, login, isAuth}
});

export const setLoginDataThunkCreator = () => async (dispatch) => {
    const response = await getAuthInfo()
    const {email, id, login} = response.data.data;
    if (response.data.resultCode === 0) {
        dispatch(setLoginDataCreator({email, id, login}));
    };
};

export const setLoginThunkCreator = ({email, password, rememberMe, setStatus}) => {
    return async (dispatch) => {
        const response = await login(email, password, rememberMe);
        if (response.data.resultCode === 0) {
            dispatch(setLoginDataThunkCreator())
        } else {
            setStatus(response.data.messages[0]);
        };
    };
};

export const setLogoutThunkCreator = () => {
    return async (dispatch) => {
        const response = await logout();
        if (response.data.resultCode === 0) {
            dispatch(setLoginDataCreator({email: null, id: null, login: null, isAuth: false}));
        };
    };
};