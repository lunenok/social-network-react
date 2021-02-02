import React from 'react';
import {Message} from "./message";
import {Dialog} from "./dialog";


export const Dialogs = (props) => {
    const {dialogsName, messages} = props;

    return (
        <div className="dialogs__wrapper">
            <div className="dialogs__list">
                {dialogsName.map((name) =>
                    <Dialog key={name.id} id={name.id} name={name.name}/>
                )}
            </div>
            <div className="messages">
                {messages.map((message) =>
                    <Message key={message.id} message={message.message}/>
                )}
            </div>
        </div>
    );
};