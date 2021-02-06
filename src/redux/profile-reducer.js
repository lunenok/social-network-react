const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

export const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 3,
                text: state.newPostText,
                likes: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            return state
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