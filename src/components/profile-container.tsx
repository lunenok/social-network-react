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

type DispatchPropsType = {
    onUpdatePostText: (text: string) => void,
    addPost: () => void,
    setCurrentProfile: (profile: number) => void,
    setProfileStatus: (userId: number) => void,
    updateProfileStatus: (status: string) => void,
    updatePhoto: (photo: any) => void ,
    updateProfileInfoThunkCreator: (profileData: any, setStatus: any) => void 
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

export const ProfileComponent: React.FC<StatePropsType & DispatchPropsType & RouteComponentProps<PathParamsPropsType>> = (props) => {

    const  {isProfileLoading, currentProfile, posts, newPostText, 
        onUpdatePostText, addPost, status, setCurrentProfile, 
        setProfileStatus, updateProfileStatus, updatePhoto, 
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
                setCurrentProfile(userId);
                setProfileStatus(userId);
            };
        };

        refreshProfile();
    }, [props.authorizedUserId, props.history, props.match.params.userId, setCurrentProfile, setProfileStatus]);

    return (
        <Profile
            isProfileLoading={isProfileLoading}
            currentProfile={currentProfile}
            posts={posts}
            newPostText={newPostText}
            onUpdatePostText={onUpdatePostText}
            addPost={addPost}
            status={status}
            updateProfileStatus={updateProfileStatus}
            updatePhoto={updatePhoto}
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

const mapDispatchToProps = (dispatch: any): DispatchPropsType => {
    return {
        onUpdatePostText: (text: string) => {
            dispatch(updatePostActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        setCurrentProfile: (profile: number) => {
            dispatch(setProfileThunkCreator(profile))
        },
        setProfileStatus: (userId: number) => {
            dispatch(setProfileStatusThunkCreator(userId))
        },
        updateProfileStatus: (status: string) => {
            dispatch(updateProfileStatusThunkCreator(status))
        },
        updatePhoto: (photo: any) => {
            dispatch(updatePhotoThunkCreator(photo))
        },
        updateProfileInfoThunkCreator: (profileData: ProfileType, setStatus: any) => {
            dispatch(updateProfileInfoThunkCreator(profileData, setStatus))
        }
    }; 
};

const withRouterProfileContainer = withRouter(ProfileComponent);

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouterProfileContainer);