import React from 'react';
import {Header} from './components/header';
import  {Menu} from './components/menu';
import {Profile} from "./components/profile";
import {Footer} from "./components/footer";
import {Dialogs} from "./components/dialogs";
import {Developing} from "./components/developing"
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
  return (
      <BrowserRouter>
          <div className="main">
              <Header/>
              <Menu/>
                  <Route path="/profile" render={() => <Profile posts={props.posts}/>}/>
                  <Route path='/dialogs' render={() =>
                      <Dialogs
                          dialogsName={props.dialogsName}
                          messages={props.messages}
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
