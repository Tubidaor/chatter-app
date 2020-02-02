import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { Route, Switch } from 'react-router-dom';
import Mainpage from '../Routes/MainPage/Mainpage';
import LoginPage from '../LoginForm/LoginForm';
import RegistrationPage from '../Registration-Form/Registration-Form';
import Dinos from '../Background/Dinos';


function App() {
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
        </Switch>
        <Dinos numberOfBubbles={50}/>
      </main>

    </div>
  );
}

export default App;
