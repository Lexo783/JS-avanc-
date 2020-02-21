import React from 'react';
import Hearth from '../pictures/hearth.png'
import TableGame from "../data/TableGame";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {addFavorite, delFavorite} from "../redux/actions";


export class FavoriteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoritesGame : [],
            table : TableGame
        };

    }


    render(){
        return(
            <div>
                <h3>Voici vos favoris</h3>
                <section className="picturesSection">
                    {this.state.table.map((game, i) =>
                        {
                            return this.display(game, i)
                        }
                    )}
                </section>
            </div>
        );
    }


    display(game, i){
        const { favoritesGame } = this.props;

        if(favoritesGame.includes(game.name)){
            return (

                <div key={i} className="gameDiv">
                    <img src={game.cover} className="gameImg"/>
                    <div className="description">
                        <div className="gameTitle">
                            <p >
                                {game.name}
                            </p>
                            <img src={Hearth} id={i} className="pictureFavorite" onClick={() =>this.props.delFavorite(game.name.toString())}/>
                        </div>
                        <p>{game.description}</p>
                        <p>
                            genre : {game.genre}
                        </p>
                        <p>
                            date de sortie : {game.date}
                        </p>
                    </div>
                </div>
            )
        }
    }
}


const mapStateToProps = state => {
    return {
        favoritesGame : state.favoritesGame
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addFavorite: gameName => {
            dispatch(addFavorite(gameName))
        },
        delFavorite : gameName=>{
            dispatch(delFavorite(gameName))
        }
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoriteList));
