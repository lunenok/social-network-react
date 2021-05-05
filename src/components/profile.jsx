import React from 'react'; 
import {ProfileStatus} from './profile-status';
import {Posts} from "./post";
import {Loader} from './loader/loader';

const ProfileInformation = ({currentProfile, status, updateProfileStatus, updatePhoto, isOwner}) => {

    const onPhotoUpdate = (evt) => {
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
            </div>
            <div className="profile__info">
                <div className="profile__name">
                    {currentProfile.fullName}
                </div>
                <ProfileStatus status={status} updateProfileStatus={updateProfileStatus}/>
                <div className="profile__description">
                    Date of birth: 10 january
                </div>
                <div className="profile__description">
                    City: Yekaterinburg
                </div>
                <div className="profile__description">
                    URFU'15
                </div>
                <div className="profile__description">
                    Web-site: none
                </div>
            </div>
        </div>
    )
}

export const Profile = (props) => {
    const {posts, newPostText, onUpdatePostText, addPost, currentProfile, isProfileLoading, status, updateProfileStatus, updatePhoto, isOwner} = props;
    
    const onTextChange = (evt) => {
        const text = evt.target.value;
        onUpdatePostText(text);
    };

    const onSendButtonClick = () => {
        addPost();
    };

    return (
        <div className="content">
            {isProfileLoading ? <Loader/> :<ProfileInformation currentProfile={currentProfile} status={status} updateProfileStatus={updateProfileStatus} updatePhoto={updatePhoto} isOwner={isOwner}/>}
            <div className="posts">
                <h2 className="posts__title">
                    My posts
                </h2>
                <div className="posts__new">
                    <textarea
                        value={newPostText}
                        onChange={onTextChange}
                        type="text"
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