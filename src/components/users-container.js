import {connect} from 'react-redux';
import React from "react";
import {Users} from './users';
import {followUserCreator, unfollowUserCreator, setUsersCreator, setCurrentPageCreator, setUsersCountCreator} from './../redux/users-reducer';
import * as axios from "axios";

class UsersComponent extends React.Component {
    constructor(props) {
        super(props);
        this._onPageClick = this._onPageClick.bind(this);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersToShow}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount);
            });
    };

    _onPageClick(page) {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersToShow}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount);
            });
    };

    render() {
        return (
            <Users
                users={this.props.users}
                currentPage={this.props.currentPage}
                usersCount={this.props.usersCount}
                usersToShow={this.props.usersToShow}
                onPageClick={this._onPageClick}
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
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageCreator(page));
        },
        setUsersCount: (count) => {
            dispatch(setUsersCountCreator(count));
        }
    }
}

export const UsersContainer = connect(mapPropsToState, mapDispatchToProps)(UsersComponent);