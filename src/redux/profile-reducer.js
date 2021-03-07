import {setProfile} from './../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_CURRENT_PROFILE = 'SET_CURRENT_PROFILE';
const SET_PROFILE_LOADING_STATE = 'SET_PROFILE_LOADING_STATE';

const initialState =  {
    currentProfile: {},
    isProfileLoading: true,
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

export const setCurrentProfileCreator = (profile) => ({
    type: SET_CURRENT_PROFILE,
    currentProfile: profile
});

export const setProfileLoadingStateCreator = (isLoading) => ({
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