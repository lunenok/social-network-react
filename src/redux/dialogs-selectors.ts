import { AppStateType } from "./store";

export const getMessages = (state: AppStateType) => {
    return state.dialogsPage.messages;
};

export const getDialogsName = (state: AppStateType) => {
    return state.dialogsPage.dialogsName;
};