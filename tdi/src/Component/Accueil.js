import React from 'react';

export default class Accueil extends React.Component 
{
    render(){
        return(
            <div>
                <h1>Hello {this.props.name} !</h1>
            </div>
        );
    }
}