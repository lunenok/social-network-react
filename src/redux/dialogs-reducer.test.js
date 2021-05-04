import {dialogsReducer} from './dialogs-reducer';
import {sendMessageCreator} from './dialogs-reducer';

const mockState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Are you here?'}
    ],
};

it('should message send correctly', () => {
    const action = 'How old are you?';
    const newState = dialogsReducer(mockState, sendMessageCreator(action));
    expect(newState.messages[3]).toEqual({id: 4, message: 'How old are you?'});
});
