import {
    addPostActionCreator,
    updatePostActionCreator,
    setProfileThunkCreator,
    setProfileStatusThunkCreator,
    updateProfileStatusThunkCreator
} from "../redux/profile-reducer";
import {Profile} from "./profile";
import {connect} from 'react-redux';
import * as React from "react";
import {withRouter} from "react-router";

class ProfileComponent extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId
        this.props.setCurrentProfile(userId);
        this.props.setProfileStatus(userId);
    }

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
        status: state.profilePage.status
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
        }
    }; 
};

const withRouterProfileContainer = withRouter(ProfileComponent);

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouterProfileContainer);