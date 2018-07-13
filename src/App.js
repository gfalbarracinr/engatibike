import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Profile from './components/Profile';
import Place from './components/Place';
import Ciclovia from './components/Ciclovia';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Profile}/>
          <Route exact path='/place/:id' component={Place}/>
          <Route exact path='/ciclovia' component={Ciclovia}/>
        </div>
      </Router>
    );
  }
}

export default App;
