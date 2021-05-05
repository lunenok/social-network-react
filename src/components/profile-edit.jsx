import React from 'react';
import { Formik, Field, Form } from 'formik';
import {replaceNull} from './../utils';

export const ProfileEdit = ({currentProfile, updateProfileInfoThunkCreator, setEditMode, isProfileDataUploadSucces}) => {
    const initialValues = replaceNull(currentProfile);

    const onFormSubmit = (values, {setStatus}) => {
        updateProfileInfoThunkCreator(values, setStatus);
        if (isProfileDataUploadSucces) {
            setEditMode(false);
        };
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
        {({errors, touched, isValidating, status}) => (
            <Form className='profile__edit-wrapper' >
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
                {status && <span className='login__error'>{status}</span>}
                <button className='profile__edit-button' type='submit'>Submit</button>
            </Form>
        )}
    </Formik>
    )
}