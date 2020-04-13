import React, { Component } from 'react';
import Background from './cielo.jpg';
import mainPerfil from './Perfil.png';
import MainTrabajos from './Black.jpg';
import './Header.css';
/*import { Link } from 'react-router-dom';*/

const myStyles = {
    backgroundImage: `url( ${Background} )`,
    height: '570vh',
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

            <div>
                <h1 className="Titulosinicio">Sobre mí</h1>
                <h2 className="Textoinfo">Hola, mi nombre es Nicolas, tengo 21 años,
                <br></br> nací en el barrio de Boedo, barrio de murga y carnaval (?. 
                </h2>
            </div>
                <h1 className="Titulosinicio">Trabajos</h1>
                <img className="Trabajosfoto" src={this.props.MainTrabajos}></img> 
                <img className="Trabajosfoto" src={this.props.MainTrabajos}></img>
                <img className="Trabajosfoto" src={this.props.MainTrabajos}></img>
                <img className="Trabajosfoto" src={this.props.MainTrabajos}></img>   
            
            <div>
                <h1 className="Titulosinicio">Hobbies</h1>
            </div>            
            <div>
                <h1 className="Titulosinicio">Contacto</h1>
            </div>
            </header>

        );


    }




};

export default Header;