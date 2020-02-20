import React from 'react';
import * as firebase from 'firebase';
import DarkSoul3 from './pictures/dark_souls_3.jpg'


import {connect, Provider} from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducers'

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";



import Home from './Component/Home'
import Favoris from './Component/Favorite'
import Create from './Component/create'
import Profil from "./Component/Profil";
import {addFavorite, delFavorite} from "./redux/actions";
import Search from "./Component/Search";


const store = createStore(reducer);


export default class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
      nameState : ''
    };
    const { users } = this.props;



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
    this.message ="mailto:gwenael.mw@gmail.com?subject= Voici ma liste de jeux favoris sur un site super! &body=" +
        "Salut! Voici mon profil de jeux avec mes jeux Favoris : http://localhost:3000/favorite , Je t'invite donc a t'inscrire ainsi que de me payer un jeux qui est dans la liste." + this.state.nameState
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
                <Link to="/favorite">Mes favorite</Link>
              </li>
              <li>
                <Link to="/profil">Mon profil</Link>
              </li>
              <li>
                  <Link to="/search">Chercher</Link>
              </li>
            </ul>

            <a href={this.message}>
              Partager mon profil.
            </a>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create" name={name => this.setName(name)} >
              <Create />
            </Route>
            <Route path="/favorite">
              <Favoris />
            </Route>
            <Route path="/profil">
              <Profil />
            </Route>
            <Route>
              <Search path={"/search"}/>
            </Route>
          </Switch>


        </div>
      </Router>
        </Provider>
    );
  }
}



