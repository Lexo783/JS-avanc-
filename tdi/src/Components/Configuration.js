import React from 'react';
import App from '../App';

export class Configuration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        App.props = event.target.value;
    }

    handleSubmit(event) {
        alert('Le nom a été soumis : ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
            Nom :
                <input type="text" placeholder="votre nom" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Envoyer" />
            </form>
    );
    }
}
export default Configuration;