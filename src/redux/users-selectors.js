import { createSelector } from "reselect";

export const getUsers = (state) => {
    return state.userPage.users;
};

export const getUsersSuperSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true);
});

export const getCurrentPage = (state) => {
    return state.userPage.currentPage;
};

export const getUsersCount = (state) => {
    return state.userPage.usersCount;
};

export const getUsersToShow = (state) => {
    return state.userPage.usersToShow;
};

export const getIsLoading = (state) => {
    return state.userPage.isLoading;
};

export const getSubscribingInProgress = (state) => {
    return state.userPage.subscribingInProgress;
};