import React, { Component } from 'react';
import './App.css';
import Header from '../Components/Header/Header';
import { Route, Switch } from 'react-router-dom';
import Mainpage from '../Routes/MainPage/Mainpage';
import LoginPage from '../Routes/LoginPage/LoginPage';
import RegistrationPage from '../Routes/RegistrationPage/RegistrationPage';
import Dinos from '../Components/Background/Dinos';
import NewRugratPage from '../Routes/NewRugratPage/NewRugratPage';


export default class App extends Component {

  state = { hasError: true }

  render() {
    return (
      <div className="App">
        <header className="appHeader">
          <Header/>
        </header>
        <main className="AppMain">
          <Switch>
            <Route
              exact
              path={'/'}
              component={Mainpage}
            />
            <Route
              path={'/Login'}
              component={LoginPage}
              />
            <Route
              path={'/Register'}
              component={RegistrationPage}
            />
            <Route
              path={'/AddChild'}
              component={NewRugratPage}
            />
          </Switch>
          <Dinos numberOfBubbles={50}/>
        </main>

      </div>
    );
  }
}

