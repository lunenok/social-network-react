import React from 'react';
import * as axios from "axios";

export class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                this.props.setUsers(response.data.items);
            });

        console.log(this.props);
    }

    render() {
        return (
            <div className="users">
                <ul className="users__list">
                    {this.props.users.map((user) => {
                        return (
                            <li key={user.id} className="users__item">
                                <div className="users__avatar-container">
                                    <img src="https://avatarfiles.alphacoders.com/196/196805.jpg" alt="Avatar" width="100" height="100" className="users__avatar"/>
                                </div>
                                {user.followed ?
                                    <button onClick={()=>this.props.onUserUnfollow(user.id)} className="users__follow-button">unfollow</button> :
                                    <button onClick={()=>this.props.onUserFollow(user.id)} className="users__follow-button">follow</button>

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
            </div>
            )
    }
}