import React from 'react';

export default class User extends React.Component {
    constructor(props){
        super(props);
        this.compteur = 0;
        this.state = {
            number: this.randomNb(),
            texte: ''
        };
        console.log(this.state.number);
    }

    result(event) {
        event.preventDefault();
        let number = parseInt(event.target[0].value);
        console.log(number);
        if (number > 100 || number < 0) {
            this.setState({...this.state,texte:'Entre 0 et 100 stp'})
        } else if (number === this.state.number){
            if (this.compteur === 0) {
                this.compteur = 1;
            }
            this.setState({...this.state,texte:'Gagner ! En '+this.compteur+' essaie.'})
        } else if (number < this.state.number) {
            this.compteur++;
            this.setState({...this.state,texte:'C’est plus grand, '+this.compteur+' essaie.'})
        } else if (number > this.state.number) {
            this.compteur++;
            this.setState({...this.state,texte:'C’est plus petit, '+this.compteur+' essaie.'})
        } else {
            this.setState({...this.state,texte:'C’est pas un chiffre.'})
        }
    }

    recommencer() {
        this.setState({
            ...this.state,texte:'Perdu ! En '+this.compteur+' essaie.',
            ...this.state,number:this.randomNb()
        })
        console.log(this.state.number);
    }

    randomNb() {
        return Math.floor(Math.random() * (101));
    }
      
    render(){
        return(
            <div>
              <h2>Le nombre à trouver</h2>
              <form onSubmit={event => this.result(event)}>
                <label>
                    Choisisez un nombre entre 0 et 100 : <input type="text" />
                </label>
                <button>Envoyer</button>
              </form>
              <button onClick={() => this.recommencer()}>Recommencer</button>
              <h4>{this.state.texte}</h4>
            </div>
        );
    }
}