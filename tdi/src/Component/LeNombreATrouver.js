import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { addScore, delScore } from "../redux/actions";

export class LeNombreATrouver extends React.Component
{
    constructor(props) {
        super(props);
        this.compteur = 0;
        this.nbRand = this.generateRand();

        //les states sont les seuls éléments destiné a changer graphiquement
        this.state= {
            content : "",
            name : this.props.name,
            scores : []
        };
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
            this.setState({...this.state, content : "vous avez fait " + this.compteur + " essai"});
        } else if (nbGiven < this.nbRand) {
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
        let newScore = this.props.scores;
            newScore.push({
                name : this.state.name,
                nbTry : this.compteur,
                nbToFind : this.nbRand
            });
            

            newScore.sort((a, b) => {
                if( b.nbTry ==-1){
                    return -1;
                }
                else if (a.nbTry < b.nbTry && a.nbTry>0 && b.nbTry>0) {
                    return -1;
                }
                else if (a.nbTry > b.nbTry && a.nbTry>0 && b.nbTry>0) {
                    return +1;
                }
            });
            this.props.addScore(newScore);

            if(newScore.length > 5)
            {
                newScore.pop();
            }
            console.log('score', this.props.scores)


        //save dans database avec -1
        this.nbRand = this.generateRand();
        this.compteur=0;
        this.setState({...this.state, content : ""});
    }


    render(){
        const { scores } = this.props;

        console.log('scores', scores)
        return (
            <div>
            <h2>nombre a trouver</h2>
            <p>vous devez trouver le nombre entre 1 et 100</p>
            <form onSubmit={ event => this.number(event) }>
                <label>
                 proposition : <input type="text" />
                </label>
                <button>valider</button>

                <p>{this.state.content}</p>
            </form>
            <button onClick={() => this.lose()}>recommencer</button>
                <table className="style"> <thead><tr><th>Nom</th> <th>score</th> <th>nb a trouver</th> </tr></thead><tbody>
                {scores.map((score , index) => {
                    return (
                        <tr key={index}>
                            <td>{score.name}</td>
                            <td>{score.nbTry}</td>
                            <td>{score.nbToFind}</td>
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
