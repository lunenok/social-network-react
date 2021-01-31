import React from 'react';
import {Posts} from "./post";

export const Profile = (props) => {
    const {posts} = props;
    return (
        <div className="content">
            <div className="profile">
                <div className="profile__pic ">
                    <img src="https://freesvg.org/img/Linux-Avatar.png" alt="avatar" width="{150}" height="{150}"
                         className="profile__img"/>
                </div>
                <div className="profile__info">
                    <div className="profile__name">
                        Maksim D.
                    </div>
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
            <div className="posts">
                <h2 className="posts__title">
                    My posts
                </h2>
                <div className="posts__new">
                    <input type="text" className="posts__input" placeholder="Your new post..."/>
                    <button className="posts__button">Send</button>
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