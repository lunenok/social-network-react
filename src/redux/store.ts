import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {usersReducer} from "./users-reducer";
import {authReducer} from './auth-reducer';
import {appReducer} from './app-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userPage: usersReducer,
    authData: authReducer,
    appData: appReducer
})

type ReducerType = typeof reducers;
export type AppStateType = ReturnType<ReducerType>;

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store;
