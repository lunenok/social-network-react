import React from 'react';
import {NavLink} from 'react-router-dom';
import { UserType } from '../types/types';

type PropsType = {
    users: Array<UserType>,
    subscribingInProgress: Array<number>,
    followUserThunkCreator: (userId: number) => void,
    unFollowUserThunkCreator: (userId: number) => void
};

export const UsersList: React.FC<PropsType> = ({users, subscribingInProgress, followUserThunkCreator, unFollowUserThunkCreator}) => {
    return (
        <React.Fragment>
            <ul className="users__list">
                {users.map((user) => {
                    return (
                        <li key={user.id} className="users__item">
                            <NavLink to={'profile/' + user.id}>
                                <div className="users__avatar-container">
                                    <img
                                        src={user.photos.large ? user.photos.large : "https://avatarfiles.alphacoders.com/196/196805.jpg"}
                                        alt="Avatar"
                                        width="100"
                                        height="100"
                                        className="users__avatar"
                                    />
                                </div>
                            </NavLink>
                            {user.followed ?
                                <button 
                                    disabled={subscribingInProgress.some(id => id === user.id)}
                                    onClick={()=>{
                                        unFollowUserThunkCreator(user.id);
                                    }} 
                                    className="users__follow-button"
                                >
                                  unfollow
                                </button> :
                                <button
                                    disabled={subscribingInProgress.some(id => id === user.id)}
                                    onClick={()=>{
                                        followUserThunkCreator(user.id);
                                    }} 
                                    className="users__follow-button"
                                >
                                  follow
                                </button>

                            }
                            <div className="users__information-container">
                                <span className="users__name">
                                    {user.name}
                                </span>
                                <span className="users__status">
                                    Status
                                </span>
                                <span className="users__country">
                                    Country
                                </span>
                                <span className="users__city">
                                    City
                                </span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </React.Fragment>
    );
}