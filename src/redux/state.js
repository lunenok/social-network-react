// import {renderEntireTree} from './../render';

let renderEntireTree = () => {};

export const state = {
    dialogsPage: {
        dialogsName: [
            {id: 1, name: 'Anya'},
            {id: 2, name: 'Tanya'},
            {id: 3, name: 'Elena'},
            {id: 4, name: 'Masha'},
            {id: 5, name: 'Liza'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Are you here?'}
        ]
    },
    profilePage :{
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
    }
}

export const subscribe = (observer) => {
    renderEntireTree = observer;
};

export const updatePostText = (text) => {
    state.profilePage.newPostText = text;
    renderEntireTree(state);
};

export const addPost = () => {
    const newPost = {
        id: 3,
        text: state.profilePage.newPostText,
        likes: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}