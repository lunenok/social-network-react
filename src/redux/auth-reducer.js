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
}

export const setLoginDataCreator = ({email, id, login, isAuth = true}) => ({
    type: SET_LOGIN_DATA,
    loginData: {email, id, login, isAuth}
});

// export const setLoginDataThunkCreator = () => {
//     return (dispatch) => {
//         getAuthInfo()
//         .then((response) => {
//             const {email, id, login} = response.data.data;
//             if (response.data.resultCode === 0) {
//                 dispatch(setLoginDataCreator({email, id, login}));
//             }
//         });
//     }
// }

// Для того чтобы заработала инициализация пришлось переписать так:
export const setLoginDataThunkCreator = () => (dispatch) => {
    return getAuthInfo()
        .then((response) => {
            const {email, id, login} = response.data.data;
            if (response.data.resultCode === 0) {
                dispatch(setLoginDataCreator({email, id, login}));
            }
        });
};

export const setLoginThunkCreator = ({email, password, rememberMe,setStatus}) => {
    return (dispatch) => {
        login(email, password, rememberMe)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setLoginDataThunkCreator())
            } else {
                setStatus(response.data.messages[0]);
                console.log(response.data.messages[0]);
            }
        })
    }
};

export const setLogoutThunkCreator = () => {
    return (dispatch) => {
        logout()
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setLoginDataCreator({email: null, id: null, login: null, isAuth: false}));
            }
        })
    }
};