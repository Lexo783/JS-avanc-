import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducers'

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Accueil from './Component/Accueil';
import Configuration from './Component/Configuration';
import Apropos from './Component/User';
import LeNombreATrouver from './Component/LeNombreATrouver';


import {
  addScore,
  delScore
} from './redux/actions';

const store = createStore(reducer);


export default class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
      nameState : ''
    };

  }

  setName(name) {
    console.log('App', name);
    this.test = name;
    this.setState({
      ...this.state,nameState:name
    })
  }


  render() {
    return (
        <Provider store={store}>

        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/about">Configuration</Link>
              </li>
              <li>
                <Link to="/users">A propos</Link>
              </li>
              <li>
                <Link to="/leNbATrouver">Le nombre a trouver</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Accueil name={this.state.nameState}/>
            </Route>
            <Route path="/about">
              <Configuration name={name => this.setName(name)} />
            </Route>
            <Route path="/users">
              <Apropos />
            </Route>
            <Route path="/leNbATrouver">
              <LeNombreATrouver name={this.state.nameState}/>
            </Route>
          </Switch>
        </div>
      </Router>
        </Provider>
    );
  }
}
