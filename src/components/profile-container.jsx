import React from 'react';
import {addPostActionCreator, updatePostActionCreator} from "../redux/profile-reducer";
import {Profile} from "./profile";

export const ProfileContainer = (props) => {
    const onUpdatePostText = (text) => {
        props.dispatch(updatePostActionCreator(text))
    };

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    return (
        <Profile
            posts={props.store.profilePage.posts}
            newPostText={props.store.profilePage.newPostText}
            onUpdatePostText={onUpdatePostText}
            addPost={addPost}
        />
        )
};