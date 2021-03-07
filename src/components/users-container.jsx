import {connect} from 'react-redux';
import React from "react";
import {Users} from './users';
import {followUser, unfollowUser, setUsers, setCurrentPage, setUsersCount, setLoaderState, setSubscribingState} from '../redux/users-reducer';
import {getUsers} from './../api/api';

class UsersComponent extends React.Component {
    constructor(props) {
        super(props);
        this._onPageClick = this._onPageClick.bind(this);
    }

    componentDidMount() {
        this.props.setLoaderState(true);
        getUsers(this.props.currentPage, this.props.usersToShow)
            .then((data) => {
                this.props.setUsers(data.items);
                this.props.setUsersCount(data.totalCount);
                this.props.setLoaderState(false);
            });
    };

    _onPageClick(page) {
        this.props.setCurrentPage(page);
        this.props.setLoaderState(true);
        getUsers(page, this.props.usersToShow)
            .then((data) => {
                this.props.setUsers(data.items);
                this.props.setUsersCount(data.totalCount);
                this.props.setLoaderState(false);
            });
    };

    render() {
        return (
            <Users
                users={this.props.users}
                currentPage={this.props.currentPage}
                usersCount={this.props.usersCount}
                usersToShow={this.props.usersToShow}
                isLoading={this.props.isLoading}
                onPageClick={this._onPageClick}
                onUserFollow={this.props.followUser}
                onUserUnfollow={this.props.unfollowUser}
                subscribingInProgress={this.props.subscribingInProgress}
                setSubscribingState={this.props.setSubscribingState}
            />
            )
    }

}

const mapPropsToState = (state) => {

    return {
        users: state.userPage.users,
        currentPage: state.userPage.currentPage,
        usersCount: state.userPage.usersCount,
        usersToShow: state.userPage.usersToShow,
        isLoading: state.userPage.isLoading,
        subscribingInProgress: state.userPage.subscribingInProgress
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onUserFollow: (userId) => {
//             dispatch(followUserCreator(userId));
//         },
//         onUserUnfollow: (userId) => {
//             dispatch(unfollowUserCreator(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersCreator(users));
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPageCreator(page));
//         },
//         setUsersCount: (count) => {
//             dispatch(setUsersCountCreator(count));
//         },
//         setLoaderState: (isLoading) => {
//             dispatch(setLoaderStateCreator(isLoading));
//         },
//     }
// }

const mapDispatchToProps = {
    followUser, unfollowUser, setUsers, setCurrentPage, setUsersCount, setLoaderState, setSubscribingState
}

export const UsersContainer = connect(mapPropsToState, mapDispatchToProps)(UsersComponent);