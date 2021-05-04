import React from 'react';
import {Loader} from './loader/loader';
import {NavLink} from 'react-router-dom';
import {followUser, unfollowUser} from './../api/api';

const UsersList = ({props}) => {
    let pagesCount = Math.ceil(props.usersCount / props.usersToShow);
    let pages = [];
    if (pagesCount >=20) {pagesCount = 20}
    for (let i = 1; i <= pagesCount; i++) {pages.push(i);}

    // console.log('USERS RENDER');

    return (
        <React.Fragment>
            <div className="users__pages">
                {pages.map((item) => {
                    return (
                        <span
                            key={item}
                            id={item}
                            onClick={(evt) => {
                                props.onPageClick(evt.target.id)
                            }}
                            className={`users__page ${parseInt(props.currentPage) === parseInt(item) ? 'users__page--active' : ''}`}
                        >
                        {item}
                    </span>
                    )
                },)
                }
            </div>
            <ul className="users__list">
                {props.users.map((user) => {
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
                                    disabled={props.subscribingInProgress.some(id => id === user.id)}
                                    onClick={()=>{
                                        props.unFollowUserThunkCreator(user.id);
                                    }} 
                                    className="users__follow-button"
                                >
                                  unfollow
                                </button> :
                                <button
                                    disabled={props.subscribingInProgress.some(id => id === user.id)}
                                    onClick={()=>{
                                        props.followUserThunkCreator(user.id);
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

export const Users = (props) => {
    return (
        <div className="users">
            {props.isLoading ? <Loader/> : <UsersList props={props}/>}
        </div>
    )
}