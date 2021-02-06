import React from 'react';
import {updateMessageTextCreator, sendMessageCreator} from './../redux/dialogs-reducer';
import {Dialogs} from "./dialogs";


export const DialogsContainer = (props) => {
    const {dialogsName, messages, newMessageText} = props.store.dialogsPage;

    const onMessageUpdate = (text) => {
        props.dispatch(updateMessageTextCreator(text));
    }

    const onMessageSendButtonClick = () => {
        props.dispatch(sendMessageCreator());
    }

    return (
        <Dialogs
            dialogsName={dialogsName}
            messages={messages}
            newMessageText={newMessageText}
            onMessageUpdate={onMessageUpdate}
            onMessageSendButtonClick={onMessageSendButtonClick}
        />
    );
};
