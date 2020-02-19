import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import { addScore } from "../redux/actions";

import Score from "./Score";


export class FindTheNumber extends React.Component
{
    constructor(props) {
        super(props);
        this.count = 0;
        this.nbRand = this.generateRand();
        this.scores = [];

        this.state= {
            content : "",
            name : this.props.name,
        };
    }


    addScore(){
        console.log(""+ this.state.name + "  |  " + this.count + "  : "  + this.nbRand);

        this.props.addScore({
            name : this.state.name,
            nbTry : this.count,
            nbToFind : this.nbRand
        });
    }


    number(event) {
        event.preventDefault();
        let nbGiven = parseInt(event.target[0].value);
        console.log(""  + this.nbRand);
        if (nbGiven === this.nbRand) {
            this.count ++;
            console.log("find: " + this.count);
            this.setState({...this.state, content : "vous avez trouvé aprés " + this.count + " essai"});
            this.restart();
        } else if (nbGiven > this.nbRand) {
            this.count ++;
            console.log("en dessous" + this.count);
            this.setState({...this.state, content : "c'est plus petit , vous avez fait " + this.count + " essai"});
        } else if (nbGiven < this.nbRand) {
            this.count ++;
            console.log("au dessus");
            this.setState({...this.state, content : "c'est plus grand vous avez fait " + this.count + " essai"});
        }
    }


    generateRand(){
        let nb = Math.floor(Math.random()*(101));
        return nb;
    }


    lose(){
        this.count =-1;
        this.restart();
    }


    restart(){
        this.addScore();

        this.nbRand = this.generateRand();
        this.count=0;
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
)(FindTheNumber));
