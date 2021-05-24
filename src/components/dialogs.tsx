import React from 'react';
import {Message} from "./message";
import {Dialog} from "./dialog";
import {sendMessageAction} from '../redux/dialogs-reducer';
import { Formik, Field, Form } from 'formik';
import {getMessages, getDialogsName} from './../redux/dialogs-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { withAuthComponent } from '../hocs/withAuthComponent';

const DialogsComponent: React.FC = () => {
    const dialogsName = useSelector(getDialogsName);
    const messages = useSelector(getMessages);

    const dispatch = useDispatch();

    const sendMessage = (values: ValueType) => {
        dispatch(sendMessageAction(values.message));
    };


    type ValueType = {
        message: string
    };

    const onSendButtonClick = (values: ValueType) => {
        dispatch(sendMessage(values))
    }

    const initialValues = {
        message: ''
    };

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

export const Dialogs = withAuthComponent(DialogsComponent) as React.FC;