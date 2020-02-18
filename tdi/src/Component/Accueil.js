import React from 'react';

export default class Accueil extends React.Component 
{
    render(){
        if (this.props.name === "Hugo"){
            return(
                <div>
                    <h1>Grand Seigneur {this.props.name}, je suis à votre disposition.</h1>
                </div>
            );
        } else {
        return(
            <div>
                <h1>Hello {this.props.name} !</h1>
            </div>
        );
        }
    }
}