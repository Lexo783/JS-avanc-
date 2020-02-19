import React from 'react';

export default class Configuration extends React.Component {

    setName(event) {
        event.preventDefault();
        this.props.name(event.target[0].value);
    }

    render(){
        return (
            <div>
              <h2>Configuration</h2>
              <form onSubmit={ event => this.setName(event) }>
                <label>
                    User : <input type="text" />
                </label>
                <button>Envoyer</button>
              </form>
            </div>
          );
    }
}
