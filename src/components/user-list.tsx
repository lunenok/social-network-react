import { Button, Col, Divider, Image, Row } from 'antd';
import React from 'react';
import {NavLink} from 'react-router-dom';
import { UserType } from '../types/types';

export const UsersList: React.FC<PropsType> = ({users, subscribingInProgress, followUserThunkCreator, unFollowUserThunkCreator}) => {
    return (
        <React.Fragment>
            <ul className="users__list">
                {users.map((user) => {
                    return (
                        <li key={user.id}>
                            <Row>
                                <Col>
                                    <NavLink to={'profile/' + user.id} style={{marginRight: '24px'}}>
                                        <Image
                                            src={user.photos.large ? user.photos.large : "https://avatarfiles.alphacoders.com/196/196805.jpg"}
                                            alt="Avatar"
                                            width={120}
                                            height={120}
                                            preview={false}
                                        />
                                    </NavLink>
                                </Col>
                                <Col>
                                    <Row>
                                        <NavLink to={'profile/' + user.id} style={{marginBottom: '24px', textTransform: 'uppercase'}}>
                                            <span >{user.name}</span>
                                        </NavLink>
                                    </Row>
                                    <Row>
                                        {user.followed ?
                                            <Button 
                                                disabled={subscribingInProgress.some(id => id === user.id)}
                                                onClick={()=>{
                                                    unFollowUserThunkCreator(user.id);
                                                }} 
                                            >
                                              unfollow
                                            </Button> :
                                            <Button
                                                disabled={subscribingInProgress.some(id => id === user.id)}
                                                onClick={()=>{
                                                    followUserThunkCreator(user.id);
                                                }} 
                                            >
                                              follow
                                            </Button>

                                        }
                                    </Row>
                                </Col>
                            </Row>
                            <Divider></Divider>
                        </li>

                    )
                })}
            </ul>
        </React.Fragment>
    );
};

type PropsType = {
    users: Array<UserType>;
    subscribingInProgress: Array<number>;
    followUserThunkCreator: (userId: number) => void;
    unFollowUserThunkCreator: (userId: number) => void;
};