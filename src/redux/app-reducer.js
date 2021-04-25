import {setLoginDataThunkCreator} from './auth-reducer';

const INITIALIZE = 'INITIALIZE';

const initialState = {
    initialized: false
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

const initializeCreator = () => ({
    type: INITIALIZE,
});

export const setInitializeDataThunkCreator = () => async (dispatch) => {
    await dispatch(setLoginDataThunkCreator());
    await dispatch(initializeCreator());
};
