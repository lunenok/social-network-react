import {getAuthInfo, login, logout, getCaptchaUrl} from './../api/api';

const SET_LOGIN_DATA = 'SET_LOGIN_DATA';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

const initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_DATA:
            return {
                ...state,
                ...action.loginData,
            }
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state
    }
};

export const setLoginDataCreator = ({email, id, login, isAuth = true}) => ({
    type: SET_LOGIN_DATA,
    loginData: {email, id, login, isAuth}
});

const setCaptchaUrl = (url) => ({
    type: SET_CAPTCHA_URL,
    captchaUrl: url
});

export const setLoginDataThunkCreator = () => async (dispatch) => {
    const response = await getAuthInfo()
    const {email, id, login} = response.data.data;
    if (response.data.resultCode === 0) {
        dispatch(setLoginDataCreator({email, id, login}));
    };
};

export const setLoginThunkCreator = ({email, password, rememberMe, captcha, setStatus}) => {
    return async (dispatch) => {
        const response = await login(email, password, rememberMe, captcha);
        if (response.data.resultCode === 0) {
            dispatch(setLoginDataThunkCreator())
        } else {
            if (response.data.resultCode === 10) {
               const captchaUrl = await getCaptchaUrl();
               dispatch(setCaptchaUrl(captchaUrl.data.url));
            }
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