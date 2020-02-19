import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import { addScore } from "../redux/actions";

import Score from "./Score";


export class LeNombreATrouver extends React.Component
{
    constructor(props) {
        super(props);
        this.compteur = 0;
        this.nbRand = this.generateRand();
        this.scores = [];

        //les states sont les seuls éléments destiné a changer graphiquement
        this.state= {
            //nbRand : this.generateRand(),
            content : "",
            name : this.props.name,
        };
    }


    addScore(){
        console.log(""+ this.state.name + "  |  " + this.compteur + "  : "  + this.nbRand);

        this.props.addScore({
            name : this.state.name,
            nbTry : this.compteur,
            nbToFind : this.nbRand
        });
    }


    number(event) {
        event.preventDefault();
        let nbGiven = parseInt(event.target[0].value);
        console.log(""  + this.nbRand);
        if (nbGiven === this.nbRand) {
            this.compteur ++;
            console.log("find: " + this.compteur);
            this.setState({...this.state, content : "vous avez trouvé aprés " + this.compteur + " essai"});
            this.restart();
        } else if (nbGiven > this.nbRand) {
            this.compteur ++;
            console.log("en dessous" + this.compteur);
            this.setState({...this.state, content : "c'est plus petit , vous avez fait " + this.compteur + " essai"});
        } else if (nbGiven < this.nbRand) {
            this.compteur ++;
            console.log("au dessus");
            this.setState({...this.state, content : "c'est plus grand vous avez fait " + this.compteur + " essai"});
        }
    }


    generateRand(){
        let nb = Math.floor(Math.random()*(101));
        return nb;
    }


    lose(){
        this.compteur =-1;
        this.restart();
    }


    restart(){
        this.addScore();

        this.nbRand = this.generateRand();
        this.compteur=0;
        this.setState({...this.state, content : ""});
    }


    render(){
        return (
            <div>
                <h2>nombre a trouver</h2>
                <p>vous devez trouver le nombre entre 0 et 100</p>
                <form onSubmit={ event => this.number(event) }>
                    <label>
                        proposition : <input type="text" />
                    </label>
                    <button>valider</button>

                    <p>{this.state.content}</p>
                </form>
                <button onClick={() => this.lose()}>recommencer</button>
                <Score/>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        scores: state.scores
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addScore: score => {
            dispatch(addScore(score))
        },
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(LeNombreATrouver));
