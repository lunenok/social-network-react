import React from 'react';
import {Message} from "./message";
import {Dialog} from "./dialog";
import { Redirect } from 'react-router';
import { Formik, Field, Form } from 'formik';

export const Dialogs = (props) => {
    const {dialogsName, messages, onMessageSendButtonClick} = props;

    const onSendButtonClick = (values) => {
        onMessageSendButtonClick(values.message);
    }

    const initialValues = {
        message: ''
    };

    if (!props.isAuth) return <Redirect to='/login'/>

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