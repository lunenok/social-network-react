import { DialogNameType,  MessageType } from './../types/types';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
    dialogsName: [
        {id: 1, name: 'Anya'},
        {id: 2, name: 'Tanya'},
        {id: 3, name: 'Elena'},
        {id: 4, name: 'Masha'},
        {id: 5, name: 'Liza'}
    ] as Array<DialogNameType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Are you here?'}
    ] as Array<MessageType>,
};

type InitialState = typeof initialState;

export const dialogsReducer = (state = initialState, action: SendMessageActionType): InitialState => {
    switch (action.type) {
        case SEND_MESSAGE:
            const nextId = state.messages.length + 1;
            return {
                ...state,
                messages: [...state.messages, {id: nextId, message: action.message}]
            }
        default:
            return state
    }
}

type SendMessageActionType = {
    type: typeof SEND_MESSAGE,
    message: string
}
export const sendMessageCreator = (message: string): SendMessageActionType => ({
    type: SEND_MESSAGE,
    message: message
});
