import React from 'react';
import {connect} from 'react-redux';
import {MenuComponent} from './components/menu';
import {ProfileContainer} from './components/profile-container';
import {Footer} from './components/footer';
import {Dialogs} from './components/dialogs';
import {Developing} from './components/developing';
import {BrowserRouter, Route} from 'react-router-dom';
import {Users} from './components/users';
import {Header} from './components/header';
import {Login} from './components/login';
import {setInitializeDataThunkCreator} from './redux/app-reducer';
import { Loader } from './components/loader';
import { AppStateType } from './redux/store';
import 'antd/dist/antd.css'
import { Col, Layout, Row } from 'antd';
// import Layout from 'antd/lib/layout/layout';

const AppComponent: React.FC<AppPropsType> = ({setInitializeDataThunkCreator, isInitialized}) => {

    React.useEffect(()=>{
        setInitializeDataThunkCreator();
    }, [setInitializeDataThunkCreator])

    if (isInitialized === false) {
        return <Loader/>
    };

    return (
        <BrowserRouter>
            <Layout className="layout" style={{maxWidth: '1200px', margin: '0 auto'}}>
                <Header/>
                <Layout hasSider>
                    <MenuComponent/>
                    <Route path="/profile/:userId?" render={() =>
                            <ProfileContainer/>
                    }/>
                    <Route path="/users" render={() =>
                        <Users/>
                    }/>
                    <Route path='/dialogs' render={() =>
                        <Dialogs/>
                    }/>
                    <Route path='/news' component={Developing}/>
                    <Route path='/music' component={Developing}/>
                    <Route path='/settings' component={Developing}/>
                    <Route path='/login' component={Login}/>
                </Layout>
                <Footer/>
            </Layout>
        </BrowserRouter>
    );
}

const mapStateToProps = (state: AppStateType) => ({
    isInitialized: state.appData.initialized,
})

export const App = connect(mapStateToProps, {setInitializeDataThunkCreator})(AppComponent);

export default App;

type AppPropsType = {
    setInitializeDataThunkCreator: () => void;
    isInitialized: boolean
};