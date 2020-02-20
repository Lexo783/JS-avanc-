import React from 'react';
import * as firebase from 'firebase';

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


const store = createStore(reducer);


export default class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
      nameState : ''
    };

    this.message ="mailto:gwenael.mw@gmail.com?subject= Voici ma liste de jeux favoris sur un site super! &body=" +
        "Salut! Voici mon profil de jeux avec mes jeux Favoris : http://localhost:3000/favorite , " +
        "Je t'invite donc a t'inscrire ainsi que de me payer un jeux qui est dans la liste."
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
                <Link to="/create">Creation du compte</Link>
              </li>
              <li>
                <Link to="/favorite">Mes favoris</Link>
              </li>
              <li>
                <Link to="/profil">Mon profil</Link>
              </li>
            </ul>

            <a href={this.message}>
              Partager mon profil.
            </a>
          </nav>


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
          </Switch>


        </div>
      </Router>
        </Provider>
    );
  }
}



