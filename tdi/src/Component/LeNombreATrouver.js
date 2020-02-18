import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { addScore, delScore } from "../redux/actions";

export class LeNombreATrouver extends React.Component
{
    constructor(props) {
        super(props);
        this.compteur = 0;

        //les states sont les seuls éléments destiné a changer graphiquement
        this.state= {
            nbRand : this.generateRand(),
            content : "",
            name : this.props.name,
            scores : []
        };
    }



    addScore(){
        console.log(""+ this.state.name + "  |  " + this.compteur + "  : "  + this.state.nbRand);
        this.props.addScore({
            name : this.state.name,
            nbTry : this.compteur,
            nbToFind : this.state.nbRand
        });

        //console.log("ajouté au score");
    }


    delScore(index) {
        console.log(this);
        this.props.delScore(index);
    }


    number(event) {
        event.preventDefault();
        let nbGiven = parseInt(event.target[0].value);
        console.log(""  + this.state.nbRand);
        if (nbGiven === this.state.nbRand) {
            this.compteur ++;
            console.log("find: " + this.compteur);
            this.setState({...this.state, content : "vous avez trouvé aprés " + this.compteur + " essai"});
            this.restart();
        } else if (nbGiven > this.state.nbRand) {
            this.compteur ++;
            console.log("en dessous" + this.compteur);
            this.setState({...this.state, content : "vous avez fait " + this.compteur + " essai"});
        } else if (nbGiven < this.state.nbRand) {
            this.compteur ++;
            console.log("au dessus");
            this.setState({...this.state, content : "vous avez fait " + this.compteur + " essai"});
        }
    }

    generateRand(){
        let nb = Math.round(Math.random()*(101));
        console.log(nb);
        return nb;
    }


    lose(){
        console.log("perdu");
        this.compteur =-1;
        this.restart();
    }


    restart(){
        this.addScore();
        //save dans database avec -1

        this.setState({...this.state, nbRand : this.generateRand()});
        this.compteur=0;
        this.setState({...this.state, content : ""});
    }


    render(){
        const { scores } = this.props;

        return (
            <div>
            <h2>nombre a trouver</h2>
            <p>vous devez trouver le nombre entre 1 et 100</p>
            <form onSubmit={ event => this.number(event) }>
                <label>
                 proposition : <input type="text" />
                </label>
                <button>valider</button>
                <button onClick={() => this.lose()}>recommencer</button>/

                <p>{this.state.content}</p>
            </form>

                <table className="style"> <thead><tr><th>Nom</th> <th>score</th> <th>nb a trouver</th> </tr></thead><tbody>
                {scores.map((score , index) => {
                    return (
                        <tr key={index}>
                            <td>{score.name}</td>
                            <td>{score.nbTry}</td>
                            <td>{score.nbToFind}</td>
                            <td>
                                <button onClick={() => this.delScore(index)}>del</button>
                                <button onClick={() => this.delScore(index)}>Delete</button>
                            </td>
                        </tr>
                    );
                })}
                </tbody></table>

            </div>
    );
        //fonction fléché renvoie au parent (le bouton n'a pas de fonction lose)
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
        /*editStudent: datas => {
            dispatch(editStudent(datas))
        },*/
        delScore: index => {
            dispatch(delScore(index))
        }
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(LeNombreATrouver));
