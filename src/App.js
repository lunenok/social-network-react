import React from 'react';
import {Menu} from './components/menu';
import {ProfileContainer} from './components/profile-container';
import {Footer} from './components/footer';
import {DialogsContainer} from './components/dialogs-container';
import {Developing} from './components/developing';
import {BrowserRouter, Route} from 'react-router-dom';
import {UsersContainer} from './components/users-container';
import {HeaderContainer} from './components/header-container';
import {Login} from './components/login';

function App(props) {

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
}

export default App;
