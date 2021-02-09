const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [
        {id: 1, name: 'Liza', follow: true, status: 'Hey!', country: 'Russia', city: 'Yekaterinburg'},
        {id: 2, name: 'Katya', follow: false, status: 'GN', country: 'Russia', city: 'Yekaterinburg'},
        {id: 3, name: 'Anya', follow: true, status: 'No status', country: 'Russia', city: 'Yekaterinburg'},
    ]
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, follow: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, follow: false}
                    }
                    return user
                })
            }
        case SET_USERS:

        default:
            return state
    }
}

export const followCreator = (userId) => ({
    type: FOLLOW,
    userId: userId
});

export const unfollowCreator = (userId) => ({
    type: UNFOLLOW,
    userId: userId
});

export const setUserCreator = (users) => ({
    type: FOLLOW,
    users: users
});