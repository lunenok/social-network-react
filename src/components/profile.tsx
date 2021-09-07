import React from 'react'; 
// import {Posts} from "./post";
import {Loader} from './loader';
import {ProfileInformation} from './profile-information';
import { useDispatch, useSelector } from 'react-redux';
import { addPostActionCreator, updatePhotoThunkCreator, updatePostActionCreator, updateProfileInfoThunkCreator, updateProfileStatusThunkCreator } from '../redux/profile-reducer';
import { getCurrentProfile, getIsProfileDataUploadSucces, getIsProfileLoading, getNewPostText, getPosts, getStatus } from '../redux/profile-selectors';
import { Content } from 'antd/lib/layout/layout';
import { Avatar, Button, Col, List, Row } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import Title from 'antd/lib/typography/Title';

export const Profile: React.FC<ProfilePropsType> = (props) => {

    const {isOwner } = props;

    const currentProfile = useSelector(getCurrentProfile);
    const isProfileLoading = useSelector(getIsProfileLoading);
    const posts = useSelector(getPosts);
    const newPostText = useSelector(getNewPostText);
    const status = useSelector(getStatus);
    const isProfileDataUploadSucces = useSelector(getIsProfileDataUploadSucces);

    const dispatch = useDispatch();

    const onUpdatePostText = (text: string) => {
        dispatch(updatePostActionCreator(text));
    };

    const addPost = () => {
        dispatch(addPostActionCreator());
    };
    const updateProfileStatus = (status: string) => {
        dispatch(updateProfileStatusThunkCreator(status));
    };
    const updatePhoto = (photo: any) => {
        dispatch(updatePhotoThunkCreator(photo))
    };
    const updateProfileInfo = (profileData: any, setStatus: any) => {
        dispatch(updateProfileInfoThunkCreator(profileData, setStatus))
    };

    const onTextChange = (evt: any) => {
        const text = evt.target.value;
        onUpdatePostText(text);
    };

    const onSendButtonClick = () => {
        addPost();
    };

    return (
        <Content style={{background: 'white'}}>
            {isProfileLoading ? <Loader/> : <ProfileInformation currentProfile={currentProfile} status={status} updateProfileStatus={updateProfileStatus} updatePhoto={updatePhoto} isOwner={isOwner} updateProfileInfoThunkCreator={updateProfileInfo} isProfileDataUploadSucces={isProfileDataUploadSucces}/>}
            <Row>
                <Col span={24}>
                    <Title level={3}>
                        My posts
                    </Title>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <TextArea
                        value={newPostText}
                        onChange={onTextChange}
                        autoSize={true}
                        showCount
                        placeholder="Your new post..."
                        style={{marginBottom: '8px'}}
                    />
                    <Button type='primary' onClick={onSendButtonClick}>Send</Button>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <List
                        itemLayout="horizontal"
                        dataSource={posts}
                        renderItem={item => (
                          <List.Item>
                            <List.Item.Meta
                              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                              description={item.text}
                            />
                          </List.Item>
                        )}
                      />
                </Col>
            </Row>
        </Content>
    );
};

type ProfilePropsType = {
    isOwner: boolean,
};

