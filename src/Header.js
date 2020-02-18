import React, {Component} from 'react';
import Background from './img/cielo.jpg';
import mainPerfil from './img/Perfil.png';

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

            <div>
                <h1 className="Titulosinicio">Sobre mí</h1>
                <h2 className="Textoinfo">Hola, mi nombre es Nicolas, tengo 21 años,
                <br></br> nací en el barrio de Boedo, barrio de murga y carnaval (?. 
                <br></br> Agrego texto que despues va a ser mejorado no os preocupeis.</h2>
            </div>
                <h1 className="Titulosinicio">Trabajos</h1>
            
                <h1 className="Titulosinicio">Hobbies</h1>
                
                <h1 className="Titulosinicio">Contacto</h1>
            </header>

        );


    }




};

export default Header;