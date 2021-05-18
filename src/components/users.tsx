import React from 'react';
import { FilterType } from '../redux/users-reducer';
import { UserType } from '../types/types';
import {Loader} from './loader';
import {Paginator} from './paginator';
import { UsersList } from './user-list';
import { UsersFilter } from './users-filter';

export const Users: React.FC<PropsType> = ({usersCount, usersToShow, currentPage, users, subscribingInProgress, followUserThunkCreator, unFollowUserThunkCreator, isLoading, onPageClick, currentFilter}) => {
    
    return (
        <div className="users">
            <UsersFilter onPageClick={onPageClick} currentFilter={currentFilter} usersToShow={usersToShow} />
            <Paginator itemsCount={usersCount} usersToShow={usersToShow} currentPage={currentPage} onPageClick={onPageClick} currentFilter={currentFilter}/>
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
    onPageClick: (page: number, usersToShow: number, filter: FilterType) => void;
    currentFilter: FilterType
};