import React from 'react';

export default class tdII extends React.Component 
{
    constructor(props){
        super(props);
        this.randomNBR = this.setRamdom();
        this.content = <p></p>;
        this.compteur = 0;

    }

    setNumber(event){
        event.preventDefault();
        var parseEvent = parseInt(event.target[0].value);
        this.props.nbr(parseEvent);
        if(parseEvent<0 || parseEvent>100)
        {
            console.log("abandon");
            this.compteur = -1;
            this.content = <p>tu abandonnes</p>
        }
        else if(parseEvent==this.randomNBR){
            console.log("trouvé");
            this.content = <p>tu as trouvé, tu as essayé {this.compteur} fois</p>
            // enregistrer score dans la database 
            // restart();
        }
        else if(parseEvent<this.randomNBR){
            console.log("en dessous");
            this.compteur ++;
            this.content = <p>c'est en dessous , tu as essayé {this.compteur} fois</p>
        }
        else if(parseEvent>this.randomNBR){
            console.log("au dessus");
            this.compteur ++;
            this.content = <p>c'est au dessus, tu as essayé {this.compteur} fois</p>
        }

    }

    setRamdom()
    {
        let nbr = (Math.round(Math.random()*101));
        console.log('setRandom',nbr);
        return nbr;
    }

    restart()
    {
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
                {this.content}
            </div>
        );
    }
}