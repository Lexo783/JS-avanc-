import React from 'react';
import FavoriteList from "./FavoriteList";


export default class favorite extends React.Component {
    render(){
        return(
            <div>
                <h3>Voici vos favoris</h3>
                <FavoriteList/>
            </div>
        );
    }
}
