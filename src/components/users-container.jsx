import {connect} from 'react-redux';
import React from "react";
import {Users} from './users';
import {followUser, unfollowUser, setUsers, setCurrentPage, setUsersCount, setLoaderState, setSubscribingState, getUserThunkCreator} from '../redux/users-reducer';

class UsersComponent extends React.Component {
    constructor(props) {
        super(props);
        this._onPageClick = this._onPageClick.bind(this);
    }

    componentDidMount() {
        this.props.getUserThunkCreator(this.props.currentPage, this.props.usersToShow);
    };

    _onPageClick(page) {
        this.props.getUserThunkCreator(page, this.props.usersToShow);
        this.props.setCurrentPage(page);
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
        subscribingInProgress: state.userPage.subscribingInProgress,
    }
};

const mapDispatchToProps = {
    followUser, 
    unfollowUser, 
    setUsers, 
    setCurrentPage, 
    setUsersCount, 
    setLoaderState, 
    setSubscribingState, 
    getUserThunkCreator
};

export const UsersContainer = connect(mapPropsToState, mapDispatchToProps)(UsersComponent);