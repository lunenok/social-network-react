import { ThunkAction } from 'redux-thunk';
import {setProfile, getUserStatus, updateStatus, uploadPhoto, uploadProfileData} from '../api/api';
import { PostType, ProfileType } from '../types/types';
import { AppStateType } from './store';

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_CURRENT_PROFILE = 'SET_CURRENT_PROFILE';
const SET_PROFILE_LOADING_STATE = 'SET_PROFILE_LOADING_STATE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';
const UPLOAD_PHOTO = 'UPLOAD_PHOTO';
const UPLOAD_PROFILE_INFO = 'UPLOAD_PROFILE_INFO';



const initialState =  {
    currentProfile: {} as ProfileType,
    isProfileLoading: true,
    isProfileDataUploadSucces: false,
    status: '',
    posts: [
        {
            id: 1,
            text: 'Hey, why nobody love me?',
            likes: 10
        },
        {
            id: 2,
            text: 'It\'s our new program!',
            likes: 2
        }
    ] as Array<PostType>,
        newPostText: ''
};

type InitialState = typeof initialState;
type ActionsType = UpdatePostActionType | SetCurrentProfileActionType | SetProfileLoadingStateActionType |
    SetProfileStatusActionType | UploadPhotoActionType | UploadProfileDataActionType | AddPostActionType

export const profileReducer = (state = initialState, action: ActionsType): InitialState => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 3, text: state.newPostText, likes: 0}]
            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_CURRENT_PROFILE:
            return {
                ...state,
                currentProfile: action.currentProfile
            }
        case SET_PROFILE_LOADING_STATE:
            return {
                ...state,
                isProfileLoading: action.isProfileLoading
            }
        case SET_PROFILE_STATUS:
            return {
                ...state,
                status: action.status
            }
        case UPLOAD_PHOTO: 
            return {
                ...state,
                currentProfile: {...state.currentProfile, photos: action.photos}
            }
        case UPLOAD_PROFILE_INFO:
            return {
                ...state,
                isProfileDataUploadSucces: action.isProfileDataUploadSucces
            }
        default:
            return state
    }
};

type UpdatePostActionType = {
    type: typeof UPDATE_POST_TEXT,
    newText: string
}

export const updatePostActionCreator = (text: string): UpdatePostActionType => ({
    type: UPDATE_POST_TEXT,
    newText: text
});

type AddPostActionType = {
    type: typeof ADD_POST
};

export const addPostActionCreator = (): AddPostActionType => ({
    type: ADD_POST
});

type SetCurrentProfileActionType = {
    type: typeof SET_CURRENT_PROFILE,
    currentProfile: ProfileType
};

const setCurrentProfileCreator = (profile: ProfileType): SetCurrentProfileActionType => ({
    type: SET_CURRENT_PROFILE,
    currentProfile: profile
});

type SetProfileLoadingStateActionType = {
    type: typeof SET_PROFILE_LOADING_STATE,
    isProfileLoading: boolean
};

const setProfileLoadingStateCreator = (isLoading: boolean): SetProfileLoadingStateActionType => ({
   type: SET_PROFILE_LOADING_STATE,
   isProfileLoading: isLoading
});

type SetProfileStatusActionType = {
    type: typeof SET_PROFILE_STATUS,
    status: string
};

const setProfileStatus = (status: string): SetProfileStatusActionType => ({
    type: SET_PROFILE_STATUS,
    status: status
});

type UploadPhotoActionType = {
    type: typeof UPLOAD_PHOTO,
    photos: any
};

const uploadPhotoCreator = (photos: any): UploadPhotoActionType => ({
    type: UPLOAD_PHOTO,
    photos: photos
});

type UploadProfileDataActionType = {
    type: typeof UPLOAD_PROFILE_INFO,
    isProfileDataUploadSucces: boolean
}

const uploadProfileDataCreator = (uploadStatus: boolean): UploadProfileDataActionType => ({
    type: UPLOAD_PROFILE_INFO,
    isProfileDataUploadSucces: uploadStatus
});

export const setProfileThunkCreator = (userId: number | null): ThunkAction<void, AppStateType, unknown, ActionsType> => { // Тут надо пофиксить, null быть не может, будет падать
    return async (dispatch) => {
        dispatch(setProfileLoadingStateCreator(true));
        const response = await setProfile(userId);
        dispatch(setCurrentProfileCreator(response.data));
        dispatch(setProfileLoadingStateCreator(false));
    };
};

export const setProfileStatusThunkCreator = (userId: number): ThunkAction<void, AppStateType, unknown, ActionsType> => {
    return async (dispatch) => {
        const response = await getUserStatus(userId);
        dispatch(setProfileStatus(response.data));
    };
};

export const updateProfileStatusThunkCreator = (status: string): ThunkAction<void, AppStateType, unknown, ActionsType> => {
    return async (dispatch) => {
        const response = await updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setProfileStatus(status));
        };
    };
};

export const updatePhotoThunkCreator = (photo: any): ThunkAction<void, AppStateType, unknown, ActionsType> => {
    return async (dispatch) => {
        const response = await uploadPhoto(photo);
        if (response.data.resultCode === 0) {
            dispatch(uploadPhotoCreator(response.data.data.photos));
        };
    };
};

export const updateProfileInfoThunkCreator = (profileData: ProfileType, setStatus: any): ThunkAction<void, AppStateType, unknown, ActionsType> => {
    return async (dispatch, getState) => {
        dispatch(uploadProfileDataCreator(false));
        const userId = getState().authData.id;
        const response = await uploadProfileData(profileData);
        if (response.data.resultCode === 0) {
            dispatch(setProfileThunkCreator(userId));
            dispatch(uploadProfileDataCreator(true));
        } else {
            setStatus(response.data.messages);
        };
    }
};