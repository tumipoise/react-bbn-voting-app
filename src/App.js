import React from 'react';
import Housemates from './components/Housemates'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Leader from './components/Leader'
import {HousematesProvider} from './components/HousematesProvider'

import './App.css';

function App() {

  return (
    <HousematesProvider>
    <Router>
      <Switch>
        <Route exact component={Housemates} path="/" />
        <Route component={Leader} path="/leader" />
    <div>
      <Housemates />
    </div>
    </Switch>
    </Router>
    </HousematesProvider>
  );
}

export default App;
