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


export default class App extends Component {

  state = { hasError: true }

  render() {
    return (
      <div className="App">
        <header className="appHeader">
          <Header />
        </header>
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
            path={'/users/:user_id'}
            />
          </Switch>
          <Dinos numberOfBubbles={50}/>
        </main>

      </div>
    );
  }
}

