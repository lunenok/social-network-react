import {useDispatch, useSelector} from 'react-redux';
import React, {useCallback, useEffect} from "react";
import {setCurrentPageAction, getUserThunkCreator, FilterType, followUserThunkCreator, unFollowUserThunkCreator} from '../redux/users-reducer';
import {getUsers, getCurrentPage, getUsersCount, getUsersToShow, getIsLoading, getSubscribingInProgress, getCurrentFilter} from '../redux/users-selectors';
import { UsersFilter } from './users-filter';
import { Paginator } from './paginator';
import { Loader } from './loader';
import { UsersList } from './user-list';

export const Users: React.FC = () => {

    const usersCount = useSelector(getUsersCount);
    const users = useSelector(getUsers);
    const isLoading = useSelector(getIsLoading);
    const currentPage = useSelector(getCurrentPage);
    const usersToShow = useSelector(getUsersToShow);
    const currentFilter = useSelector(getCurrentFilter);
    const subscribingInProgress = useSelector(getSubscribingInProgress);

    const dispatch = useDispatch();

    const follow = (userId: number) => {
        dispatch(followUserThunkCreator(userId))
    };
    
    const unfollow = (userId: number) => {
        dispatch(unFollowUserThunkCreator(userId))
    };
    
    const setCurrentPage = (page: number) => {
        dispatch(setCurrentPageAction(page))
    };

    const requestUsers = useCallback(
        (currentPage: number, usersToShow: number, currentFilter: FilterType) => {
        dispatch(getUserThunkCreator(currentPage, usersToShow, currentFilter));
    }, [dispatch]);

    useEffect(() => {
        requestUsers(currentPage, usersToShow, currentFilter)
    }, [currentPage, usersToShow, currentFilter, requestUsers]);

    const onPageClick = (page: number, usersToShow: number, filter: FilterType) => {
        requestUsers(page, usersToShow, filter);
        setCurrentPage(page);
    };

    return (
        <div className="users">
            <UsersFilter onPageClick={onPageClick} currentFilter={currentFilter} usersToShow={usersToShow} />
            <Paginator itemsCount={usersCount} usersToShow={usersToShow} currentPage={currentPage} onPageClick={onPageClick} currentFilter={currentFilter}/>
            {isLoading ? <Loader/> : <UsersList users={users} subscribingInProgress={subscribingInProgress} followUserThunkCreator={follow} unFollowUserThunkCreator={unfollow}/>}
        </div>
    )
};