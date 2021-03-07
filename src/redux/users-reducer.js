const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_LOAD_STATE = 'SET_LOAD_STATE';
const SET_SUBSCRIBING_STATE = 'SET_SUBSCRIBING_STATE';

const initialState = {
    users: [],
    currentPage: 1,
    usersCount: 0,
    usersToShow: 5,
    isLoading: true,
    subscribingInProgress: []
};

export const usersReducer = (state = initialState, action) => {
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
                    : state.subscribingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}

export const followUser = (userId) => ({
    type: FOLLOW,
    userId: userId
});

export const unfollowUser = (userId) => ({
    type: UNFOLLOW,
    userId: userId
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users: users
});

export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    currentPage: page,
});

export const setUsersCount = (count) => ({
    type: SET_USERS_COUNT,
    usersCount: count
});

export const setLoaderState = (isLoading) => ({
    type: SET_LOAD_STATE,
    isLoading: isLoading
});

export const setSubscribingState = (isSubscriging ,userId) => ({
    type: SET_SUBSCRIBING_STATE,
    isSubscriging: isSubscriging,
    userId: userId
})