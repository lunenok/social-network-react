const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state
        case SEND_MESSAGE:
            const nextId = state.messages.length + 1;
            const newMessage = {
                id: nextId,
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state
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