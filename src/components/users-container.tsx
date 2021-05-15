import {connect} from 'react-redux';
import React, {useEffect} from "react";
import {Users} from './users';
import {setCurrentPage, setSubscribingState, getUserThunkCreator, followUserThunkCreator, unFollowUserThunkCreator} from '../redux/users-reducer';
import {getUsers, getCurrentPage, getUsersCount, getUsersToShow, getIsLoading, getSubscribingInProgress} from '../redux/users-selectors';
import { UserType } from '../types/types';
import { AppStateType } from '../redux/store';

const UsersComponent: React.FC<PropsType> = (props) => {

    const {users, currentPage, usersCount, usersToShow, isLoading, 
        subscribingInProgress,  followUserThunkCreator, 
        unFollowUserThunkCreator, setCurrentPage, getUserThunkCreator} = props;
    
    useEffect(() => {
        getUserThunkCreator(currentPage, usersToShow)
    }, [currentPage, getUserThunkCreator, usersToShow]);

    const onPageClick = (page: number) => {
        getUserThunkCreator(page, usersToShow);
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
    }
};

const mapDispatchToProps = {
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
    users: Array<UserType>;
    subscribingInProgress: Array<number>;
    followUserThunkCreator: (userId: number) => void;
    unFollowUserThunkCreator: (userId: number) => void;
    isLoading: boolean;
    setCurrentPage: (page: number) => void;
    getUserThunkCreator: (currentPage: number, usersToShow: number) => void;
}