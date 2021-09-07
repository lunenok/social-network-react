import { Col, Row, Typography } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';
import React from 'react'; 
import { ProfileType } from '../types/types';

export const ProfileDescription: React.FC<PropsType> = ({currentProfile}) => {

    return (
        <Row>
            <Col span={10}>
                <Title level={5}>Common info</Title>
                <Paragraph>
                    <Typography.Text type='secondary'>About me:</Typography.Text> {currentProfile.aboutMe ? currentProfile.aboutMe : 'no info'}
                </Paragraph>
                <Paragraph>
                    <Typography.Text type='secondary'>Looking for a job:</Typography.Text> {currentProfile.lookingForAJob ? 'yes' : 'no'}</Paragraph>
                <Paragraph>
                    <Typography.Text type='secondary'>Description for looking a job:</Typography.Text> {currentProfile.lookingForAJobDescription ? currentProfile.lookingForAJobDescription : 'no info'}
                </Paragraph>
            </Col>
            <Col offset={2} span={10}>
                <Title level={5}>Links</Title>
                <Paragraph>
                    <Typography.Text type='secondary'>Facebook:</Typography.Text> {currentProfile.contacts.facebook ? currentProfile.contacts.facebook : 'no info'}
                </Paragraph>
                <Paragraph>
                    <Typography.Text type='secondary'>Github:</Typography.Text> {currentProfile.contacts.github ? currentProfile.contacts.github : 'no info'}
                </Paragraph>
                <Paragraph>
                    <Typography.Text type='secondary'>Instagram:</Typography.Text> {currentProfile.contacts.instagram ? currentProfile.contacts.instagram : 'no info'}
                </Paragraph>
                <Paragraph>
                    <Typography.Text type='secondary'>MainLink:</Typography.Text> {currentProfile.contacts.mainLink? currentProfile.contacts.mainLink : 'no info'}
                </Paragraph>
                <Paragraph>
                    <Typography.Text type='secondary'>Twitter:</Typography.Text> {currentProfile.contacts.twitter ? currentProfile.contacts.twitter : 'no info'}
                </Paragraph>
                <Paragraph>
                    <Typography.Text type='secondary'>Vk:</Typography.Text> {currentProfile.contacts.vk ? currentProfile.contacts.vk : 'no info'}
                </Paragraph>
                <Paragraph>
                    <Typography.Text type='secondary'>Website:</Typography.Text> {currentProfile.contacts.website ? currentProfile.contacts.website : 'no info'}
                </Paragraph>
                <Paragraph>
                    <Typography.Text type='secondary'>Youtube:</Typography.Text> {currentProfile.contacts.youtube ? currentProfile.contacts.youtube : 'no info'}
                </Paragraph>
            </Col>
        </Row>
    )
};

type PropsType = {
    currentProfile: ProfileType;
}