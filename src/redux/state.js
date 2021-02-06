import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";

export const store = {
    _state: {
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
            ],
            newMessageText: '',
        },
        profilePage: {
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
    },

    _notifySubscribers() {
        console.log('no subscriber');
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._notifySubscribers = observer;
    },

    dispatch(action) {
        dialogsReducer(this._state.dialogsPage, action);
        profileReducer(this._state.profilePage, action);
        this._notifySubscribers(this._state);
    }
};
