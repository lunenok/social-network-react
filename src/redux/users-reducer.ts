import { ThunkAction } from 'redux-thunk';
import {getUsers, followUser as folloUserRequest, unfollowUser as unfollowUserRequest} from '../api/api';
import { UserType } from '../types/types';
import { AppStateType } from './store';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_LOAD_STATE = 'SET_LOAD_STATE';
const SET_SUBSCRIBING_STATE = 'SET_SUBSCRIBING_STATE';
const SET_FILTER = 'SET_FILTER';

const initialState = {
    users: [] as Array<UserType>,
    currentPage: 1,
    usersCount: 0,
    usersToShow: 5,
    isLoading: true,
    subscribingInProgress: [] as Array<number>,
    filter: {
        value: '',
        followed: null as null | boolean
    },
};

type InitialState = typeof initialState;

type ActionsType = FollowUserActionType | UnfollowUserActionType | SetUserActionType | 
    SetCurrentPageActionType | SetUsersCountActionType | SetLoaderStateActionType |
    SetSubscribingStateActionType | SetFilterActionType;

export const usersReducer = (state = initialState, action: ActionsType): InitialState => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case SET_USERS_COUNT:
            return {
                ...state,
                usersCount: action.usersCount
            }
        case SET_LOAD_STATE:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_SUBSCRIBING_STATE:
            return {
                ...state,
                subscribingInProgress: action.isSubscriging
                    ? [...state.subscribingInProgress, action.userId]
                    : state.subscribingInProgress.filter(id => id !== action.userId)
            }
        case SET_FILTER:
            return {
                ...state,
                filter: action.filter
            }
        default:
            return state
    }
}

type FollowUserActionType = {
    type: typeof FOLLOW,
    userId: number
};

export const followUser = (userId: number): FollowUserActionType => ({
    type: FOLLOW,
    userId: userId
});

type UnfollowUserActionType = {
    type: typeof UNFOLLOW,
    userId: number
};

export const unfollowUser = (userId: number): UnfollowUserActionType => ({
    type: UNFOLLOW,
    userId: userId
});

type SetUserActionType = {
    type: typeof SET_USERS,
    users: Array<UserType>
};

export const setUsers = (users: Array<UserType>): SetUserActionType => ({
    type: SET_USERS,
    users: users
});

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
};

export const setCurrentPageAction = (page: number): SetCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    currentPage: page,
});

type SetUsersCountActionType = {
    type: typeof SET_USERS_COUNT,
    usersCount: number
};

export const setUsersCount = (count: number): SetUsersCountActionType => ({
    type: SET_USERS_COUNT,
    usersCount: count
});

type SetLoaderStateActionType = {
    type: typeof SET_LOAD_STATE,
    isLoading: boolean
};

export const setLoaderState = (isLoading: boolean): SetLoaderStateActionType => ({
    type: SET_LOAD_STATE,
    isLoading: isLoading
});

type SetSubscribingStateActionType = {
    type: typeof SET_SUBSCRIBING_STATE,
    isSubscriging: boolean,
    userId: number
};

export const setSubscribingState = (isSubscriging: boolean ,userId: number): SetSubscribingStateActionType => ({
    type: SET_SUBSCRIBING_STATE,
    isSubscriging: isSubscriging,
    userId: userId,
});

export type FilterType = typeof initialState.filter;

type SetFilterActionType = {
    type: typeof SET_FILTER
    filter: FilterType
}

export const setFilter = (filter: FilterType): SetFilterActionType => ({
    type: SET_FILTER,
    filter: filter
});

export const followUserThunkCreator = (userId: number): ThunkAction<void, AppStateType, unknown, ActionsType> => async (dispatch) =>{
    dispatch(setSubscribingState(true, userId));
    const response = await folloUserRequest(userId);
    if (response.resultCode === 0) {
        dispatch(followUser(userId));
    };
    dispatch(setSubscribingState(false, userId)); 
};

export const unFollowUserThunkCreator = (userId: number): ThunkAction<void, AppStateType, unknown, ActionsType> => async (dispatch) =>{
    dispatch(setSubscribingState(true, userId));
    const response = await unfollowUserRequest(userId);
    if (response.resultCode === 0) {
        dispatch(unfollowUser(userId));
    };
    dispatch(setSubscribingState(false, userId));
};

export const getUserThunkCreator = (currentPage: number, usersToShow: number, filter: FilterType): ThunkAction<void, AppStateType, unknown, ActionsType> => {
    return async (dispatch, getState) => {
        dispatch(setLoaderState(true));
        dispatch(setFilter(filter))
        const data = await getUsers(currentPage, usersToShow, filter)
        dispatch(setUsers(data.items));
        dispatch(setUsersCount(data.totalCount));
        dispatch(setLoaderState(false));
    }
};