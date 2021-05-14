import React from 'react';
import { UserType } from '../types/types';
import {Loader} from './loader';
import {Paginator} from './paginator';
import { UsersList } from './user-list';

export const Users: React.FC<PropsType> = ({usersCount, usersToShow, currentPage, users, subscribingInProgress, followUserThunkCreator, unFollowUserThunkCreator, isLoading, onPageClick}) => {
    return (
        <div className="users">
            <Paginator itemsCount={usersCount} itemsToShow={usersToShow} currentPage={currentPage} onPageClick={onPageClick}/>
            {isLoading ? <Loader/> : <UsersList users={users} subscribingInProgress={subscribingInProgress} followUserThunkCreator={followUserThunkCreator} unFollowUserThunkCreator={unFollowUserThunkCreator}/>}
        </div>
    )
};

type PropsType = {
    usersCount: number;
    usersToShow: number;
    currentPage: number;
    users: Array<UserType>;
    subscribingInProgress: Array<number>;
    followUserThunkCreator: (userId: number) => void;
    unFollowUserThunkCreator: (userId: number) => void;
    isLoading: boolean;
    onPageClick: (page: number) => void;
}