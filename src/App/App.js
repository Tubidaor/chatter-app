import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { Route, Switch } from 'react-router-dom';
import Mainpage from '../Mainpage/Mainpage';
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
        </Switch>
        <Dinos numberOfBubbles={100}/>
      </main>

    </div>
  );
}

export default App;
