import React from 'react';
import {Message} from "./message";
import {Dialog} from "./dialog";
import { Redirect } from 'react-router';
import { Formik, Field, Form } from 'formik';
import {DialogNameType, MessageType} from './../types/types';

export const Dialogs: React.FC<PropsType> = (props) => {
    const {dialogsName, messages, isAuth, sendMessageCreator} = props;
    
    type ValueType = {
        message: string
    };

    const onSendButtonClick = (values: ValueType) => {
        sendMessageCreator(values.message);
    }

    const initialValues = {
        message: ''
    };

    if (!isAuth) return <Redirect to='/login'/>

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
                        <Message key={message.id} id={message.id} message={message.message}/>
                    )}
                </div>
                <div className="messages__new-container">
                    <Formik initialValues={initialValues} onSubmit={onSendButtonClick}>
                        <Form>
                            <Field
                                className='messages__input'
                                placeholder='Write your message'
                                name='message'
                            >
                            </Field>
                            <button
                                className='messages__send-button'
                                type='submit'
                            >
                                Send new message
                            </button>
                        </Form>
                    </Formik>
                </div>
            </div>

        </div>
    );
};

type PropsType = {
    dialogsName: Array<DialogNameType>;
    messages: Array<MessageType>;
    isAuth: boolean;
    sendMessageCreator: (values: string) => void;
};
