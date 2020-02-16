import React, { Component } from 'react';

// import './App.css';

import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
        <nav>
            <h2 className="logo">{this.props.logoTitle}</h2>

            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#sobremi">Sobre mi</a></li>
                <li><a href="#trabajos">Trabajos</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>


    );
  }
}

export default Navigation;
