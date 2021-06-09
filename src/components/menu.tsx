import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import React from 'react';
import {NavLink} from "react-router-dom";

export const MenuComponent: React.FC = () => {
    return (
        <Sider>
            <Menu>
                <Menu.Item key='profile'>
                    <NavLink to="/profile">
                        Profile
                    </NavLink>
                </Menu.Item>
                <Menu.Item key='users'>
                    <NavLink to="/users">
                        Users
                    </NavLink>
                </Menu.Item>
                <Menu.Item key='dialogs'>
                    <NavLink to="/dialogs">
                        Messages
                    </NavLink>
                </Menu.Item>
                <Menu.Item key='news'>
                    <NavLink to="/news">
                        News
                    </NavLink>
                </Menu.Item>
                <Menu.Item key='music'>
                    <NavLink to="/music">
                        Music
                    </NavLink>
                </Menu.Item>
                <Menu.Item key='settings'>
                    <NavLink to="/settings">
                        Settings
                    </NavLink>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};