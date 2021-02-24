import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {combineReducers, createStore} from "redux";
import {usersReducer} from "./users-reducer";
import {authReducer} from './auth-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userPage: usersReducer,
    authData: authReducer
})

export const store = createStore(reducers);

window.store = store;
