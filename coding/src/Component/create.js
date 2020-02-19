import React from 'react';
export default class create extends React.Component {

constructor(props){
    super(props);
}

    takeInformation(event)
    {
        event.preventDefault();
        let info ={firstName : event.target[0].value,lastName : event.target[1].value ,birthDate: event.target[2].value ,bio : event.target[3].value, city: event.target[4].value};
        console.log(info);
    }


    render(){
        return(
            <div>
                <h3>La création d'un utilisateur</h3>
                <form onSubmit={ event => this.takeInformation(event) }>
                    <label> Votre Prénom : <input type="text"/></label> <br/>
                    <label>Votre Nom : <input type="text" /></label><br/>
                    <label> Votre date de naissance : <input type="text"/></label><br/>
                    <label>Votre biographie : <input type="text" /></label><br/>
                    <label> Votre ville : <input type="text"/></label><br/>
                    <button>valider</button>
                </form>
            </div>
        );
    }
}