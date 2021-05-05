import {
    addPostActionCreator,
    updatePostActionCreator,
    setProfileThunkCreator,
    setProfileStatusThunkCreator,
    updateProfileStatusThunkCreator,
    updatePhotoThunkCreator
} from "../redux/profile-reducer";
import {Profile} from "./profile";
import {connect} from 'react-redux';
import * as React from "react";
import {withRouter} from "react-router";

class ProfileComponent extends React.Component {
    _refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            };
        };
        this.props.setCurrentProfile(userId);
        this.props.setProfileStatus(userId);
    };

    componentDidMount() {
        this._refreshProfile();
    };

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this._refreshProfile();
        };
    };

    render() {
        return (
            <Profile
                isProfileLoading={this.props.isProfileLoading}
                currentProfile={this.props.currentProfile}
                posts={this.props.posts}
                newPostText={this.props.newPostText}
                onUpdatePostText={this.props.onUpdatePostText}
                addPost={this.props.addPost}
                status={this.props.status}
                setCurrentProfile={this.props.setCurrentProfile}
                setProfileStatus={this.props.setProfileStatus}
                updateProfileStatus={this.props.updateProfileStatus}
                updatePhoto={this.props.updatePhoto}
                isOwner={!this.props.match.params.userId}
            />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        currentProfile: state.profilePage.currentProfile,
        isProfileLoading: state.profilePage.isProfileLoading,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        status: state.profilePage.status,
        authorizedUserId: state.authData.id
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
    }; 
};

const withRouterProfileContainer = withRouter(ProfileComponent);

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouterProfileContainer);