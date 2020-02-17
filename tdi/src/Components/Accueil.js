import React from 'react';
import App from '../App';

export class Accueil extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
      if (App.login == "Hugo") {
        return (
        <p>Au grand Seigneur {App.login}, je suis à votre disposition.</p>
        );
        } else {
          return (
          <p>Hello {App.login}, je suis la page d accueil.</p>
          );
        }
    }
}
export default Accueil;