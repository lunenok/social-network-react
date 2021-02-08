const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const initialState =  {
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