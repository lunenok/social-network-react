import React from 'react';
import {connect} from 'react-redux';
import {Menu} from './components/menu';
import {ProfileContainer} from './components/profile-container';
import {Footer} from './components/footer';
import {DialogsContainer} from './components/dialogs-container';
import {Developing} from './components/developing';
import {BrowserRouter, Route} from 'react-router-dom';
import {UsersContainer} from './components/users-container';
import {HeaderContainer} from './components/header-container';
import {Login} from './components/login';
import {setInitializeDataThunkCreator} from './redux/app-reducer';
import { Loader } from './components/loader/loader';
class AppComponent extends React.Component {
    componentDidMount() {
        this.props.setInitializeDataThunkCreator();
    };

    render() {
        if (this.props.isInitialized === false) {
            return <Loader/>
        };

        return (
            <BrowserRouter>
                <div className="main">
                    <HeaderContainer/>
                    <Menu/>
                        <Route path="/profile/:userId" render={() =>
                            <ProfileContainer/>
                        }/>
                        <Route path="/users" render={() =>
                            <UsersContainer/>
                        }/>
                        <Route path='/dialogs' render={() =>
                            <DialogsContainer/>}
                        />
                        <Route path='/news' component={Developing}/>
                        <Route path='/music' component={Developing}/>
                        <Route path='/settings' component={Developing}/>
                        <Route path='/login' component={Login}/>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    };
}

const mapStateToProps = (state) => ({
    isInitialized: state.appData.initialized,
})

export const App = connect(mapStateToProps, {setInitializeDataThunkCreator})(AppComponent);

export default App;
