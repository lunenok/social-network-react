import {
    addPostActionCreator,
    updatePostActionCreator,
    setProfileThunkCreator,
    setProfileStatusThunkCreator,
    updateProfileStatusThunkCreator,
    updatePhotoThunkCreator,
    updateProfileInfoThunkCreator
} from "../redux/profile-reducer";
import {Profile} from "./profile";
import {connect} from 'react-redux';
import * as React from "react";
import {withRouter, RouteComponentProps} from "react-router";
import { AppStateType } from "../redux/store";
import { PostType, ProfileType } from "../types/types";

export const ProfileComponent: React.FC<StatePropsType & DispatchPropsType & RouteComponentProps<PathParamsPropsType>> = (props) => {

    const  {isProfileLoading, currentProfile, posts, newPostText, 
        updatePostActionCreator, addPostActionCreator, status, setProfileThunkCreator, 
        setProfileStatusThunkCreator, updateProfileStatusThunkCreator, updatePhotoThunkCreator, 
        updateProfileInfoThunkCreator, isProfileDataUploadSucces} = props;

    React.useEffect(() => {
        const refreshProfile =  () => {
            let userId: number | null = parseInt(props.match.params.userId);
            if (!userId) {
                userId = props.authorizedUserId;
                if (!userId) {
                    props.history.push('/login');
                    return
                };
            };


            if (!userId) {
                console.error("ID should exists in URI params or in state ('authorizedUserId')");
            } else {
                setProfileThunkCreator(userId);
                setProfileStatusThunkCreator(userId);
            };
        };

        refreshProfile();
    }, [props.authorizedUserId, props.history, props.match.params.userId, setProfileThunkCreator, setProfileStatusThunkCreator]);

    return (
        <Profile
            isProfileLoading={isProfileLoading}
            currentProfile={currentProfile}
            posts={posts}
            newPostText={newPostText}
            onUpdatePostText={updatePostActionCreator}
            addPost={addPostActionCreator}
            status={status}
            updateProfileStatus={updateProfileStatusThunkCreator}
            updatePhoto={updatePhotoThunkCreator}
            isOwner={!props.match.params.userId}
            updateProfileInfoThunkCreator={updateProfileInfoThunkCreator}
            isProfileDataUploadSucces={isProfileDataUploadSucces}
        />
    )
};

const mapStateToProps = (state: AppStateType) => {
    return {
        currentProfile: state.profilePage.currentProfile,
        isProfileLoading: state.profilePage.isProfileLoading,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        status: state.profilePage.status,
        authorizedUserId: state.authData.id,
        isProfileDataUploadSucces: state.profilePage.isProfileDataUploadSucces
    };
};

const mapDispatchToProps = {
    updatePostActionCreator,
    addPostActionCreator,
    setProfileThunkCreator,
    setProfileStatusThunkCreator,
    updateProfileStatusThunkCreator,
    updatePhotoThunkCreator,
    updateProfileInfoThunkCreator
};

const withRouterProfileContainer = withRouter(ProfileComponent);

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouterProfileContainer);

type DispatchPropsType = {
    updatePostActionCreator: (text: string) => void,
    addPostActionCreator: () => void,
    setProfileThunkCreator: (profile: number) => void,
    setProfileStatusThunkCreator: (userId: number) => void,
    updateProfileStatusThunkCreator: (status: string) => void,
    updatePhotoThunkCreator: (photo: File) => void ,
    updateProfileInfoThunkCreator: (profileData: ProfileType, setStatus: any) => void 
};

type StatePropsType = {
    currentProfile: ProfileType,
    isProfileLoading: boolean,
    posts: Array<PostType>,
    newPostText: string
    status: string,
    authorizedUserId: number | null,
    isProfileDataUploadSucces: boolean
};

type PathParamsPropsType = {
    userId: string
};