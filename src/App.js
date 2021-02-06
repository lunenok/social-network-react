import React from 'react';
import {Header} from './components/header';
import {Menu} from './components/menu';
import {ProfileContainer} from "./components/profile-container";
import {Footer} from "./components/footer";
import {DialogsContainer} from "./components/dialogs-container";
import {Developing} from "./components/developing"
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {

  return (
      <BrowserRouter>
          <div className="main">
              <Header/>
              <Menu/>
                  <Route path="/profile" render={() =>
                      <ProfileContainer store={props.store} dispatch={props.dispatch}/>
                  }/>
                  <Route path='/dialogs' render={() =>
                      <DialogsContainer
                          store={props.store}
                          dispatch={props.dispatch}
                      />}
                  />
                  <Route path='/news' component={Developing}/>
                  <Route path='/music' component={Developing}/>
                  <Route path='/settings' component={Developing}/>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
