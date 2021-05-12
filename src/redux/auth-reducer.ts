import { ThunkAction } from 'redux-thunk';
import {getAuthInfo, login, logout, getCaptchaUrl} from '../api/api';
import { AppStateType } from './store';

const SET_LOGIN_DATA = 'SET_LOGIN_DATA';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

const initialState = {
    email: null as string | null,
    id: null as number | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
};

type InitialStateType = typeof initialState;
type ActionsType = SetLoginDataActionType | SetCaptchaUrlActionType;

export const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
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

type LoginDataPayloadType = {
    email: string | null,
    id: number | null,
    login: string | null,
    isAuth: boolean,
};
type SetLoginDataActionType = {
    type: typeof SET_LOGIN_DATA,
    loginData: LoginDataPayloadType
}
export const setLoginDataCreator = (email: string | null, id: number | null, login: string | null, isAuth: boolean = true): SetLoginDataActionType => ({
    type: SET_LOGIN_DATA,
    loginData: {email, id, login, isAuth}
});

type SetCaptchaUrlActionType = {
    type: typeof SET_CAPTCHA_URL,
    captchaUrl: string
}
const setCaptchaUrl = (url: string): SetCaptchaUrlActionType => ({
    type: SET_CAPTCHA_URL,
    captchaUrl: url
});

export const setLoginDataThunkCreator = (): ThunkAction<void, AppStateType, unknown, ActionsType> => async (dispatch) => {
    const response = await getAuthInfo()
    const {email, id, login} = response.data.data;
    if (response.data.resultCode === 0) {
        dispatch(setLoginDataCreator(email, id, login));
    };
};

export const setLoginThunkCreator = (email: string | null, 
    password: string | null, 
    rememberMe: boolean, 
    captcha: string | null, 
    setStatus: any): ThunkAction<void, AppStateType, unknown, ActionsType> => {
    return async (dispatch) => {
        const response = await login(email, password, rememberMe, captcha);
        if (response.resultCode === 0) {
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

export const setLogoutThunkCreator = (): ThunkAction<void, AppStateType, unknown, ActionsType> => {
    return async (dispatch) => {
        const response = await logout();
        if (response.resultCode === 0) {
            dispatch(setLoginDataCreator(null, null, null, false));
        };
    };
};