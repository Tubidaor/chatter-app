import React, { Component } from 'react';
import './App.css';
import Header from '../Components/Header/Header';
import { Route, Switch } from 'react-router-dom';
import Mainpage from '../Routes/MainPage/Mainpage';
import LoginPage from '../Routes/LoginPage/LoginPage';
import RegistrationPage from '../Routes/RegistrationPage/RegistrationPage';
import Dinos from '../Components/Background/Dinos';
import NewRugratPage from '../Routes/NewRugratPage/NewRugratPage';
import PrivateRoute from '../Components/Utils/PrivateRoute';
import PublicOnlyRoute from '../Components/Utils/PublicOnlyRoute';
import UsersPage from '../Routes/UsersPage/Users-page';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-regular-svg-icons';

library.add(
  faCoffee,
  faComments
)


export default class App extends Component {

  state = { hasError: true }

  render() {
    return (
      <div className="App">
        <header className="appHeader">
          <Header className="headerNav"/>
        </header>
        <div className='redDiv'></div>
        <div className='blueDiv'></div>
        <div className='yellowDiv'></div>
        <main className="AppMain">
          <Switch>
            <Route
              exact
              path={'/'}
              component={Mainpage}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
              />
            <PublicOnlyRoute
              path={'/register'}
              component={RegistrationPage}
            />
            <PrivateRoute
              path={'/addChild'}
              component={NewRugratPage}
            />
            <PrivateRoute
            path={'/words/:userName'}
            component={UsersPage}
            />
          </Switch>
          <Dinos numberOfBubbles={50}/>
        </main>

      </div>
    );
  }
}

