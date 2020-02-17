import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

var login = "";

export class Accueil extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (<p>Hello {login}, je suis la page d accueil</p>);
    }
}


export class Configuration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        login = event.target.value;
    }

    handleSubmit(event) {
        alert('Le nom a été soumis : ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
            Nom :
                <input type="text" placeholder="votre nom" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Envoyer" />
            </form>
    );
    }
}


export class Apropos extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (<p>Notre équipe est composé d'Hugo, Florent, Erwan et Gwenael</p>);
    }
}




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" >
          Learn React
        </a>
      </header>

        <body>
        <h1> Our App</h1>
        <BasicExample/>
        <br/>
        <br/>
        </body>
    </div>
  );
}



export function BasicExample() {
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


export default App;
