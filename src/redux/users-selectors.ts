import { AppStateType } from "./store";

export const getUsers = (state: AppStateType) => {
    return state.userPage.users;
};

// Тренировки ради reselect
// import { createSelector } from "reselect";
// export const getUsersSuperSelector = createSelector(getUsers, (users) => {
//     return users.filter(u => true);
// });

export const getCurrentPage = (state: AppStateType) => {
    return state.userPage.currentPage;
};

export const getUsersCount = (state: AppStateType) => {
    return state.userPage.usersCount;
};

export const getUsersToShow = (state: AppStateType) => {
    return state.userPage.usersToShow;
};

export const getIsLoading = (state: AppStateType) => {
    return state.userPage.isLoading;
};

export const getSubscribingInProgress = (state: AppStateType) => {
    return state.userPage.subscribingInProgress;
};