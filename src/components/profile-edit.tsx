import React from 'react';
import { Formik, Form, Field } from 'formik';
import {replaceNull} from '../utils';
import { ProfileType } from '../types/types';
import { Button, Col, Row } from 'antd';
import { Input, FormItem, Checkbox } from 'formik-antd';
import Title from 'antd/lib/typography/Title';

export const ProfileEdit: React.FC<PropsTypes> = ({currentProfile, updateProfileInfoThunkCreator, setEditMode, isProfileDataUploadSucces}) => {
    const initialValues = replaceNull(currentProfile);

    const onFormSubmit = (values: ProfileType, {setStatus}: any) => {
        updateProfileInfoThunkCreator(values, setStatus);
        if (isProfileDataUploadSucces) {
            setEditMode(false);
        };
    };

    return (
        <Row>
            <Col span={24}>
                <Title level={4}>Edit profile</Title>
                <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
                    {({errors, touched, isValidating, status}) => (
                        <Form className='profile__edit-wrapper' >
                            <Row>
                                <Col span={10}>
                                    <Title level={5}>Common info</Title>
                                    <FormItem name='fullName' label='Full name'>
                                        <Input name="fullName" placeholder="Full name" />
                                    </FormItem>
                                    <FormItem name='aboutMe' label='About me'>
                                        <Input name="aboutMe" placeholder="About me" />
                                    </FormItem>
                                    <FormItem name='lookingForAJob'>
                                        <Checkbox name="rememberMe">Looking for a job</Checkbox>
                                    </FormItem>
                                    <FormItem name='lookingForAJobDescription' label='Description for looking a job'>
                                        <Input name="lookingForAJobDescription" placeholder="Description for looking a job" />
                                    </FormItem>
                                </Col>
                                <Col offset={2} span={10}>
                                    <Title level={5}>Links</Title>
                                    <FormItem name='facebook' label='Facebook:'>
                                        <Input name='facebook' placeholder="web link" />
                                    </FormItem>
                                    <FormItem name='github' label='GitHub:'>
                                        <Input name='github' placeholder="web link" />
                                    </FormItem>
                                    <FormItem name='instagram' label='Instagram:'>
                                        <Input name='instagram' placeholder="web link" />
                                    </FormItem>
                                    <FormItem name='mainLink' label='Email:'>
                                        <Input name='mainLink' placeholder="email@example.com" />
                                    </FormItem>
                                    <FormItem name='twitter' label='Twitter:'>
                                        <Input name='twitter' placeholder="web link" />
                                    </FormItem>
                                    <FormItem name='Vk' label='Vk:'>
                                        <Input name='Vk' placeholder="web link" />
                                    </FormItem>
                                    <FormItem name='Website' label='Website:'>
                                        <Input name='Website' placeholder="web link" />
                                    </FormItem>
                                    <FormItem name='youtube' label='YouTube'>
                                        <Input name='youtube' placeholder="web link" />
                                    </FormItem>
                                </Col>

                                {/* <Col span={20}>
                                    <div className="profile__edit-container">
                                        <label className='profile__edit-label' htmlFor='fullName'>Full name</label>
                                        <Field className='profile__edit-input' id='fullName' name='fullName' type='text' placeholder='Full name' />
                                    </div>
                                    <div className="profile__edit-container">
                                        <label className='profile__edit-label' htmlFor='aboutMe'>About me</label>
                                        <Field className='profile__edit-input' id='aboutMe' name='aboutMe' type='text' placeholder='About me' />
                                    </div>
                                    <div className="profile__edit-container">
                                        <label className='profile__edit-label' htmlFor='lookingForAJob'>Looking for a job</label>
                                        <Field className='profile__edit-input' id='lookingForAJob' name='lookingForAJob' type='checkbox' />
                                    </div>

                                    <div className="profile__edit-container">
                                        <label className='profile__edit-label' htmlFor='lookingForAJobDescription'>Description for looking a job</label>
                                        <Field className='profile__edit-input' id='lookingForAJobDescription' name='lookingForAJobDescription' type='text' placeholder='Description for looking a job' />
                                    </div>

                                    <div className="profile__edit-container">
                                        <label className='profile__edit-label' htmlFor='facebook'>Facebook</label>
                                        <Field className='profile__edit-input' id='facebook' name='contacts.facebook' type='text' placeholder='Facebook link' />
                                    </div>
                                    <div className="profile__edit-container">
                                        <label className='profile__edit-label' htmlFor='github'>Github</label>
                                        <Field className='profile__edit-input' id='github' name='contacts.github' type='text' placeholder='Github link' />
                                    </div>
                                    <div className="profile__edit-container">
                                        <label className='profile__edit-label' htmlFor='instagram'>Instagram</label>
                                        <Field className='profile__edit-input' id='instagram' name='contacts.instagram' type='text' placeholder='Instagram link' />
                                    </div>
                                    <div className="profile__edit-container">
                                        <label className='profile__edit-label' htmlFor='mainLink'>Main link</label>
                                        <Field className='profile__edit-input' id='mainLink' name='contacts.mainLink' type='text' placeholder='Main link' />
                                    </div>
                                    <div className="profile__edit-container">
                                        <label className='profile__edit-label' htmlFor='twitter'>Twitter</label>
                                        <Field className='profile__edit-input' id='twitter' name='contacts.twitter' type='text' placeholder='Twitter link' />
                                    </div>
                                    <div className="profile__edit-container">
                                        <label className='profile__edit-label' htmlFor='vk'>Vk</label>
                                        <Field className='profile__edit-input' id='vk' name='contacts.vk' type='text' placeholder='Vk link' />
                                    </div>
                                    <div className="profile__edit-container">
                                        <label className='profile__edit-label' htmlFor='website'>Website</label>
                                        <Field className='profile__edit-input' id='website' name='contacts.website' type='text' placeholder='Website link' />
                                    </div>
                                    <div className="profile__edit-container">
                                        <label className='profile__edit-label' htmlFor='youtube'>Youtube</label>
                                        <Field className='profile__edit-input' id='youtube' name='contacts.youtube' type='text' placeholder='Youtube link' />
                                    </div>
                                </Col> */}
                            </Row>

                            {status && <span className='login__error'>{status}</span>}
                            <Button className='profile__edit-button' htmlType='submit'>Submit</Button>
                        </Form>
                    )}
                </Formik>
            </Col>
        </Row>
    )
};

type PropsTypes = {
    currentProfile: ProfileType,
    updateProfileInfoThunkCreator: (profileData: ProfileType, setStatus: any) => void,
    setEditMode: (editMode: boolean) => void,
    isProfileDataUploadSucces: boolean
};
