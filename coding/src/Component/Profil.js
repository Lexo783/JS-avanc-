import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";


export class Profil extends React.Component
{
    constructor(props) {
        super(props);
    }


    render()
    {
        const { users } = this.props;
        return (
            <div>
                <h3>Votre profil</h3>
                {users.map((user , index) => {
                        return (
                            <div key={index} id="profil">
                                <div id="profilTexte">
                                    <p>Votre prénom:</p>
                                    <p>Votre nom:</p>
                                    <p>Date de naissance:</p>
                                    <p>Biographie:</p>
                                    <p>Ville:</p>
                                </div>
                                <div id="profilUser">
                                    <p>{user.firstName}</p>
                                    <p>{user.lastName}</p>
                                    <p>{user.birthDate}</p>
                                    <p>{user.bio}</p>
                                    <p>{user.city}</p>
                                </div>


                            </div>
                        );
                    })}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        users : state.users
    };
};

export default withRouter(connect(
    mapStateToProps
)(Profil));
