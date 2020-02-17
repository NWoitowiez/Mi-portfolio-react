import React, {Component} from 'react';

import Background from './img/cielo.jpg';

const myStyles = {
    backgroundImage: `url( ${Background} )`,
    height: '500vh',
    BackgroundSize: 'cover'

}

class Header extends Component {
    render(){
        return (
            
            <header style= {myStyles}>

            </header>

        );


    }




};

export default Header;