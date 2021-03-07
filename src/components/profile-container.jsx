import {
    addPostActionCreator,
    setCurrentProfileCreator,
    setProfileLoadingStateCreator,
    updatePostActionCreator,
    setProfileThunkCreator
} from "../redux/profile-reducer";
import {Profile} from "./profile";
import {connect} from 'react-redux';
import * as React from "react";
import {withRouter} from "react-router";

class ProfileComponent extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId
        this.props.setCurrentProfile(userId);
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
                setCurrentProfile={this.props.setCurrentProfile}
            />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        currentProfile: state.profilePage.currentProfile,
        isProfileLoading: state.profilePage.isProfileLoading,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
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
    };
};

const withRouterProfileContainer = withRouter(ProfileComponent);

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouterProfileContainer);