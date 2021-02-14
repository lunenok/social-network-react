import React from 'react';

const USERS = [
    {id: 1, name: 'Liza', follow: true, status: 'Hey!', country: 'Russia', city: 'Yekaterinburg'},
    {id: 2, name: 'Katya', follow: false, status: 'GN', country: 'Russia', city: 'Yekaterinburg'},
    {id: 3, name: 'Anya', follow: true, status: 'No status', country: 'Russia', city: 'Yekaterinburg'},
];

export const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(USERS);
    }

    const {users} = props;

    const button = (user) => {
            if (user.follow) {
                return (<button onClick={()=>props.onUserUnfollow(user.id)} className="users__follow-button">follow</button>)
            } else {
                return (<button onClick={()=>props.onUserFollow(user.id)} className="users__follow-button">unfollow</button>)
            }
    };

    return (
        <div className="users">
            <ul className="users__list">
                {users.map((user) => {
                    return (
                        <li key={user.id} className="users__item">
                            <div className="users__avatar-container">
                                <img src="https://avatarfiles.alphacoders.com/196/196805.jpg" alt="Avatar" width="100" height="100" className="users__avatar"/>
                            </div>
                            {button(user)}
                            <div className="users__information-container">
                        <span className="users__name">
                            {user.name}
                        </span>
                                <span className="users__status">
                                    {user.status}
                        </span>
                                <span className="users__country">
                            {user.country}
                        </span>
                                <span className="users__city">
                            {user.city}
                        </span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}