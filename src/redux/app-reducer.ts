import { ThunkAction } from 'redux-thunk';
import {setLoginDataThunkCreator} from './auth-reducer';
import { AppStateType } from './store';

const INITIALIZE = 'INITIALIZE';

type InitializeActionType = {
    type: typeof INITIALIZE,
};

const initialState = {
    initialized: false
};

type InitialState = typeof initialState;

export const appReducer = (state = initialState, action: InitializeActionType): InitialState => {
    switch (action.type) {
        case INITIALIZE:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

const initializeCreator = (): InitializeActionType => ({
    type: INITIALIZE,
});

export const setInitializeDataThunkCreator = (): ThunkAction<void, AppStateType, unknown, InitializeActionType> => async (dispatch) => {
    await dispatch(setLoginDataThunkCreator());
    await dispatch(initializeCreator());
};
