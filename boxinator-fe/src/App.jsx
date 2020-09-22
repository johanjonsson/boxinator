import React from 'react';
import './App.css';
import { history } from './helpers/history'
import { BoxSetup } from './components/boxsetup/BoxSetup'
import { BoxShipment } from './components/boxshipment/BoxShipment';
import { Router, Route } from 'react-router-dom'

class App extends React.Component {


render() {
  return (
    <Router history={history}>
      <div className="App-header">
        <Route exact path="/addBox" component={BoxSetup} />
        <Route exact path='/listBoxes' component={BoxShipment} />
      </div>
    </Router>
  );
}

}

export default App;