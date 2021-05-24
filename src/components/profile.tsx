import React from 'react'; 
import {Posts} from "./post";
import {Loader} from './loader';
import { PostType, ProfileType } from '../types/types';
import {ProfileInformation} from './profile-information';

export const Profile: React.FC<ProfilePropsType> = (props) => {
    const {posts, newPostText, onUpdatePostText, addPost, currentProfile, 
        isProfileLoading, status, updateProfileStatus, updatePhoto, 
        isOwner, updateProfileInfoThunkCreator, isProfileDataUploadSucces} = props;
    
    const onTextChange = (evt: any) => {
        const text = evt.target.value;
        onUpdatePostText(text);
    };

    const onSendButtonClick = () => {
        addPost();
    };

    return (
        <div className="content">
            {isProfileLoading ? <Loader/> : <ProfileInformation currentProfile={currentProfile} status={status} updateProfileStatus={updateProfileStatus} updatePhoto={updatePhoto} isOwner={isOwner} updateProfileInfoThunkCreator={updateProfileInfoThunkCreator} isProfileDataUploadSucces={isProfileDataUploadSucces}/>}
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
        </div>
    );
};

type ProfilePropsType = {
    currentProfile: ProfileType,
    status: string,
    updateProfileStatus: (status: string) => void,
    updatePhoto: (newPhoto: any) => void
    isOwner: boolean,
    updateProfileInfoThunkCreator: (profileData: any, setStatus: any) => void ,
    isProfileDataUploadSucces: boolean,
    posts: Array<PostType>
    newPostText: string,
    onUpdatePostText: (text: string) => void,
    addPost: () => void,
    isProfileLoading: boolean
};

