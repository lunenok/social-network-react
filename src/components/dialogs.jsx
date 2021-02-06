import React from 'react';
import {Message} from "./message";
import {Dialog} from "./dialog";
import {updateMessageTextCreator, sendMessageCreator} from './../redux/dialogs-reducer';


export const Dialogs = (props) => {
    const {dialogsName, messages, newMessageText} = props;

    const onMessageUpdate = (evt) => {
        const text = evt.target.value;
        props.dispatch(updateMessageTextCreator(text));
    }

    const onMessageSendButtonClick = () => {
        props.dispatch(sendMessageCreator());
    }

    return (
        <div className="dialogs__wrapper">
            <div className="dialogs__list">
                {dialogsName.map((name) =>
                    <Dialog key={name.id} id={name.id} name={name.name}/>
                )}
            </div>
            <div className="messages">
                <div className="messages__container">
                    {messages.map((message) =>
                        <Message key={message.id} message={message.message}/>
                    )}
                </div>
                <div className="messages__new-container">
                    <textarea
                        className="messages__input"
                        placeholder="Write your message"
                        value={newMessageText}
                        onChange={onMessageUpdate}
                    >
                    </textarea>
                    <button
                        className="messages__send-button"
                        onClick={onMessageSendButtonClick}
                    >
                        Send new message
                    </button>
                </div>

            </div>

        </div>
    );
};