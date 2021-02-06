import React from 'react';
import {Message} from "./message";
import {Dialog} from "./dialog";

export const Dialogs = (props) => {
    const {dialogsName, messages, newMessageText, onMessageUpdate, onMessageSendButtonClick} = props;

    const onTextChange = (evt) => {
        const text = evt.target.value;
        onMessageUpdate(text);
    }

    const onSendButtonClick = () => {
        onMessageSendButtonClick()
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
                        onChange={onTextChange}
                    >
                    </textarea>
                    <button
                        className="messages__send-button"
                        onClick={onSendButtonClick}
                    >
                        Send new message
                    </button>
                </div>

            </div>

        </div>
    );
};