import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import { addUser} from "../redux/actions";


export class Create extends React.Component {
    constructor(props){
        super(props);
    }


    setName(event) {
        event.preventDefault();
        this.props.nameState(event.target[0].value);
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
