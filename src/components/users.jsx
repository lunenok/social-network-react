import React from 'react';
import {Loader} from './loader/loader';
import {NavLink} from 'react-router-dom';
import {Paginator} from './paginator';

const UsersList = ({props}) => {
    return (
        <React.Fragment>
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
            <Paginator itemsCount={props.usersCount} itemsToShow={props.usersToShow} currentPage={props.currentPage} onPageClick={props.onPageClick}/>
            {props.isLoading ? <Loader/> : <UsersList props={props}/>}
        </div>
    )
}