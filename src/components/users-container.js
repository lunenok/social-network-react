import {connect} from 'react-redux';
import {Users} from './users';
import {followUserCreator, unfollowUserCreator, setUsersCreator} from './../redux/users-reducer';

const mapPropsToState = (state) => {

    return {
        users: state.userPage.users,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUserFollow: (userId) => {
            dispatch(followUserCreator(userId));
        },
        onUserUnfollow: (userId) => {
            dispatch(unfollowUserCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersCreator(users));
        }
    }
}

export const UsersContainer = connect(mapPropsToState, mapDispatchToProps)(Users);