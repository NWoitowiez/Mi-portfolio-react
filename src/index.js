import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navigation from './Navigation';
import Header from './Header';
import * as serviceWorker from './serviceWorker';

class App extends Component {
    render() {
        return (
            <div>
                <Navigation LogoTitle="NICOLAS WOITOWIEZ"/>
                <Header />
            </div>
        );
    }
}

ReactDOM.render(<Navigation logoTitle="NICOLAS WOITOWIEZ" />, document.getElementById('root'));
serviceWorker.unregister();
