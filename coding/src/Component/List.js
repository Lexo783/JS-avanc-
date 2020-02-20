import React from "react";
import Hearth from "../pictures/hearth.png";
import EmptyHearth from "../pictures/hearth_empty.png";
import {addFavorite, delFavorite} from "../redux/actions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";


export class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: [],
            favoritesGame : []
        };
        this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount() {
        this.setState({
            filtered: this.props.items
        });
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            filtered: nextProps.items
        });
    }


    handleChange(e) {
        // Variable to hold the original version of the list
        let currentList = [];
        // Variable to hold the filtered list before putting into state
        let newList = [];

        // If the search bar isn't empty
        if (e.target.value !== "") {
            // Assign the original list to currentList
            currentList = this.props.items;

            // Use .filter() to determine which items should be displayed
            // based on the search terms
            newList = currentList.filter(item => {
                // change current item to lowercase
                const lc = item.name.toLowerCase();
                // change search term to lowercase
                const filter = e.target.value.toLowerCase();
                // check to see if the current list item includes the search term
                // If it does, it will be added to newList. Using lowercase eliminates
                // issues with capitalization in search terms and search content
                return lc.includes(filter);
            });
        } else {
            // If the search bar is empty, set newList to original task list
            newList = this.props.items;
        }
        // Set the filtered state based on what our rules added to newList
        this.setState({
            filtered: newList
        });
    }


    test(gameName){
        const { favoritesGame } = this.props;
        if (favoritesGame.includes(gameName)) {
            return Hearth;
        }
        else {
            return EmptyHearth;
        }
    }


    testFunc(gameName){
        const { favoritesGame } = this.props;
        if (favoritesGame.includes(gameName)) {
            return this.props.delFavorite(gameName);
        }
        else {
            return this.props.addFavorite(gameName);
        }
    }


    render() {
        const { favoritesGame } = this.props;
        console.log(favoritesGame)
        return (
            <div>
                <div id="listGameInput">
                <input  type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                </div>
                    {this.state.filtered.map((game, i) => {
                        return (
                            <div key={i} className="gameDiv">
                                <img src={game.cover} className="gameImg"/>
                                <div className="description">
                                    <div className="gameTitle">
                                        <p>
                                            {game.name}
                                        </p>
                                        <img src={this.test(game.name)} id={i} className="pictureFavorite"
                                             onClick={() => this.testFunc(game.name)}/>
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
                    })
                    }

            </div>
        )
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
)(List));
