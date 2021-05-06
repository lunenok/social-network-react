import {setLoginDataThunkCreator} from './auth-reducer';

const INITIALIZE: string = 'INITIALIZE';

interface State {
    initialized: boolean,
}; 

interface Action {
    type: typeof INITIALIZE,
};

const initialState: State = {
    initialized: false
};

export const appReducer = (state = initialState, action: Action): State => {
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

const initializeCreator = (): Action => ({
    type: INITIALIZE,
});

export const setInitializeDataThunkCreator = () => async (dispatch: Function) => {
    await dispatch(setLoginDataThunkCreator());
    await dispatch(initializeCreator());
};
