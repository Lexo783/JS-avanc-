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
                {users.map((user , index) => {
                        return (
                            <div key={index}>
                                <p>Votre prénom:  {user.firstName}</p>
                                <p>Votre nom:  {user.lastName}</p>
                                <p>Date de naissance:  {user.birthDate}</p>
                                <p>Biographie:  {user.bio}</p>
                                <p>Ville:  {user.city}</p>

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
