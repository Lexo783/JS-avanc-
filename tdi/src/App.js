import React from 'react';
import * as firebase from 'firebase';

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

import Home from './Component/Home';
import Configuration from './Component/Configuration';
import About from './Component/User';
import FindTheNumber from './Component/FindTheNumber';


const store = createStore(reducer);


export default class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
      nameState : ''
    };

      //var app = firebase.initializeApp({...});
  }

  setName(name) {
    console.log('App', name);
    this.test = name;
    this.setState({
      ...this.state,nameState:name
    })
  }

  /*
  *  <script src="https://www.gstatic.com/firebasejs/${JSCORE_VERSION}/firebase.js"></script>

          <script>
            var app = firebase.initializeApp({
            apiKey: '<your-api-key>',
            authDomain: '<your-auth-domain>',
            databaseURL: '<your-database-url>',
            projectId: '<your-cloud-firestore-project>',
            storageBucket: '<your-storage-bucket>',
            messagingSenderId: '<your-sender-id>'
          });
            // ...
          </script>
  * */


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
                <Link to="/configuration">Configuration</Link>
              </li>
              <li>
                <Link to="/about">A propos de nous</Link>
              </li>
              <li>
                <Link to="/findTheNumber">Le nombre a trouver</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home name={this.state.nameState}/>
            </Route>
            <Route path="/configuration">
              <Configuration name={name => this.setName(name)} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/findTheNumber">
              <FindTheNumber name={this.state.nameState}/>
            </Route>
          </Switch>


        </div>
      </Router>
        </Provider>
    );
  }
}
