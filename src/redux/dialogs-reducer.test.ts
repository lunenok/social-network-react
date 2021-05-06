import { DialogNameType, MessageType } from '../types/types';
import {dialogsReducer} from './dialogs-reducer';
import {sendMessageCreator} from './dialogs-reducer';

const mockState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Are you here?'}
    ] as Array<MessageType>,
    dialogsName: [
        {id: 1, name: 'Anya'},
        {id: 2, name: 'Tanya'},
        {id: 3, name: 'Elena'},
        {id: 4, name: 'Masha'},
        {id: 5, name: 'Liza'}
    ] as Array<DialogNameType>
};


it('should message send correctly', () => {
    const action = 'How old are you?';
    const newState = dialogsReducer(mockState, sendMessageCreator(action));
    expect(newState.messages[3]).toEqual({id: 4, message: 'How old are you?'});
});
