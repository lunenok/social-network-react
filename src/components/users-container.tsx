import {connect} from 'react-redux';
import React, {useEffect} from "react";
import {Users} from './users';
import {setCurrentPage, setSubscribingState, getUserThunkCreator, followUserThunkCreator, unFollowUserThunkCreator, setFilter, FilterType} from '../redux/users-reducer';
import {getUsers, getCurrentPage, getUsersCount, getUsersToShow, getIsLoading, getSubscribingInProgress, getCurrentFilter} from '../redux/users-selectors';
import { UserType } from '../types/types';
import { AppStateType } from '../redux/store';

const UsersComponent: React.FC<PropsType> = (props) => {

    const {users, currentPage, usersCount, usersToShow, isLoading, 
        subscribingInProgress,  followUserThunkCreator, 
        unFollowUserThunkCreator, setCurrentPage, getUserThunkCreator, currentFilter} = props;
    
    useEffect(() => {
        getUserThunkCreator(currentPage, usersToShow, currentFilter)
    }, [currentPage, getUserThunkCreator, usersToShow, currentFilter]);

    const onPageClick = (page: number, usersToShow: number, filter: FilterType) => {
        getUserThunkCreator(page, usersToShow, filter);
        setCurrentPage(page);
    };

    return (
        <Users
            users={users}
            currentPage={currentPage}
            usersCount={usersCount}
            usersToShow={usersToShow}
            isLoading={isLoading}
            subscribingInProgress={subscribingInProgress}
            onPageClick={onPageClick}
            followUserThunkCreator={followUserThunkCreator}
            unFollowUserThunkCreator={unFollowUserThunkCreator}
            currentFilter={currentFilter}
        />
    )
}

const mapPropsToState = (state: AppStateType) => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        usersCount: getUsersCount(state),
        usersToShow: getUsersToShow(state),
        isLoading: getIsLoading(state),
        subscribingInProgress: getSubscribingInProgress(state),
        currentFilter: getCurrentFilter(state),
    }
};

const mapDispatchToProps = {
    setFilter,
    setSubscribingState, 
    followUserThunkCreator,
    unFollowUserThunkCreator,
    setCurrentPage, 
    getUserThunkCreator,
};

export const UsersContainer = connect(mapPropsToState, mapDispatchToProps)(UsersComponent);

type PropsType = {
    usersCount: number;
    usersToShow: number;
    currentPage: number;
    currentFilter: FilterType,
    users: Array<UserType>;
    subscribingInProgress: Array<number>;
    followUserThunkCreator: (userId: number) => void;
    unFollowUserThunkCreator: (userId: number) => void;
    isLoading: boolean;
    setCurrentPage: (page: number) => void;
    getUserThunkCreator: (currentPage: number, usersToShow: number, filter: FilterType) => void;
};