import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Accueil from './Component/Accueil';
import Configuration from './Component/Configuration';
import Apropos from './Component/User';
import TdII from './Component/tdII';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      nameState : '',
      nbrRandom: -1
    };
  }

  setName(name) {
    console.log('App', name);
    this.setState({
      ...this.state,nameState:name
    })
  }
  setNumber(nbr){
    console.log('app',nbr)
    this.setState({
      ...this.state,nbrRandom:nbr
    })
  }

  render() {
    return (
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
                <Link to="/tdII">Le TD II</Link>
              </li>
              <li>
                <Link to="/users">A propos</Link>
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
            <Route path="/tdII">
              <TdII nbr={nbr => this.setNumber(this.state.nbrRandom)} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}