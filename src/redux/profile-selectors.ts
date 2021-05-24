import { AppStateType } from "./store";

export const getCurrentProfile = (state: AppStateType) => {
    return state.profilePage.currentProfile;
};

export const getIsProfileLoading = (state: AppStateType) => {
    return state.profilePage.isProfileLoading;
};

export const getPosts = (state: AppStateType) => {
    return state.profilePage.posts;
};

export const getNewPostText = (state: AppStateType) => {
    return state.profilePage.newPostText;
};

export const getStatus = (state: AppStateType) => {
    return state.profilePage.status;
};

export const getIsProfileDataUploadSucces = (state: AppStateType) => {
    return state.profilePage.isProfileDataUploadSucces;
};