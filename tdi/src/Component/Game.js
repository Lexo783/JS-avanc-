import React from 'react';

export default class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            number: Math.floor(Math.random() * (100 - 0 +1)) + 0,
            perdu: 'perdu !',
            texte: ''
        };
        console.log(this.state.number);
    }

    result(event) {   
        event.preventDefault();
        let number = event.target[0].value;
        console.log(number);
        if (number == this.state.number){
            this.setState({...this.state,texte:'Gagner !'})
        } else if (number < this.state.number) {
            this.setState({...this.state,texte:'C’est plus grand.'})
        } else if (number > this.state.number) {
            this.setState({...this.state,texte:'C’est plus petit.'})
        }
    }

    perdu() {
        this.setState({
            ...this.state,texte:this.state.perdu
          })
      }

      
    render(){
        return(
            <div>
              <h2>Le nombre à trouver</h2>
              <form onSubmit={event => this.result(event)}>
                <label>
                    Votre nombre : <input type="text" />
                </label>
                <button>Envoyer</button>
                <button onClick={() => this.perdu()}>Recommencer</button>
                <h4>{this.state.texte}</h4>
              </form>
            </div>
        );
    }
}