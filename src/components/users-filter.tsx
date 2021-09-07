import React from 'react';
import { Formik } from 'formik';
import { FilterType } from '../redux/users-reducer';
import {SubmitButton, Input, Form, FormItem, Radio } from 'formik-antd';
import Title from 'antd/lib/typography/Title';

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
            <Title level={3}>Filter developers</Title>
            <Formik initialValues={initialValues} onSubmit={onSubmit} enableReinitialize>
            {({errors, touched, isValidating, status}) => (
                    <Form>
                        <FormItem name='value' label='Find:'>
                            <Input name="value" placeholder="name"></Input>
                        </FormItem>
                        <FormItem name='choose'>
                            <Radio.Group name='followed'>
                                <Radio name='followed' value={'null'}>Everybody</Radio>
                                <Radio name='followed' value={'true'}>Followed</Radio>
                                <Radio name='followed' value={'false'}>Not followed</Radio>
                            </Radio.Group>
                        </FormItem>
                        <SubmitButton className='filter__button'>Find developers</SubmitButton>
                    </Form>
                )}
            </Formik>
        </React.Fragment>
    )
};