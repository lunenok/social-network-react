import {setProfile, getUserStatus, updateStatus, uploadPhoto, uploadProfileData} from './../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_CURRENT_PROFILE = 'SET_CURRENT_PROFILE';
const SET_PROFILE_LOADING_STATE = 'SET_PROFILE_LOADING_STATE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';
const UPLOAD_PHOTO = 'UPLOAD_PHOTO';
const UPLOAD_PROFILE_INFO = 'UPLOAD_PROFILE_INFO';

const initialState =  {
    currentProfile: {},
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
    ],
        newPostText: ''
};

export const profileReducer = (state = initialState, action) => {
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

export const updatePostActionCreator = (text) => ({
    type: UPDATE_POST_TEXT,
    newText: text
});

export const addPostActionCreator = () => ({
    type: ADD_POST
});

const setCurrentProfileCreator = (profile) => ({
    type: SET_CURRENT_PROFILE,
    currentProfile: profile
});

const setProfileLoadingStateCreator = (isLoading) => ({
   type: SET_PROFILE_LOADING_STATE,
   isProfileLoading: isLoading
});

const setProfileStatus = (status) => ({
    type: SET_PROFILE_STATUS,
    status: status
});

const uploadPhotoCreator = (photos) => ({
    type: UPLOAD_PHOTO,
    photos: photos
});

const uploadPrfileDataCreator = (status) => ({
    type: UPLOAD_PROFILE_INFO,
    isProfileDataUploadSucces: status
});

export const setProfileThunkCreator = (userId) => {
    return async (dispatch) => {
        dispatch(setProfileLoadingStateCreator(true));
        const response = await setProfile(userId);
        dispatch(setCurrentProfileCreator(response.data));
        dispatch(setProfileLoadingStateCreator(false));
    };
};

export const setProfileStatusThunkCreator = (userId) => {
    return async (dispatch) => {
        const response = await getUserStatus(userId);
        dispatch(setProfileStatus(response.data));
    };
};

export const updateProfileStatusThunkCreator = (status) => {
    return async (dispatch) => {
        const response = await updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setProfileStatus(status));
        };
    };
};

export const updatePhotoThunkCreator = (photo) => {
    return async (dispatch) => {
        const response = await uploadPhoto(photo);
        if (response.data.resultCode === 0) {
            dispatch(uploadPhotoCreator(response.data.data.photos));
        };
    };
};

export const updateProfileInfoThunkCreator = (profileData, setStatus) => {
    return async (dispatch, getState) => {
        dispatch(uploadPrfileDataCreator(false));
        const userId = getState().authData.id;
        const response = await uploadProfileData(profileData);
        if (response.data.resultCode === 0) {
            dispatch(setProfileThunkCreator(userId));
            dispatch(uploadPrfileDataCreator(true));
        } else {
            setStatus(response.data.messages);
        };
    }
};