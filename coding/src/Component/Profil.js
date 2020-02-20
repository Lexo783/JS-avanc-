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
                <table className="style"> <thead><tr><th>prenom</th> <th>nom</th> <th>date naissance</th> <th>bio</th> <th>city</th><th>favoris</th></tr></thead>
                    <tbody>
                    {users.map((user , index) => {
                        return (
                            <tr key={index}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.birthDate}</td>
                                <td>{user.bio}</td>
                                <td>{user.city}</td>

                            </tr>
                        );
                    })}
                    </tbody></table>
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
