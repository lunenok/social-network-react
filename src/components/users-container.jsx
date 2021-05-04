import {connect} from 'react-redux';
import React from "react";
import {Users} from './users';
import {setUsers, setCurrentPage, setUsersCount, setLoaderState, setSubscribingState, getUserThunkCreator, followUserThunkCreator, unFollowUserThunkCreator} from '../redux/users-reducer';
import {getUsers, getCurrentPage, getUsersCount, getUsersToShow, getIsLoading, getSubscribingInProgress} from '../redux/users-selectors';

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
                subscribingInProgress={this.props.subscribingInProgress}
                setSubscribingState={this.props.setSubscribingState}
                followUserThunkCreator={this.props.followUserThunkCreator}
                unFollowUserThunkCreator={this.props.unFollowUserThunkCreator}
            />
            )
    }

}

const mapPropsToState = (state) => {
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
    setUsers, 
    setCurrentPage, 
    setUsersCount, 
    setLoaderState, 
    setSubscribingState, 
    getUserThunkCreator,
    followUserThunkCreator,
    unFollowUserThunkCreator
};

export const UsersContainer = connect(mapPropsToState, mapDispatchToProps)(UsersComponent);