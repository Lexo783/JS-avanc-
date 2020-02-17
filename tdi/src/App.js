import React from 'react';
import './App.css';
import Accueil from './Components/Accueil';
import Configuration from './Components/Configuration';
import Apropos from './Components/Apropos';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { connect } from 'react-redux'
import { increment, decrement, reset } from './actionCreators'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = { increment, decrement, reset }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default class App extends React.Component{
  login = "";
  render() {
  return (
    <div className="App">
        <body>
        <h1>Our App</h1>
        <Choix/>
        <br/>
        
        <br/>
        </body>
    </div>
    );
  }
}

export function Choix() {
    return (
        <Router>
            <div>
                <ul>
                    <li> <Link to="/">Accueil</Link> </li>
                    <li> <Link to="/about">Configuration</Link> </li>
                    <li> <Link to="/dashboard">A propos</Link> </li>
                </ul>

                <hr />

                <Switch>
                    <Route exact path="/">
                        <Accueil />
                    </Route>
                    <Route path="/about">
                        <Configuration />
                    </Route>
                    <Route path="/dashboard">
                        <Apropos />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

/*export function TD2() {
  return (
    <Redux>

    </Redux>
  );
}*/