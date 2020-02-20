import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";


export class FavoriteList extends React.Component
{
    constructor(props) {
        super(props);
    }


    render()
    {
        const { favoritesGame } = this.props;
        console.log(favoritesGame);
        return (
            <div>
                <table className="style"> <thead><tr><th>name</th> </tr></thead>
                    <tbody>
                    {favoritesGame.map((fav , index) => {
                        return (
                            <tr key={index}>
                                <td>{fav.name}</td>
                            </tr>
                        );
                    })}
                    </tbody></table>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        favoritesGame : state.favoritesGame
    };
};

export default withRouter(connect(
    mapStateToProps
)(FavoriteList));
