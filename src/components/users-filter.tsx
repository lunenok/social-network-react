import React from 'react';
import { Formik, Field, Form } from 'formik';
import { FilterType } from '../redux/users-reducer';

type PropsType = {
    onPageClick: (page: number, usersToShow: number, defaultFilter: FilterType) => void;
    currentFilter: FilterType;
    usersToShow: number;
}

export const UsersFilter: React.FC<PropsType> = ({onPageClick, usersToShow, currentFilter}) => {

    const initialValues = {
        value: currentFilter.value,
        followed: JSON.stringify(currentFilter.followed)
    };

    type FormFilterType = typeof initialValues;

    const onSubmit = (values: FormFilterType) => {
        const filter: FilterType = {
            value: values.value,
            followed: values.followed === 'null' ? null : values.followed === 'true' ? true : false
        }
        onPageClick(1, usersToShow, filter);
    };

    return (
        <React.Fragment>
            <Formik initialValues={initialValues} onSubmit={onSubmit} enableReinitialize>
            {({errors, touched, isValidating, status}) => (
                    <Form className='filter__wrapper'>
                        <label className='filter__label' htmlFor='value'>Find: </label>
                        <Field className='filter__input' id='value' name='value' type='text' placeholder='Name...'/>
                        <Field component='div'>
                            Choose only:
                            <label>
                              <Field type="radio" name="followed" value="null"/>
                              Everybody
                            </label>
                            <label>
                              <Field type="radio" name="followed" value="true"/>
                              Followed
                            </label>
                            <label>
                              <Field type="radio" name="followed" value="false"/>
                              Not followed
                            </label>
                        </Field>
                        <button className='filter__button' type='submit'>Find developers</button>
                    </Form>
                )}
            </Formik>
        </React.Fragment>
    )
};