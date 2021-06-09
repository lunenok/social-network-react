import React from 'react'; 
import {Posts} from "./post";
import {Loader} from './loader';
import {ProfileInformation} from './profile-information';
import { useDispatch, useSelector } from 'react-redux';
import { addPostActionCreator, updatePhotoThunkCreator, updatePostActionCreator, updateProfileInfoThunkCreator, updateProfileStatusThunkCreator } from '../redux/profile-reducer';
import { getCurrentProfile, getIsProfileDataUploadSucces, getIsProfileLoading, getNewPostText, getPosts, getStatus } from '../redux/profile-selectors';
import { Content } from 'antd/lib/layout/layout';
import { Col } from 'antd';

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
        <Content>
            {isProfileLoading ? <Loader/> : <ProfileInformation currentProfile={currentProfile} status={status} updateProfileStatus={updateProfileStatus} updatePhoto={updatePhoto} isOwner={isOwner} updateProfileInfoThunkCreator={updateProfileInfo} isProfileDataUploadSucces={isProfileDataUploadSucces}/>}
            <div className="posts">
                <h2 className="posts__title">
                    My posts
                </h2>
                <div className="posts__new">
                    <textarea
                        value={newPostText}
                        onChange={onTextChange}
                        className="posts__input"
                        placeholder="Your new post..."
                    />
                    <button
                        onClick={onSendButtonClick}
                        className="posts__button"
                    >Send</button>
                </div>
                <ul className="posts__list">
                    {posts.map((message, index) => {
                        return <Posts key={index} text={message}/>
                    }
                    )}
                </ul>
            </div>
        </Content>
    );
};

type ProfilePropsType = {
    isOwner: boolean,
};

