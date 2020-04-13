import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Components/Navbar/Navigation';
import Header from './Components/Header/Header';
import * as serviceWorker from './serviceWorker';
//import App from './App';

class App extends Component {
    render() {
        return(
            <div>
                <Navigation logoTitle="NICOLAS WOITOWIEZ"/>
                <Header title="Web Developer" button="Github"/>
            </div>
        );

    }
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
