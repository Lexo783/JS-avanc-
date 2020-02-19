import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";


export class Score extends React.Component
{
    constructor(props) {
        super(props);
    }


    render()
    {
        const { scores } = this.props;

        return (
            <div>
            <table className="style"> <thead><tr><th>Nom</th> <th>score</th> <th>nb a trouver</th> </tr></thead>
                <tbody>
                {scores.map((score , index) => {
                    return (
                        <tr key={index}>
                            <td>{score.name}</td>
                            <td>{score.nbTry}</td>
                            <td>{score.nbToFind}</td>
                        </tr>
                    );
                })}
                </tbody></table></div>
        )
    }
}


const mapStateToProps = state => {
    return {
        scores: state.scores
    };
};

export default withRouter(connect(
    mapStateToProps
)(Score));

