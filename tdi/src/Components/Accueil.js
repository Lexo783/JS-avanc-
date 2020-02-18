import React from 'react';

export class Accueil extends React.Component {

  render() {
    if (this.props.name === "Hugo") {
      return (
        <p>Au grand Seigneur {this.props.name}, je suis à votre disposition.</p>
      );
    } else {
      return (
        <p>Hello {this.props.name}, je suis la page d accueil.</p>
      );
    }
  }
  
}
export default Accueil;