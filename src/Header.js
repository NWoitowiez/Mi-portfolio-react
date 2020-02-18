import React, {Component} from 'react';
import Background from './img/cielo.jpg';
import mainPerfil from'./img/Perfil.png';

import './Header.css';

const myStyles = {
    backgroundImage: `url( ${Background} )`,
    height: '500vh',
    BackgroundSize: 'cover'
}

class Header extends Component {
    render(){
        return (
            
            <header style= {myStyles}>
                <img src={mainPerfil}></img>
                <h1>{this.props.title}</h1>
                <p>HTML / CSS / JS / BOOTSTRAP / REACT</p>
                <a href="#button">{this.props.button}</a>
                <h2>Sobre mi</h2>
                
                <h2>Trabajos</h2>
                
                <h2>Hobbies</h2>
                
                <h2>Contacto</h2>
            </header>

        );


    }




};

export default Header;