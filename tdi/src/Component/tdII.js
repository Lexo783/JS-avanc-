import React from 'react';

export default class tdII extends React.Component 
{
    constructor(props){
        super(props);
        this.randomNBR = this.setRamdom();
        this.compteur = 0;

        this.state = {
            content: ''
        }
    }

    setNumber(event){
        event.preventDefault();
        let parseEvent = parseInt(event.target[0].value);
        if(parseEvent<0 || parseEvent>100)
        {
            console.log("abandon");
            this.compteur = -1;
            this.setState({
                ...this.state, content: 'Tu abandonnes.'
            });
        }
        else if(parseEvent==this.randomNBR){
            console.log("trouvé");
            this.setState({
                ...this.state, content: 'tu as trouvé, tu as essayé ' + this.compteur + ' fois'
            });
            // enregistrer score dans la database 
            // restart();
        }
        else if(parseEvent<this.randomNBR){
            console.log("en dessous");
            this.compteur ++;
            this.setState({
                ...this.state, content: 'c\'est au dessous, tu as essayé ' + this.compteur + ' fois'
            });
        }
        else if(parseEvent>this.randomNBR){
            console.log("au dessus");
            this.compteur ++;
            this.setState({
                ...this.state, content: 'c\'est au dessus, tu as essayé ' + this.compteur + ' fois'
            });
        }

    }

    setRamdom()
    {
        let nbr = (Math.round(Math.random()*101));
        console.log('setRandom',nbr);
        return nbr;
    }

    score()
    {
        
    }

    restart()
    {
        this.setState({
            ...this.state,content: ''
        })
        this.randomNBR = this.setRamdom();
    }



    render(){
        return(
            <div>                                  
                <h1>Trouver le bon chiffre</h1>
                <form onSubmit={ event => this.setNumber(event) }>
                    <label>
                        Le nombre : <input type="text" />
                    </label>
                    <button>Let's try</button>
                </form>
                <button onClick={() => this.restart()}>AGAIN</button>
                {this.state.content}
            </div>
        );
    }
}