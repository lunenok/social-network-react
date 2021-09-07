import React from 'react';
import {Message} from "./message";
import {Dialog} from "./dialog";
import {sendMessageAction} from '../redux/dialogs-reducer';
import { Formik, Field, Form } from 'formik';
import {getMessages, getDialogsName} from './../redux/dialogs-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { withAuthComponent } from '../hocs/withAuthComponent';
import { Content } from 'antd/lib/layout/layout';
import { Button, Col, Row } from 'antd';
import Title from 'antd/lib/typography/Title';

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
        <Content style={{background: 'white'}}>
            <Row style={{marginTop: '24px'}}>
                <Col offset={1} span={2}>
                    <Title level={3}>Chats</Title>
                    {dialogsName.map((name) =>
                        <Dialog key={name.id} id={name.id} name={name.name}/>
                    )}
                </Col>
                <Col offset={1} span={8}>
                    <Title level={3}>Messages</Title>
                    <div style={{marginBottom: '24px'}}>
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
                                <Button htmlType='submit'>Send new message</Button>
                            </Form>
                        </Formik>
                    </div>
                </Col>
                {/* <div className="messages"> */}

                {/* </div> */}
            </Row>
        </Content>
       

    );
};

export const Dialogs = withAuthComponent(DialogsComponent) as React.FC;