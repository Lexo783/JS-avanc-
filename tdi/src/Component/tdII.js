import React from 'react';

export default class tdII extends React.Component {


    render(){
        return(
            <div>
                <h1>
                    Trouver le bon chiffre
                </h1>
                <form onSubmit={ event => this.setNumber(event)}>
                    <label>
                        Le nombre : <input type="text" />
                    </label>
                    <button>Let's try</button>
                </form>
            </div>
        );
    }
}