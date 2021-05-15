import React, {useState} from 'react'; 
import {ProfileStatus} from './profile-status';
import {Posts} from "./post";
import {Loader} from './loader';
import {ProfileDescription} from './profile-description';
import {ProfileEdit} from './profile-edit';
import { PostType, ProfileType } from '../types/types';

const ProfileInformation: React.FC<ProfileInformationPropsType> = ({currentProfile, status, updateProfileStatus, updatePhoto, isOwner, updateProfileInfoThunkCreator, isProfileDataUploadSucces}) => {

    const [editMode, setEditMode] = useState(false);

    const onPhotoUpdate = (evt: any) => {
        const newPhoto = evt.target.files[0];
        updatePhoto(newPhoto);
    };

    const renderUploadButton = () => {
        if (isOwner) {
            return (
                <div>
                    <label className='profile__img-label' htmlFor='upload'>Загрузить аватар</label>
                    <input className='profile__img-button visually-hidden' onChange={onPhotoUpdate} type='file' id='upload'></input>        
                </div>
            )
        };
    };

    return (
        <div className="profile">
            <div className="profile__pic ">
                <img
                    src={currentProfile.photos.large ? currentProfile.photos.large : "https://freesvg.org/img/Linux-Avatar.png"}
                    alt="avatar"
                    width="{150}"
                    height="{150}"
                    className="profile__img"
                />
                {renderUploadButton()}
                {isOwner && <button onClick={()=>{setEditMode(true)}} className='profile__edit-button'>Редактировать профиль</button>}
            </div>
            <div className="profile__info">
                <div className="profile__name">
                    {currentProfile.fullName}
                </div>
                <ProfileStatus status={status} updateProfileStatus={updateProfileStatus}/>
                {editMode ? <ProfileEdit currentProfile={currentProfile} updateProfileInfoThunkCreator={updateProfileInfoThunkCreator} setEditMode={setEditMode} isProfileDataUploadSucces={isProfileDataUploadSucces}/> : <ProfileDescription currentProfile={currentProfile}/>}
            </div>
        </div>
    )
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

type ProfileInformationPropsType = {
    currentProfile: ProfileType;
    status: string;
    updateProfileStatus: (status: string) => void;
    updatePhoto: (newPhoto: File) => void;
    isOwner: boolean;
    updateProfileInfoThunkCreator: (profileData: any, setStatus: any) => void;
    isProfileDataUploadSucces: boolean;
};