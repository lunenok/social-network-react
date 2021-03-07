const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
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
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText,
            }
        case SEND_MESSAGE:
            const nextId = state.messages.length + 1;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: nextId, message: state.newMessageText}]
            }
        default:
            return state
    }
}

export const updateMessageTextCreator = (text) => ({
    type: UPDATE_MESSAGE_TEXT,
    newMessageText: text
});

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
});
