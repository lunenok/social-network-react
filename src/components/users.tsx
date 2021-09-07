import {useDispatch, useSelector} from 'react-redux';
import React, {useCallback, useEffect} from "react";
import {setCurrentPageAction, getUserThunkCreator, FilterType, followUserThunkCreator, unFollowUserThunkCreator} from '../redux/users-reducer';
import {getUsers, getCurrentPage, getUsersCount, getUsersToShow, getIsLoading, getSubscribingInProgress, getCurrentFilter} from '../redux/users-selectors';
import { UsersFilter } from './users-filter';
import { Paginator } from './paginator';
import { Loader } from './loader';
import { UsersList } from './user-list';
import { useHistory } from 'react-router';
import * as queryString from 'query-string';
import { Content } from 'antd/lib/layout/layout';
import { Col, Row } from 'antd';
import Title from 'antd/lib/typography/Title';

export const Users: React.FC = () => {

    const usersCount = useSelector(getUsersCount);
    const users = useSelector(getUsers);
    const isLoading = useSelector(getIsLoading);
    const currentPage = useSelector(getCurrentPage);
    const usersToShow = useSelector(getUsersToShow);
    const currentFilter = useSelector(getCurrentFilter);
    const subscribingInProgress = useSelector(getSubscribingInProgress);
    const history = useHistory();

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
        const parsed = queryString.parse(history.location.search);
        
        let actualPage = currentPage
        let actualFilter = currentFilter

        if (!!parsed.page) actualPage = Number(parsed.page)


        if (!!parsed.term) actualFilter = {...actualFilter, value: parsed.term as string}

        switch(parsed.friend) {
            case "null":
                actualFilter = {...actualFilter, followed: null}
                break;
            case "true":
                actualFilter = {...actualFilter, followed: true}
                break;
            case "false":
                actualFilter = {...actualFilter, followed: false}
                break;
        }

        requestUsers(actualPage, usersToShow, actualFilter);

    }, []);

    useEffect(() => {
        const path: PathType = {};

        if (!!currentFilter.value) path.term = currentFilter.value;
        if (!!currentFilter.followed) path.friend = String(currentFilter.followed);
        if (currentPage !== 1) path.page = String(currentPage);

        history.push({
            pathname: '/users',
            search: queryString.stringify(path),
        })
    }, [currentFilter, history, currentPage]);

    const onPageClick = (page: number, usersToShow: number, filter: FilterType) => {
        requestUsers(page, usersToShow, filter);
        setCurrentPage(page);
    };

    return (
        <Content style={{background: 'white'}}>
            <Row style={{marginTop: '24px'}}>
                <Col span={12} offset={1}>
                    <Title level={3}>Developers list</Title>
                    <Paginator itemsCount={usersCount} usersToShow={usersToShow} currentPage={currentPage} onPageClick={onPageClick} currentFilter={currentFilter}/>
                    {isLoading ? <Loader/> : <UsersList users={users} subscribingInProgress={subscribingInProgress} followUserThunkCreator={follow} unFollowUserThunkCreator={unfollow}/>}
                </Col>
                <Col span={9} offset={1}>
                    <UsersFilter onPageClick={onPageClick} currentFilter={currentFilter} usersToShow={usersToShow} />
                </Col>
            </Row>
        </Content>
    )
};

type PathType = {term?: string, friend?: string, page?: string};