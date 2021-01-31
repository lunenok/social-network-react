import React from 'react';
import {NavLink} from "react-router-dom";

export const Menu = () => {
    return (
        <ul className="main__menu">
            <li className="main__menu-item">
                <NavLink to="/profile">
                    Profile
                </NavLink>
            </li>
            <li className="main__menu-item">
                <NavLink to="/dialogs">
                    Messages
                </NavLink>
            </li>
            <li className="main__menu-item">
                <NavLink to="/news">
                    News
                </NavLink>
            </li>
            <li className="main__menu-item">
                <NavLink to="/music">
                    Music
                </NavLink>
            </li>
            <li className="main__menu-item">
                <NavLink to="/settings">
                    Settings
                </NavLink>
            </li>
        </ul>
    );
};