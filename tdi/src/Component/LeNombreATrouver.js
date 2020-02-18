import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { addStudent, editStudent, delStudent } from "../redux/actions";

export default class LeNombreATrouver extends React.Component
{
    constructor(props) {
        super(props);
        this.compteur = 0;

        this.state= {
            nbRand : this.generateRand(),
            content : ""
        }
    }

    addScore(){

    }


    number(event) {
        event.preventDefault();
        let nbGiven = parseInt(event.target[0].value);
        if (nbGiven === this.state.nbRand) {
            console.log("find: " + this.compteur);
            this.setState({...this.state, content : "vous avez trouvé aprés " + this.compteur + " essai"});
        } else if (nbGiven > this.state.nbRand) {
            console.log("en dessous" + this.compteur);
            this.compteur ++;
            this.setState({...this.state, content : "vous avez fait " + this.compteur + " essai"});
        } else if (nbGiven < this.state.nbRand) {
            console.log("au dessus");
            this.compteur ++;
            this.setState({...this.state, content : "vous avez fait " + this.compteur + " essai"});
        }
    }

    generateRand(){
        let nb = Math.round(Math.random()*(101));
        console.log(nb);
        return nb;
    }

    restart(){
        console.log("perdu");
        //save dans database avec -1

        this.setState({...this.state, nbRand : this.generateRand()});
        this.compteur=0;
        this.setState({...this.state, content : "vous avez abandonner"});
    }

    render(){
        return (
            <div>
            <h2>nombre a trouver</h2>
            <p>vous devez trouver le nombre entre 1 et 100</p>
            <form onSubmit={ event => this.number(event) }>
                <label>
                 proposition : <input type="text" />
                </label>
                <button>valider</button>
                <button onClick={() => this.restart()}>recommencer</button>
                <p>{this.state.content}</p>
            </form>
            </div>
    );
    }
}
