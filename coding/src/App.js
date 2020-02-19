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

import Favoris from './Component/favoris'
import Create from './Component/create'

const store = createStore(reducer);


export default class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
      nameState : ''
    };


    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAjEjmjUPOp7DOHSKe_c0eKDMCgJPeSGqU",
      authDomain: "coding-9bf47.firebaseapp.com",
      databaseURL: "https://coding-9bf47.firebaseio.com",
      projectId: "coding-9bf47",
      storageBucket: "coding-9bf47.appspot.com",
      messagingSenderId: "1068534208752",
      appId: "1:1068534208752:web:327d32d6b56b3c50e88a35",
      measurementId: "G-8D6TCL0336"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
      //var app = firebase.initializeApp({...});
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
          <script src="https://www.gstatic.com/firebasejs/7.8.2/firebase-app.js"></script>
          <script src="https://www.gstatic.com/firebasejs/7.8.2/firebase-analytics.js"></script>

        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/create">Creation du compte</Link>
              </li>
              <li>
                <Link to="/favoris">Mes favoris</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/favoris">
              <Favoris />
            </Route>
          </Switch>


        </div>
      </Router>
        </Provider>
    );
  }
}
