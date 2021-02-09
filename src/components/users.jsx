import React from 'react';

export const Users = (props) => {
    return (
        <div className="users">
            <ul className="users__list">
                <li className="users__item">
                    <div className="users__avatar-container">
                        <img src="https://avatarfiles.alphacoders.com/196/196805.jpg" alt="Avatar" width="100" height="100" className="users__avatar"/>
                    </div>
                    <button className="users__follow-button">follow</button>
                    <div className="users__information-container">
                        <span className="users__name">
                            Liza
                        </span>
                        <span className="users__status">
                            Hey!
                        </span>
                        <span className="users__country">
                            Russia
                        </span>
                        <span className="users__city">
                            Yekaterinburg
                        </span>
                    </div>
                </li>
                <li className="users__item">
                    <div className="users__avatar-container">
                        <img src="https://avatarfiles.alphacoders.com/196/196805.jpg" alt="Avatar" width="100" height="100" className="users__avatar"/>
                    </div>
                    <button className="users__follow-button">follow</button>
                    <div className="users__information-container">
                        <span className="users__name">
                            Liza
                        </span>
                        <span className="users__status">
                            Hey!
                        </span>
                        <span className="users__country">
                            Russia
                        </span>
                        <span className="users__city">
                            Yekaterinburg
                        </span>
                    </div>
                </li>
                <li className="users__item">
                    <div className="users__avatar-container">
                        <img src="https://avatarfiles.alphacoders.com/196/196805.jpg" alt="Avatar" width="100" height="100" className="users__avatar"/>
                    </div>
                    <button className="users__follow-button">follow</button>
                    <div className="users__information-container">
                        <span className="users__name">
                            Liza
                        </span>
                        <span className="users__status">
                            Hey!
                        </span>
                        <span className="users__country">
                            Russia
                        </span>
                        <span className="users__city">
                            Yekaterinburg
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    )
}