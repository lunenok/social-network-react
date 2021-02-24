const SET_LOGIN_DATA = 'SET_LOGIN_DATA'

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
                isAuth: true
            }
        default:
            return state
    }
}

export const setLoginDataCreator = ({email, id, login}) => ({
    type: SET_LOGIN_DATA,
    loginData: {email, id, login}
});