import React from 'react';
import Search from "./Search";
import TableGame from "../data/TableGame";


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        let tableName = [];
        for (let i=0; i<TableGame.length; i++){
            tableName.push(TableGame[i].name);
        }

        this.state = {
            table : TableGame,
            list: tableName,
            favoritesGame : []
        }
    }


    render(){
        return(
            <div>

                <h3>Voici les images du jours</h3>
                <Search list={this.state.list}/>
            </div>
        );
    }
}

