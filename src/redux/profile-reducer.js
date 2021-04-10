import {setProfile, getUserStatus, updateStatus} from './../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_CURRENT_PROFILE = 'SET_CURRENT_PROFILE';
const SET_PROFILE_LOADING_STATE = 'SET_PROFILE_LOADING_STATE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

const initialState =  {
    currentProfile: {},
    isProfileLoading: true,
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
        default:
            return state
    }
}

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

export const setProfileThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(setProfileLoadingStateCreator(true));
        setProfile(userId)
            .then((response) => {
                dispatch(setCurrentProfileCreator(response.data));
                dispatch(setProfileLoadingStateCreator(false));
            });
    }
};

const setProfileStatus = (status) => ({
    type: SET_PROFILE_STATUS,
    status: status
})

export const setProfileStatusThunkCreator = (userId) => {
    return (dispatch) => {
        getUserStatus(userId)
            .then((response) => {
                dispatch(setProfileStatus(response.data));
            });
    }
};

export const updateProfileStatusThunkCreator = (status) => {
    return (dispatch) => {
        updateStatus(status)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setProfileStatus(status));
                };
            });
    }
};