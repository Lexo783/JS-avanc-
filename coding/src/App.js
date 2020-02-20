import React from 'react';
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
import FavoriteList from './Component/FavoriteList'
import Create from './Component/Create'
import Profil from "./Component/Profil";


const store = createStore(reducer);


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.message ="mailto:gwenael.mw@gmail.com?subject= Voici ma liste de jeux favoris sur un site super! &body=" +
        "Salut! Voici mon profil de jeux avec mes jeux Favoris : http://localhost:3000/favorite , " +
        "Je t'invite donc a t'inscrire ainsi que de me payer un jeux qui est dans la liste."
  }


  render() {
    return (
        <Provider store={store}>
        <body>
        <div id="page">
        <Router>
        <div>
          <nav>
            <ul  id="navLink">
              <li>
                <Link to="/" style={{color: "white"}}>Accueil</Link>
              </li>
              <li>
                <Link to="/create" style={{color: "white"}}>Creation du compte</Link>
              </li>
              <li>
                <Link to="/favorite" style={{color: "white"}}>Mes favoris</Link>
              </li>
              <li>
                <Link to="/profil" style={{color: "white"}}>Mon profil</Link>
              </li>
            </ul>
          </nav>


          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/favorite">
              <FavoriteList />
            </Route>
            <Route path="/profil">
              <Profil />
            </Route>
          </Switch>


        </div>
      </Router>
          <footer>
          <a href={this.message}>
            Partager mon profil.
          </a>
          </footer>
        </div>
        </body>
        </Provider>
    );
  }
}



