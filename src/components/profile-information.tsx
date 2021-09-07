import { useState } from "react";
import { ProfileType } from "../types/types";
import {ProfileStatus} from './profile-status';
import {ProfileEdit} from './profile-edit';
import {ProfileDescription} from './profile-description';
import { Button } from "antd";

export const ProfileInformation: React.FC<ProfileInformationPropsType> = ({currentProfile, status, updateProfileStatus, updatePhoto, isOwner, updateProfileInfoThunkCreator, isProfileDataUploadSucces}) => {

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
                {isOwner && <Button onClick={()=>{setEditMode(true)}} type='primary'>Edit</Button>}
            </div>
            <div className="profile__info">
                <div className="profile__name">
                    {currentProfile.fullName}
                </div>
                <ProfileStatus status={status} updateProfileStatus={updateProfileStatus} isOwner={isOwner}/>
                {editMode ? <ProfileEdit currentProfile={currentProfile} updateProfileInfoThunkCreator={updateProfileInfoThunkCreator} setEditMode={setEditMode} isProfileDataUploadSucces={isProfileDataUploadSucces}/> : <ProfileDescription currentProfile={currentProfile}/>}
            </div>
        </div>
    )
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