import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import { addUser} from "../redux/actions";


export class Create extends React.Component {
    constructor(props){
        super(props);
    }


    takeInformation(event)
    {
        event.preventDefault();
        this.props.addUser({
            firstName : event.target[0].value,
            lastName : event.target[1].value ,
            birthDate: event.target[2].value ,
            bio : event.target[3].value,
            city: event.target[4].value
        });
    }


    render(){
        return(
            <div>
                <h3>La création d'un utilisateur</h3>
                <form id="createForm" onSubmit={ event => this.takeInformation(event) }>
                    <div id="createFormData">
                    <div id="createTexte">
                        <label id="createFirstName"> Votre Prénom : </label>
                        <label id="createLastName">Votre Nom : </label>
                        <label id="createBirthDate"> Votre date de naissance : </label>
                        <label id="createBio">Votre biographie : </label>
                        <label id="createCity"> Votre ville : </label>
                    </div>
                    <div id="createUser">
                        <input for="#createFirstName" type="text"/>
                        <input for="#createLastName" type="text"/>
                        <input for="#createBirthDate" type="text"/>
                        <input for="#createBio" type="text" />
                        <input for="#createCity" type="text"/>
                    </div>
                    </div>
                    <button>valider</button>
                </form>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        scores: state.scores
    };
};


const mapDispatchToProps = dispatch => {
    return {
        addUser: user => {
            dispatch(addUser(user))
        },
    };
};


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Create));
