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

import Home from './component/Home';
import Students from './component/Students';

// Import des function actions pour test
import {
  addStudent,
  editStudent,
  delStudent
} from './redux/actions';

const store = createStore(reducer)

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.routes = [
      {
        path: '/',
        text: 'Accueil',
        component: Home
      },
      {
        path: '/students',
        text: 'Etudiants',
        component: Students
      }
    ];
    
    /* Test des actions */
    console.log('initial state', store.getState());

    const unsubscribe = store.subscribe(() => console.log(store.getState()));

    store.dispatch(addStudent({
      name: 'Anga',
      age: 32,
      group: 1
    }));
    store.dispatch(addStudent({
      name: 'Babar',
      age: 16,
      group: 2
    }));
    store.dispatch(addStudent({
      name: 'Bouli',
      age: 19,
      group: 2
    }));
    store.dispatch(editStudent({
      index: 2,
      student: {
      name: 'Bouli',
      age: 26,
      group: 2
    }}));
    store.dispatch(addStudent({
      name: 'Koda',
      age: 2,
      group: 3
    }));
    store.dispatch(delStudent(3));
    store.dispatch(addStudent({
      name: 'Bob',
      age: 56,
      group: 3
    }));

    unsubscribe();
  }

  render() {
    const {routes} = this;
    return (
      <Provider store={store}>
        <Router>
          <div>
            <ul>
              {routes.map((route, i) =>
                (
                  <li key={i}><Link to={route.path}>{route.text}</Link></li>
                )
              )}
            </ul>

            <Switch>
              {routes.map((route, i) =>
                (
                  <Route key={i} exact path={route.path}><route.component /></Route>
                )
              )}
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
