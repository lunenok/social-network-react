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
import {withRouter} from "react-router";

export const ProfileComponent = (props) => {

    const  {isProfileLoading, currentProfile, posts, newPostText, 
        onUpdatePostText, addPost, status, setCurrentProfile, 
        setProfileStatus, updateProfileStatus, updatePhoto, 
        updateProfileInfoThunkCreator, isProfileDataUploadSucces} = props;

    React.useEffect(() => {
        const refreshProfile =  () => {
            let userId = props.match.params.userId
            if (!userId) {
                userId = props.authorizedUserId;
                if (!userId) {
                    props.history.push('/login');
                    return
                };
            };
            setCurrentProfile(userId);
            setProfileStatus(userId);
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
            setCurrentProfile={setCurrentProfile}
            setProfileStatus={setProfileStatus}
            updateProfileStatus={updateProfileStatus}
            updatePhoto={updatePhoto}
            isOwner={!props.match.params.userId}
            updateProfileInfoThunkCreator={updateProfileInfoThunkCreator}
            isProfileDataUploadSucces={isProfileDataUploadSucces}
        />
    )
};

const mapStateToProps = (state) => {
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

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdatePostText: (text) => {
            dispatch(updatePostActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        setCurrentProfile: (profile) => {
            dispatch(setProfileThunkCreator(profile))
        },
        setProfileStatus: (userId) => {
            dispatch(setProfileStatusThunkCreator(userId))
        },
        updateProfileStatus: (status) => {
            dispatch(updateProfileStatusThunkCreator(status))
        },
        updatePhoto: (photo) => {
            dispatch(updatePhotoThunkCreator(photo))
        },
        updateProfileInfoThunkCreator: (profileData, setStatus) => {
            dispatch(updateProfileInfoThunkCreator(profileData, setStatus))
        }
    }; 
};

const withRouterProfileContainer = withRouter(ProfileComponent);

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouterProfileContainer);