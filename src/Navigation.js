import React, { Component } from 'react';

// import './App.css';

import './Navigation.css';

class Navigation extends Component {
  render() {
      const secciones = ['Inicio', 'Sobre mi', 'Trabajos', 'Hobbies', 'Contacto' ];
      const navLinks = secciones.map( seccion=> {
        return (
            <li><a href={'#' + seccion }>{seccion}</a></li>
        )

      });
    return (
        <nav>
            <h2 className="logo">{this.props.logoTitle}</h2>

            <ul>
                {navLinks}
            </ul>
        </nav>


    );
  }
}

export default Navigation;

